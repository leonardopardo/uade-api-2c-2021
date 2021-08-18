// Imports
import React from 'react';
import './App';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// UI
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

// Pages
import HomePage from './pages/public/home/Home.page';
import AboutPage from './pages/public/About.page';
import ContactPage from './pages/public/Contact.page';
import LoginPage from './pages/public/Login.page';
import NavLayout from './layout/Nav.layout';

export default function App() {
	return (
		<Router>
			<div>
				<NavLayout />
				<Container>
					<main>	
						<Switch>
							<Route path="/about">
								<AboutPage />
							</Route>
							<Route path="/contact">
								<ContactPage />
							</Route>
							<Route path="/login">
								<LoginPage />
							</Route>
							<Route path="/">
								<HomePage />
							</Route>
						</Switch>
					</main>
				</Container>
			</div>
		</Router>
	);
  }