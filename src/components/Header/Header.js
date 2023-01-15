import React from 'react';
import './Header.css';

import { Outlet, Link } from "react-router-dom";

const Header = () => {
	return (
		<React.Fragment>
			<div>Header component</div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/admin">Admin</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</React.Fragment>
	);
}

export default Header;