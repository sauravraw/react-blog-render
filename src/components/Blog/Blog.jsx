import React, { Component } from "react";
import BlogPost from "./BlogComponents/BlogPost";
import style from "./Blog.module.css";
const url = "https://heroku-json-data-server.herokuapp.com/blogs/";
export default class Blog extends Component {
	state = {
		blog: [],
	};

	componentDidMount() {
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((blog) => {
				this.setState({ blog });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className={style["blog-post"]}>
				{this.state.blog.map((post) => {
					return <BlogPost post={post} key={post.id} />;
				})}
			</div>
		);
	}
}
