import { Component } from "react";
import style from "./404Error.module.css";
import image from "../../images/404.gif";

export default class ErorrPage extends Component {
	render() {
		return (
			<div style={{ marginTop: "100px", marginLeft: "100px" }}>
				<img
					src={image}
					className={style["container-image"]}
					alt="404 Page Not Found"
				/>
			</div>
		);
	}
}
