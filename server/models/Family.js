const mongoose = require("mongoose")
const ChildSchema = require("./subSchems/ChildSchema")
const ParentSchema = require("./subSchems/ParentSchema")
const RevenuesSchema = require("./subSchems/RevenuesSchema")
const ExpensesSchema = require("./subSchems/ExpensesSchema")
const familySchema = new mongoose.Schema({

    /////////////////////////////////////////////////
    //שדות שהמשפחה יכולה למלא לבד
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    familyName: {
        type: String,
        required: true
    },
    //......................................
    //פרטי הבעל והאשה יהיו חובה עפ"י המצב המשפחתי
    //וכן ילדים אם צוסיפים ילד יש למלא את כל שדות החובה אבל אם אין ילד זה לא צריך להיות חובה למלא ילד
    //......................................
    husband: ParentSchema,
    wife: ParentSchema,
    child: [ChildSchema],
    address: {
        type: { "street": String, "neighborhood": String, "city": String }
    },
    phone: String,
    email: {
        type: String,
        lowercase: true,
        trim: true
    },
    //ניתן אפשרות לסמן כמה
    //אולי לכן זה לא צריך להיות אינום כי אפשר לבחור רק אחד
    //langugue: { type: String, enum: ["Hebrew", "English", "France", "Russit"] },
    marital_status: {
        type: String,
        enum: ["נשוי/אה", "רווק/ה", "גרוש/ה", "פרוד/ה", "אלמן/נה"],
        required: true
    },
    //רב קהילתי
    //rav: String,
    //שייך לקהילה
    //kehila: String,
    //אולי רק כמות כוללת כי ניתן לראות זאת במערך הילדים לפי אורך המערך
    //numChildrenColel: Number,
    bank_details: {
        type: {
            //שם בעל החשבון
            "name": String,
            "bank_number": String,
            "branch_number": String,
            "account_number": String
        },
        required: true
    },
    //סיבת הפניה
    //cause: String,
    //הכנסות
    /*revenues: [RevenuesSchema],
    //הוצאות משפיעות
    expenses: [ExpensesSchema],
    //הוצאות חריגות שעומדות על הפרק
    הוצאות_חריגות: {
        type: [
            { "פריט": String, "סכום": String, "הערות": String }
        ]
        //האם צריך שדה סה"כ או שיחושב אוטומטית
    },
    //חובות
    debts: {
        type: [
            { "למי החוב": String, "סכום": String, "החזר חודשי": String }
        ]
        //האם צריך שדה סה"כ או שיחושב אוטומטית
    },*/
    /////////////////////////////////////////////////
    //שדות שהמשפחה לא יכולה למלא אבל יכולה לראות
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    },
    waiting: {
        type: Boolean,
        //True כאשר מגיש בקשה או מעדכן פרטים
        //כי כבר לא ממתין לטיפול False לאחר שטיפלו בו וקראו את הבקשה בין אם אושר ובין אם לא, נהפוך ל
        default: true
    },
    approved: {
        type: Boolean,
        //False כאשר מגיש בקשה חדשה -עדיין לא מאושר
        //False וכן אם טופל ונבדק ולא זכאי לקבל
        //True כאשר מקבל כסף
        default: false
    },

    //אין לאף אחד אפשרות למלא
    //יתכן ולראות גם לא
    role: {
        type: String,
        default: 'משפחה'
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('Family', familySchema)