import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../../../../features/elements/elementsSlice";
import { ArrowBack } from "@mui/icons-material";

export default function Topbar() {
    const sidebarOpened = useSelector(state => state.elementsReducer.sidebarOpened);
    const dispatch = useDispatch();

    const handleHamburgerMenu = (e) => {
        e.preventDefault();
        dispatch(toggleSidebar());
    }

    return <div className="Topbar">
        <div className="section">
            <div className="left">
                <button className={`hamburgerMenu${sidebarOpened ? " active" : ""}`} onClick={handleHamburgerMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ArrowBack />
                </button>
                <div className="circular-placeholder blue"></div>
                <div className="rectangular-placeholder blue"></div>
            </div>
            <div className="right">
                <div className="rectangular-placeholder accent"></div>
            </div>
        </div>
        <div className="section">
            <div className="boxedSection">
                <div className="circular-placeholder"></div>
            </div>
            <div className="boxedSection">
                <div className="circular-placeholder"></div>
            </div>
            <div className="boxedSection">
                <div className="circular-placeholder"></div>
                <div className="rectangular-placeholder"></div>
            </div>
        </div>
    </div>
}