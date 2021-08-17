import React from 'react';
import './App';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import HomePage from './pages/public/Home.page';
import AboutPage from './pages/public/About.page';
import ContactPage from './pages/public/Contact.page';
import LoginPage from './pages/public/Login.page';

export default function App() {
	return (
		<Container>
			<Router>
				<div>
					<nav>
						<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
						<li>
							<Link to="/users">Login</Link>
						</li>
						</ul>
					</nav>
					<Switch>
						<Route path="/about">
						<AboutPage />
						</Route>
						<Route path="/contact">
							<ContactPage />
						</Route>
						<Route path="/users">
						<LoginPage />
						</Route>
						<Route path="/">
						<HomePage />
						</Route>
					</Switch>
				</div>
			</Router>
		</Container>
	);
  }