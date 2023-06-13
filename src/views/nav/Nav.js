
import React from 'react';
import { NavLink} from "react-router-dom";
import classNames from 'classnames/bind';
import styles from './Nav.module.scss'
const cx = classNames.bind(styles)

class Nav extends React.Component {

    render() {
        return(
            <div className={cx('topnav')}>
                <NavLink to="/" activeClassName={cx('active')} exact = {true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName={cx('active')}>
                    Todos
                </NavLink>
                <NavLink to="/about" activeClassName={cx('active')}>
                    About
                </NavLink>
            </div>
        )
    }
}

export default Nav