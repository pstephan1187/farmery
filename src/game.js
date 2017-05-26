import state from './state.js';
import clock from './clock.js';
import character from './classes/character.js';
import locations from "./stores/locations.js";
import people from "./stores/people.js";

class Game {
    constructor(){
        console.log('creating game...');
        this.state = state;
        this.clock = clock;
        this.locations = locations;
        this.character = character;
        this.people = people;
    }

    init(){
        console.log('initializing game: ', this.state);
        this.clock.init();
        this.locations.init();
        this.character.init();
        this.people.init();
    }
}

export default (new Game());
