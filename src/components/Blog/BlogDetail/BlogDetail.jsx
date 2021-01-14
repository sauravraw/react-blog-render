import React, { Component } from "react";
// import BlogImage from "./BlogImage";
import style from "./BlogDetail.module.css";
let url;
export default class BlogDetail extends Component {
	state = {
		post: [],
		links: [],
	};
	componentDidMount = () => {
		url = `https://heroku-json-data-server.herokuapp.com/blogs/${this.props.match.params.id}`;
		// try {
		// 	let data = await fetch(
		// 		`https://heroku-json-data-server.herokuapp.com/blogs/${this.props.match.params.id}`
		// 	);
		// 	console.log(data);
		// } catch (err) {
		// 	console.log(err);
		// }
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data.data);
				this.setState({ post: data.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		console.log(
			`https://heroku-json-data-server.herokuapp.com/blogs/${this.props.match.params.id}`
		);
		return (
			<div className={style["single-Blog"]}>
				{/* {this.state.blogs.map((post) => {
					return (
						<div>
							<img src={post.imageUrl} alt={post.author} />;
						</div>
					);
				})} */}

				<h1>HIII</h1>
			</div>
		);
	}
}
