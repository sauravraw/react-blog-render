import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Blog from "../components/Blog/Blog";
import BlogDetail from "../components/Blog/BlogDetail/BlogDetail";
import Footer from "../components/Footer/Footer";

export default class Router extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path="/" exact component={Blog} />
						<Route path="/blogs/:id" exact component={BlogDetail} />
					</Switch>
					<Footer />
				</BrowserRouter>
			</>
		);
	}
}
