import React, { Component } from "react";
import "./sign-in.scss";
import FormInput from "../resusable-components/form-input/form-input";
import CustomButton from "../resusable-components/button/button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ email: "", password: "" });
	}

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2 className="title">I already have an account </h2>
				<span>Signin with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label="email"
						name="email"
						handleChange={this.handleChange}
						type="email"
						value={this.state.email}
						required
					/>

					<FormInput
						label="password"
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>

					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
