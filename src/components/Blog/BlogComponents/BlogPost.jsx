import React, { Component } from "react";
import style from "./BlogPost.module.css";
import { Link } from "react-router-dom";

export default class BlogPost extends Component {
	state = {
		details: true,
	};
	render() {
		let post = this.props.post;
		return (
			<div className={style["blog-container"]}>
				<img
					src={post.imageUrl}
					alt={post.author}
					className={style["blog-image"]}
				/>
				<Link to={"/blogs/" + post.id}>
					<p className={style["blog-header"]}>{post.author}</p>
				</Link>
			</div>
		);
	}
}
