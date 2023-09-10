import './Sidebar.scss';
import logo from '../../assets/images/CompanyLogo.png'
import { useSelector } from 'react-redux';

export default function Sidebar() {
    const sidebarOpened = useSelector(state => state.elementsReducer.sidebarOpened);

    return <div className={`Sidebar${sidebarOpened ? " active" : ""}`}>
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