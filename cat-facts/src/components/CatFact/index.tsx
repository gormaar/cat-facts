import React from "react";
import { useState } from "react";
import CatFact from "./CatFact";

const CatFactContainer: React.FC = () => {
	const [catFact, setCatFact] = useState();
	const [catImage, setCatImage] = useState();

	const NextFact = () => {
		CatImageFetch();
		CatFactFetch();
	};

	const CatImageFetch = async () => {
		const header = { "Content-type": "application/json", method: "GET" };
		const endpoint: string = "https://api.thecatapi.com/v1/images/search";
		const response = await fetch(endpoint, header)
			.then(response => response.json())
			.catch(error => console.log("Error", error));

		setCatImage(response[0].url);
	};

	const CatFactFetch = async () => {
		const proxyUrl: string = "https://cors-anywhere.herokuapp.com/";
		const header = { "Content-type": "application/json", method: "GET" };
		const endpoint: string = "https://cat-fact.herokuapp.com/facts/random";
		const response = await fetch(proxyUrl + endpoint, header)
			.then(response => response.json())
			.catch(e => console.log("Error", e));

		setCatFact(response.text);
	};
	if (!catFact) {
		NextFact();
	}

	return <CatFact fact={catFact} image={catImage} onNextFact={NextFact} />;
};

export default CatFactContainer;
