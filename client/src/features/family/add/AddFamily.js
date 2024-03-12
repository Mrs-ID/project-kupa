import "./addFamily.css"
const AddFamily = () => {
    return (
        <div className="add-family-container">
            <form className="add-family-form">
                <input type="text" required name="familyName" placeholder="שם משפחה" />
                <input type="text" required name="username" placeholder="שם משתמש" />
                <input type="password" required name="password" placeholder="סיסמה" />
                <h3>פרטי הבעל</h3>
                <input type="text" name="husbandName" placeholder="שם" />
                <input type="text" name="husbandTZ" placeholder="ת.ז." />
                <input type="date" name="birthDate" placeholder="תאריך לידה" />
                <input type="text" name="phone" placeholder="פלאפון" />
                <input type="text" name="occupation" placeholder="עיסוק" />
                <input type="text" name="workPlace" placeholder="מקום עבודה" />
                <h3>פרטי האשה</h3>
                <input type="text" name="husbandName" placeholder="שם" />
                <input type="text" name="husbandTZ" placeholder="ת.ז." />
                <input type="date" name="birthDate" placeholder="תאריך לידה" />
                <input type="text" name="phone" placeholder="פלאפון" />
                <input type="text" name="occupation" placeholder="עיסוק" />
                <input type="text" name="workPlace" placeholder="מקום עבודה" />

                <input type="text" name="street" placeholder="רחוב" />
                <input type="text" name="neighborhood" placeholder="שכונה" />
                <input type="text" name="city" placeholder="עיר" />
                <input type="text" name="phone" placeholder="טלפון" />
                <input type="email" name="email" placeholder="אימייל" />

                <select required="true" name="maritalStatus">
                    <option value="">מצב משפחתי</option>
                    <option value="נשוי/אה">נשוי/אה</option>
                    <option value="רווק/ה">רווק/ה</option>
                    <option value="גרוש/ה">גרוש/ה</option>
                    <option value="פרוד/ה">פרוד/ה</option>
                    <option value="אלמן/נה">אלמן/נה</option>
                </select>

                <h3>פרטי בנק</h3>               
                <input type="text" required="true" name="bankDetails" placeholder="שם בעל החשבון" />
                <input type="text" required="true" name="bankNumber" placeholder="מספר בנק" />
                <input type="text" required="true" name="branchNumber" placeholder="מספר סניף" />
                <input type="text" required="true" name="accountNumber" placeholder="מספר חשבון" />

                <button type="submit">שלח</button>
            </form>

        </div>
    )
}

export default AddFamily
