import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import style from "./Header.module.css";
import logoimage from "../../images/title.png";

export default class Nav extends Component {
	render() {
		return (
			<div className={style["headerDiv"]}>
				<div className={style["nav-log"]}>
					<Link to="/">
						<img
							src={logoimage}
							alt="logo"
							className={style["headerLogo"]}
						/>
						Blog
					</Link>
				</div>
				<p className={style["headerNavbar"]}>
					<Link to="/" className={style["headerLink"]}>
						Home
					</Link>
					<Link
						to="https://sauravraw.github.io/portfolio/"
						className={style["headerLink"]}
					>
						PortFolio
					</Link>
					<Link
						to="https://login-page-react.sauravraw.vercel.app/"
						className={style["headerLink"]}
					>
						Login
					</Link>
				</p>
				<GoThreeBars className={style["headerHumberger"]} />
			</div>
		);
	}
}
