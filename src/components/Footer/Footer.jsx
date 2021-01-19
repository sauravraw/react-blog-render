import React, { Component } from "react";
import style from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Footer extends Component {
	render() {
		return (
			<>
				<div className={style["footer-container"]}>
					<div className={style["social-icons"]}>
						<Link to="/#">
							<FaTwitter className={style["twitter"]} />
						</Link>
						<Link to="/#">
							<FaFacebook className={style["facebook"]} />
						</Link>
						<Link to="/#">
							<FaInstagram className={style["instagram"]} />
						</Link>
						<Link to="/#">
							<FaLinkedin className={style["linkedin"]} />
						</Link>
					</div>

					<div className={style["legal"]}>
						<p className={style["no-wrap"]}>
							Copyright &#169;2020, Blogs. All rights reserved.
						</p>
						<p className={style["no-wrap"]}>
							<Link to="/#">Terms of Service</Link>
							<span> · </span>
							<Link to="/#">Privacy Policy</Link>
						</p>
					</div>
				</div>
			</>
		);
	}
}
