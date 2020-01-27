import React from "react";
import styles from "./styles.module.scss";

type CatFacts = {
	fact: string;
	image: string;
	onNextFact: () => void;
};

const CatFact: React.FC<CatFacts> = props => {
	return (
		<div className={styles.container}>
			<h3>{props.fact}</h3>
			<img src={props.image} alt="" />
			<button onClick={props.onNextFact}>Next Fact</button>
		</div>
	);
};

export default CatFact;
