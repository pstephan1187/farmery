import locations from "../stores/locations.js";

export default class Person {
    constructor(state){
        window.console.log('creating person...');

        this.state = state;
        this.location_store = locations;
    }

    init(){
        console.log('initializing person: ' + this.state.name + '...');
        this.defineMovements();

        return this;
    }

    getName(){
        return this.state.name;
    }

    goTo(location_key){
        this.state.location = location_key;
        console.log(this.getName() + ' is going to ' + this.getLocation().getName());

        return this;
    }

    getLocation(){
        return this.location_store[this.state.location];
    }

    converse(character){}
}
