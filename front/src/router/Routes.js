import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Public Common Pages
import HomePage from '../pages/public/home/Home.page';
import AboutPage from '../pages/public/about/About.page';
import ContactPage from '../pages/public/contact/Contact.page';

// Public User Pages
import LoginPage from '../pages/public/users/Login.page';
import RegisterPage from '../pages/public/users/Register.page';
import RestorePasswordPage from '../pages/public/users/RestorePassword.page';
import ConfirmPasswordPage from '../pages/public/users/ConfirmPassword.page';

// Private Pages
import AppLayout from './../layout/app/App.layout'
// import Profile from './../pages/private/Profile.page';
import Calendar from './../pages/private/Calendar.page';
import Children from './../pages/private/Children.page';

const Routes = () => {
    return (
		<>
			<Router>			
				<Switch>
					
					{/* Private App Pages */}				
					<Route path="/app/calendar">
						<Calendar />
					</Route>

					<Route path="/app/children">
						<Children />
					</Route>
					
					<Route path="/app">
						<AppLayout />
					</Route>
							
					{/* Public Site Pages */}
					<Route path="/about">
						<AboutPage />
					</Route>
					
					<Route path="/contact">
						<ContactPage />
					</Route>
					
					{/* Public User Pages */}
					<Route path="/login">
						<LoginPage />
					</Route>

					<Route path="/register">
						<RegisterPage />
					</Route>
					
					<Route path="/restore-password">
						<RestorePasswordPage />
					</Route>
					
					<Route path="/confirm-password">
						<ConfirmPasswordPage />
					</Route>

					{/* Base Url */}
					<Route path="/">
						<HomePage />
					</Route>

				</Switch>
			</Router>
		</>
    )
}

export default Routes;
