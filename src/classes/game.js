import Character from "./character.js";
import Clock from "../clock.js";

import Abigail from "./people/abigail.js";

import Market from "./locations/market.js";
import Farm from "./locations/farm.js";

export default class Game {
    constructor(){
        console.log('creating game...');
        this.state = require("../state.js");

        console.log(this.state);
        this.time = this.state.time;
        this.character = new Character();
        this.people = {};
        this.locations = {};
        this.clock = new Clock();

        this.people.abigail = new Abigail('abigail');

        this.locations.market = new Market('market');
        this.locations.farm = new Farm('farm');
        this.ui = require('../ui.js');
    }

    init(){
        console.log('initializing.');
        this.ui.init();
        this.character.init();
        for(var i in this.people){
            this.people[i].init();
        }
        this.clock.init();
    }
}
