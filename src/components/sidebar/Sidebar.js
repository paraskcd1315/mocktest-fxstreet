import './Sidebar.scss';
import logo from '../../assets/images/CompanyLogo.png'

export default function Sidebar() {
    return <div className="Sidebar">
        <div className="logoContainer">
            <img src={logo} alt="Company Logo" />
        </div>
        
        <div className="menuItems py-5">
            <div className="menuItem p-1">
                <div className="box"></div>
            </div>
            <div className="menuItem p-1">
                <div className="box"></div>
            </div>
            <div className="menuItem p-1">
                <div className="box"></div>
            </div>
            <div className="menuItem p-1">
                <div className="box"></div>
            </div>
        </div>
    </div>
}