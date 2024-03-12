import { MdDeselect, MdLogout, MdSearch } from "react-icons/md"
import MenuLink from "./MenuLink"
import "./sidebar.css"
const SideBar = () => {
    const menuItems = [
        {
            title: "דפים",
            list: [
                {
                    title: "ראשי",
                    path: "/dash",
                    icon: <MdSearch />,
                },
                {
                    title: "משפחות",
                    path: "/dash/families",
                    icon: <MdSearch />,
                }, {
                    title: "נציגים",
                    path: "/dash/employees",
                    icon: <MdSearch />,
                }, {
                    title: "מנהלים",
                    //******************
                    path: "/dash/employees/admin",
                    icon: <MdSearch />,
                },
            ]
        },
        {
            title: "משתמשים",
            list: [
                {
                    title: "הגדרות",
                    path: "/dash/settings",
                    icon: <MdSearch />,
                },
                {
                    title: "עזרה",
                    path: "/dash/help",
                    icon: <MdSearch />,
                },
            ]


        }]
    const user = {
        username: "username",
        fullname: "fullname"
    }
    return <div className="side-bar">
        <div className="side-bar-user">
            <div className="side-bar-user-details">
                <span className="side-bar-user-fullname">{user.fullname}</span>
                <span className="side-bar-user-username">{user.username}</span>
            </div>
        </div>
        <ul className="side-bar-menu-list">{menuItems.map(cat => (<li key={cat.title}>
            <span className="side-bar-menu-cat">{cat.title}</span>
            {cat.list.map(item => (
                <MenuLink item={item} key={item.title} />
            ))}
        </li>)
        )}
        </ul>
        <button className="side-bar-logout">
            <MdLogout />
            יציאה
        </button>

    </div>
}
export default SideBar