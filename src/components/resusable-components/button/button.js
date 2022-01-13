import React from "react";
import "./button.scss";

const CustomButton = ({ isGoogleSignIn, children, ...otherProps }) => {
	//console.log(isGoogleSignIn);
	console.log(`${isGoogleSignIn && "google-sign-in"} "custom-button"`);
	return (
		<button
			className={`${isGoogleSignIn && "google-sign-in"} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
