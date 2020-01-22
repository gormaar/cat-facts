import React from "react";
import styles from "./styles.module.scss";

type CatFacts = {
	text: string;
	image: string;
};
const CatFact: React.FC<CatFacts> = () => {
	return (
		<div className={styles.container}>
			<div></div>
		</div>
	);
};

export default CatFact;
