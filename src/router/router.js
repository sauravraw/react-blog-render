import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Blogs from "../components/Blogs/Blogs";
import DisplayBlog from "../pages/DisplayBlog";
import PageNotFound from "../pages/404NotFoundPg";
//components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

class Router extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path="/react-blog-render" exact component={Blogs} />
						<Route path="/" exact component={Blogs} />
						<Route path="/blogs/:id" exact component={DisplayBlog} />
						<Route component={PageNotFound} />
					</Switch>
					<Footer />
				</BrowserRouter>
			</div>
		);
	}
}
export default Router;
