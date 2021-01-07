import React, { Component } from "react";

export default class BlogDetail extends Component {
	state = {
		blogs: [],
	};
	componentDidMount = () => {
		fetch(
			`https://gist.githubusercontent.com/sauravraw/9af9b4e00834ca8b7a352daf9db29991/raw/6ac8e233a7e7a36fd13ed1ea4e76a473c4dc66ad/blog%2520json/${this.props.match.params.id}`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ blogs: data.data });
			});
	};
	render() {
		return (
			<>
				{this.state.blogs.map((blog) => {
					return (
						<div key={blog.id}>
							<img src={blog.imageUrl} alt={blog.author} />
						</div>
					);
				})}
			</>
		);
	}
}
