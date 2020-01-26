import React from "react";
import { useState, useEffect } from "react";
import CatFact from "./CatFact";

const CatFactContainer: React.FC = () => {
	const [catFact, setCatFact] = useState();
	const [catImage, setCatImage] = useState();

	const NextFact = () => {
		CatFactFetch();
		CatImageFetch();
	};
	//Dette ser faen ikkje ud men la gå
	const CatImageFetch = async () => {
		const proxyUrl = "https://cors-anywhere.herokuapp.com/";
		const header = { "Content-type": "application/json", method: "GET" };
		const endpoint = "https://api.thecatapi.com/v1/images/search";
		const response = await fetch(endpoint, header)
			.then(response => response.json())
			.catch(error => console.log("Error", error));
		console.log(response);

		setCatImage(response.url);
	};

	const CatFactFetch = async () => {
		const proxyUrl = "https://cors-anywhere.herokuapp.com/";
		const header = { "Content-type": "application/json", method: "GET" };
		const endpoint = "https://cat-fact.herokuapp.com/facts/random";
		const response = await fetch(proxyUrl + endpoint, header)
			.then(response => response.json())
			.catch(e => console.log("Error", e));
		console.log(response);
		setCatFact(response.text);
	};

	return <CatFact fact={catFact} image={catImage} onNextFact={NextFact} />;
};

export default CatFactContainer;
