import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown,faHeart } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

function Header({ cart, favorites }) {
  return (
    <>
    <header>
      <nav className="header-nav rounded-sm flex justify-between items-center px-4">
        <div className="logo">Varahi</div>
        <div>
          <ul className="nav-links flex space-x-4 md:space-x-12">
            <li style={{ position: 'relative' }}>
              <Link to="/cart">
              <FontAwesomeIcon icon={faCartArrowDown} />
              {cart.length > 0 && (
                <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px',
                }}>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
              )}
              </Link>
            </li>
            <li style={{ position: 'relative' }}>
              <Link to="/favorites">
              <FontAwesomeIcon icon={faHeart} />
              {favorites.length > 0 && (
                <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px',
                }}>{favorites.length}</span>
              )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  );
}
export default Header;
