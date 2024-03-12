import "./singleEmployee.css"
const SingleEmployee = () => {
    const employee = {name:"kkk"}
    return (
        <div className="single-employee-container">
            <div className="single-employee-info">
                {employee.name}
            </div>
            <div className="single-employee-form-container">
                <form className="single-employee-form">
                    <label>שם עובד</label>
                    <input value={employee.name} type="text" name="name" placeholder="הכנס שם עובד"></input>
                    <select name="role" /*id="type/role" */>
                        <option selected={employee.role === 'מנהל'} value="מנהל">מנהל</option>
                        <option selected={employee.role === 'נציג'} value="נציג">נציג</option>
                    </select>
                    <button>עדכון</button>
                </form>
            </div>
        </div>
    )
}

export default SingleEmployee
