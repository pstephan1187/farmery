import locations from "../stores/locations.js";

export default class Character {
    constructor(){
        window.console.log('creating character...');

        this.state = (require("../state.js")).character;
        this.location_store = locations;
    }

    init(){
        if(!this.state.name){
            this.state.name = prompt("what is your name?");
        }

        return this;
    }

    talkTo(person){
        person.converse(this);

        return this;
    }

    getName(){
        return this.state.name;
    }

    getLocation(){
        return this.location_store[this.state.location];
    }

    goTo(location_key){
        this.state.location = location_key;

        return this;
    }
}
