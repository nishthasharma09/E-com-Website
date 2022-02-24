import React from "react";
import "./button.scss";

const CustomButton = ({
	inverted,
	isGoogleSignIn,
	children,
	...otherProps
}) => {
	return (
		<button
			className={`${inverted ? "inverted" : ""}    ${
				isGoogleSignIn && "google-sign-in"
			} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
