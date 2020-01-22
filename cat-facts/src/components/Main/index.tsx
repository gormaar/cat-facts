import React from "react";
import styles from "./styles.module.scss";
import CatFact from "../CatFact";

const Main: React.FC = () => {
	return (
		<div className={styles.module}>
			<h1>Cat Fact of the day!</h1>
			<CatFact text={"Hei"} image={""} />
		</div>
	);
};

export default Main;
