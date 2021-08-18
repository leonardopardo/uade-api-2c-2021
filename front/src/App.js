// Imports
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// UI
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages
import HomePage from './pages/public/home/Home.page';
import AboutPage from './pages/public/about/About.page';
import ContactPage from './pages/public/contact/Contact.page';
import LoginPage from './pages/public/users/Login.page';

import RestorePasswordPage from './pages/public/users/RestorePassword.page';
import RegisterPage from './pages/public/users/Register.page';
import ConfirmPasswordPage from './pages/public/users/ConfirmPassword.page';

export default function App() {
	return (
		<Router>	
			<Switch>
				<Route path="/register">
					<RegisterPage />
				</Route>
				<Route path="/restore-password">
					<RestorePasswordPage />
				</Route>
				<Route path="/confirm-password">
					<ConfirmPasswordPage />
				</Route>

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
		</Router>
	);
  }