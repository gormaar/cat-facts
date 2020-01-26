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
			<div>
				<h3>{props.fact}</h3>
				<img src={props.image} alt="" />
				<img src="https://cdn2.thecatapi.com/images/S97Qj5YYO.jpg" alt="" />
				<button onClick={props.onNextFact}>Next</button>
			</div>
		</div>
	);
};

export default CatFact;
