const mongoose = require("mongoose")
const ChildSchema = new mongoose.Schema({
    first_name: {
        type: String,
        // requierd: true
    },
    birth_date: {
        type: Date,
        // requierd: true
    },
    school: {
        type: String,
        //ENUM: מעון מטפלת משפחתון גן פרטי עירוני חיידר ביס עממי תיכון סמינר ישיבה קטנה ישיבה גדולה
        enum: ["school", "gan", "וכו"]
    },
    tuition: {
        type: Number,
    },
    salary:{
        type: Number,
    }
}, {
    timestamps: true
})
module.exports = ChildSchema