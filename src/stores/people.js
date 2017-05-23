import Abigail from "../classes/people/abigail.js";

const state = require("../../state.json");

export default class People {
	constructor(){
		this.abigail = new Abigail(state.people.abigail);
	}

	init(){
		this.abigail.init();
	}
}
