import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const Navbar = () => {
	return (
		<div>
			<nav className="green">
				<div className="nav">
				<Link to="/" className="brand-logo">NoteBook</Link>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><NavLink to="/fav">Favourites</NavLink></li>
				</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
