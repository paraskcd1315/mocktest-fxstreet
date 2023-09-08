import './Content.scss';
import Topbar from './components/topbar/Topbar';
import Main from './components/main/Main';

export default function Content() {
    return <div className="Content">
        <Topbar />
        <Main />
    </div>
}