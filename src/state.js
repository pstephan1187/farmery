import Clock from './clock.js';
import LocationStore from "./stores/locations.js";
import PeopleStore from "./stores/people.js";
import Character from './classes/character.js';

class State {
	constructor(data){
		this.state = data;

		this.clock = new Clock(this.state.time);
		this.location_store = new LocationStore();
		this.character = new Character(this.state.character);
		this.people_store = new PeopleStore(this.state.people);
	}

	init(){
		this.clock.init();
		this.location_store.init(this.people_store);
		this.character.init(this.location_store);
		this.people_store.init(this.location_store);
	}
}

export default State;
