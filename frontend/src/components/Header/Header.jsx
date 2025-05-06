import './header.css'
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import React, { useEffect, useContext, useRef, useState } from "react";
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const nav__links = [
    { path: '/home', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/tours', display: 'Tours' },
];

const Header = () => {
    const headerRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

    const sticktyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        sticktyHeaderFunc();
        return () => window.removeEventListener('scroll', sticktyHeaderFunc);
    }, []);

    return (
        <div className='header' ref={headerRef}>
            <div className='sticky__header'>
                <div className="flex items-center justify-between px-4 md:px-10 py-4">
                    <div className="logo">
                        <img src={logo} className='w-full h-16' alt="logo" />
                    </div>

                    <div className={`navigation ${menuOpen ? 'show__menu' : ''}`}>
                        <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
                            {nav__links.map((item, index) => (
                                <li className="nav__item" key={index}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => isActive ? 'active__link' : ''}
                                        onClick={() => setMenuOpen(false)} // close menu on link click
                                    >
                                        {item.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="nav__right flex items-center gap-4">
                        <div className="nav__btns flex items-center gap-3">
                            {user ? (
                                <>
                                    <h5 className="text-sm">{user.username}</h5>
                                    <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                                </>
                            ) : (
                                <>
                                    <Button className='btn secondary__btn'>
                                        <Link to="/login">Login</Link>
                                    </Button>
                                    <Button className='btn primary__btn'>
                                        <Link to="/register">Register</Link>
                                    </Button>
                                </>
                            )}
                        </div>

                        <span onClick={() => setMenuOpen(!menuOpen)} className="ri-menu-line mobile__menu cursor-pointer"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
