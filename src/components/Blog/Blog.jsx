import React, { Component } from "react";
import BlogPost from "./BlogComponents/BlogPost";
import style from "./Blog.module.css";
const url =
	"https://gist.githubusercontent.com/sauravraw/9af9b4e00834ca8b7a352daf9db29991/raw/6ac8e233a7e7a36fd13ed1ea4e76a473c4dc66ad/blog%2520json";
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
