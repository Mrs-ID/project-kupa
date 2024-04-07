import { Link } from "react-router-dom"
import { useGetAllFamiliesQuery } from "../familiesApiSlice"
import "./FamiliesList.css"
import Search from "../../../components/search/Search"

const FamiliesList = () => {
    const { data: familiesObj, isError, error, isLoading } = useGetAllFamiliesQuery()
    if (isLoading)
        return <h1>Loading...</h1>
    if (isError)
        return <h1>{JSON.stringify(error)}helllo</h1>
    return (
        <div className="families-list">
            <div className="families-list-top">
                <Search placeholder="חיפוש לפי שם משפחה" />
                <Link to="/dash/families/add" className="families-list-add-button">הוספת משפחה</Link>
            </div>
            <table className="families-list-table">
                <thead>
                    <tr>
                        <td>שם משפחה</td>
                        <td>שם הבעל</td>
                        <td>שם האישה</td>
                        <td>מספר ילדים</td>
                        <td>נציג</td>
                        <td>ממתין</td>
                        <td>מאושר</td>
                    </tr>
                </thead>
                <tbody>
                    {console.log(familiesObj.data)}
                    {familiesObj.data?.map(family =>
                        <tr key={family._id}>
                            <td>
                                <div className="families-list-family">
                                    {family.familyName}
                                </div>
                            </td>
                            <td>
                                {family.husband}
                            </td>
                            <td>
                                {family.wife}
                            </td>
                            <td>
                                {/* {family.child.length} */}
                            </td>
                            <td>
                                {family.employee?.name}
                            </td>
                            <td>
                                {family.waiting?"✔":"❓"}
                            </td>
                            <td>
                                {family.approved?"✔":"❓"}
                            </td>
                            <td>
                                <Link to={`/dash/families/${family._id}`} className="families-list-button families-list-view">עדכון</Link>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default FamiliesList
