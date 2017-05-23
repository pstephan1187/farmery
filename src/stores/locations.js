import Market from "../classes/locations/market.js";
import Farm from "../classes/locations/farm.js";

const state = require("../../state.json");

export default class Locations {
	constructor(){
		this.market = new Market(state.locations.market);
		this.farm = new Farm(state.locations.farm);
	}

	init(){
		this.market.init();
		this.farm.init();
	}
}
