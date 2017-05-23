import Character from "./character.js";
import Clock from "../clock.js";
import People from "../stores/people.js";
import Locations from "../stores/locations.js";

export default class Game {
    constructor(){
        console.log('creating game...');
        this.state = require("../state.js");

        this.time = this.state.time;
        this.character = new Character();
        this.people = new People();
        this.locations = new Locations();
        this.clock = new Clock();
        this.ui = require('../ui.js');
    }

    init(){
        console.log('initializing.');
        this.ui.init();
        this.character.init();
        this.people.init();
        this.locations.init();
        this.clock.init();
    }
}
