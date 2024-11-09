import React, { useState } from 'react'; // Import useState for managing dropdown visibility
import './navbar.scss';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
    };

    const handleLogout = () => {
        // Implement logout functionality
        console.log("Logged out");
        // Redirect to login page or handle logout
    };

    const handleHelp = () => {
        // Implement help functionality, e.g., open a help modal or redirect to help page
        console.log("Help clicked");
    };

    return (
        <div className='navbar'>
            <div className="logo">
                <img src="logo.png" alt="" />
                <span className="highlight">LAB</span>manager
            </div>
            <div className="icons">
                <div className="notification">
                    <img src="notification.png" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="user.png" alt="" />
                    <span>Admin</span>
                </div>
                <div className='setting'>
                    <img src="setting.png" alt="" className="icon" onClick={toggleDropdown} />
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <button onClick={handleLogout}>Logout</button>
                            <button onClick={handleHelp}>Help</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;