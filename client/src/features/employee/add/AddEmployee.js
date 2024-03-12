import "./addEmployee.css"
const AddEmployee = () => {


    return (
        <div className="add-employee-container">
            <form className="add-employee-form">
                <input type="text" required name="name" placeholder="שם הנציג" />
                <input type="text" required name="username" placeholder="שם משתמש" />
                <input type="password" required name="password" placeholder="סיסמה" />
                <input type="text" name="phone" placeholder="פלאפון" />
                <input type="email" name="email" placeholder="אימייל" />
                <select name="role" /*id="type/role" */>
                    <option value="">בחר תפקיד</option>
                    <option value="מנהל">מנהל</option>
                    <option value="נציג">נציג</option>
                </select>
                <button type="submit">שלח</button>
            </form>

        </div>
    )
}

export default AddEmployee
