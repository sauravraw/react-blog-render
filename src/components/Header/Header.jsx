import React, { Component } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

class Nav extends Component {
	render() {
		return (
			<div className={style["headerDiv"]}>
				<p className={style["headerNavbar"]}>
					<Link to="/" className={style["headerLink"]}>
						Home
					</Link>
					<Link to="/" className={style["headerLink"]}>
						Contact
					</Link>
					<Link to="/" className={style["headerLink"]}>
						Service
					</Link>
					<Link to="/" className={style["headerLink"]}>
						About us
					</Link>
				</p>
			</div>
		);
	}
}

export default Nav;
