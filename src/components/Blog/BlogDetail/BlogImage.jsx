import React, { Component } from "react";

export default class BlogImage extends Component {
	state = {
		details: true,
	};
	render() {
		let post = this.props.post;
		return (
			<div>
				<img src={post.imageUrl} alt={post.author} />
			</div>
		);
	}
}
