const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Family = require("../models/Family")

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(401).json({
            error: true,
            message: "All fields are required",
            data: null
        })
    }

    const foundFamily = await Family.findOne({ username: username/*,ניתן להוסיף כאן תנאים נוספים כגון פעיל/ נמחק וכו */ }).populate("employee", { name: 1/*ניתן להוסיף שדות להצגה או הסתרה */ })
    if (!foundFamily) {
        return res.status(401).json({
            error: true,
            message: "Unauthorized",
            data: null
        })
    }

    //password
    const match = await bcrypt.compare(password, foundFamily.password)
    if (!match) {
        return res.status(401).json({
            error: true,
            message: "Unauthorized",
            data: null
        })
    }

    // token
    const FamilyInfo = {
        _id: foundFamily._id,
        username: foundFamily.username,
        familyName: foundFamily.familyName,
        husband: foundFamily.husband,
        wife: foundFamily.wife,
        role: foundFamily.role
    }

    const accessToken = jwt.sign(FamilyInfo, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m'/* אומר לכמה זמן הטוקן הטוקן מאושר*/ })
    const refreshToken = jwt.sign({ username: foundFamily.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d'/* אומר לכמה זמן הטוקן הטוקן מאושר*/ })

    res.cookie("jwt", refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.json({ accessToken })
}

const refresh = async (req, res) => {
    const cookies = req.cookies
    //jwt או שהוא ריק או שאין לו את
    if (!cookies?.jwt) {
        return res.status(401).json({
            error: true,
            message: "Unauthorized",
            data: null
        })
    }
    const refreshToken = cookies.jwt
    jwt.verify(refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        async (err, decode) => {
            if (err) {
                return res.status(403).json({
                    error: true,
                    message: "Forbidden",
                    data: null
                })
            }
            const foundFamily = await Family.findOne({ username: decode.username/*,ניתן להוסיף כאן תנאים נוספים כגון פעיל/ נמחק וכו */ }).populate("employee", { name: 1/*ניתן להוסיף שדות להצגה או הסתרה */ })
            const FamilyInfo = {
                _id: foundFamily._id,
                username: foundFamily.username,
                familyName: foundFamily.familyName,
                husband: foundFamily.husband,
                wife: foundFamily.wife,
                role: foundFamily.role
            }

            const accessToken = jwt.sign(FamilyInfo, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m'/* אומר לכמה זמן הטוקן הטוקן מאושר*/ })

            res.json({ accessToken })
        })
}

const logout = async (req, res) => {
    const cookies = req.cookies
    //jwt או שהוא ריק או שאין לו את
    if (!cookies?.jwt) {
        //סטטוס של - אין נתונים
        return res.status(204).json({
            error: true,
            message: "No Content",
            data: null
        })
    }
    res.clearCookie("jwt", {
        httpOnly: true
    })
    res.json({
        error: false,
        message: "Cookie cleard",
        data: null
    })
}
module.exports = { login, refresh, logout }  