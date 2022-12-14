import React from "react";
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render () {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Monitoria</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/sobre'>Sobre</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false"><strong>
                                    Exemplo dropdown</strong>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/sobre"><strong>Sobre</strong></Link></li>''
                                <li><Link className="dropdown-item" to="/sobre"><strong>Sobre</strong></Link></li>
                              </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;