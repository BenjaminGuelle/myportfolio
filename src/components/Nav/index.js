import { Link } from 'react-router-dom';
import './style.scss';
import moi from '../../assets/images/nav-picture.jpg'

function Nav() {
    return (
        <nav className="nav">
            <ul className="scrollable">
                <li className="scrollable-item">
                    <Link to="#" className="scrollable-item-link">Contact</Link>
                </li>
                <li className="scrollable-item">
                    <Link to="#" className="scrollable-item-link">Me connaître</Link>
                </li>
                <li className="scrollable-item">
                    <Link to="#" className="scrollable-item-link">Compétences</Link>
                </li>
                <li className="scrollable-item">
                    <Link to="#" className="scrollable-item-link">Portfolio</Link>
                </li>
                <li className="scrollable-item">
                    <Link to="#" className="scrollable-item-link">Accueil</Link>
                </li>
                <div className="scrollable-selected" />
            </ul>

            <div className="nav-picture">
                <img src={moi} alt="photo-de-benjamin" />
            </div>
        </nav>
    )
}

export default Nav
