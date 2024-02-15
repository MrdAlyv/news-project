import { FaUser } from "react-icons/fa";
import './style.css'
export default function NavBar() {
    return (
        <>
            <div className="nav">
                <h3>MEGA.news</h3>
                <div className="links">
                    <a href="#">Pages</a>
                    <a href="#">Contact Us</a>
                    <a href="#">About Us</a>
                </div>
                <input type="text" placeholder="Search Anything" />
                <div className="user">
                    <FaUser className="userIcon"></FaUser>
                    <span>Username</span>
                </div>
            </div>
        </>
    )

}