import './navbar.scss'

const Navbar = () => {
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
                <img src="setting.png" alt="" className="icon" />
            </div>
            </div>
        </div>
    )
}

export default Navbar