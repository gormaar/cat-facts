import React from "react";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";

type CatFacts = {
	text: string;
	image: string;
};

const [catFact, setCatFact] = useState();

useEffect(() => {
	catFactFetch();
});

const catFactFetch = async () => {
	const header = { "Content-type": "application/json", method: "GET" };
	const endpoint = "https://cat-fact.herokuapp.com/facts/random";
	const response = await fetch(endpoint, header);

	setCatFact(response);
};

const CatFact: React.FC<CatFacts> = props => {
	return (
		<div className={styles.container}>
			<div>
				<h3>{props.text}</h3>
				<img src={props.image} />
			</div>
		</div>
	);
};

export default CatFact;
