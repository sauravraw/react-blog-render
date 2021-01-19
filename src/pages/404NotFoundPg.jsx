import { Component } from "react";
import NotFound from "../styles/NotFound.module.css";
import image from "../images/404.gif";

class PageNotFound extends Component {
	render() {
		return (
			<>
				<img
					className={NotFound.picture}
					src={image}
					alt="404 Page Not Found"
				/>
			</>
		);
	}
}
export default PageNotFound;
