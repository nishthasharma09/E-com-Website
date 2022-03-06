import React from "react";
import "./directory.scss";
import MenuItem from "../menu-item/menu-item";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

function Directory() {
	const sections = useSelector((state) => selectDirectorySections(state));
	console.log(sections);
	return (
		<div className="dir-menu">
			{sections.map(({ id, ...otherSectionProps }) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
}

export default Directory;
