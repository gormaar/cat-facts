import React from "react";
import styles from "./styles.module.scss";
import CatFactContainer from "../CatFact";

const Main: React.FC = () => {
	return (
		<div className={styles.module}>
			<h1>Cat Fact of the Day</h1>
			<CatFactContainer />
		</div>
	);
};

export default Main;
