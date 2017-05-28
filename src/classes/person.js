import bus from "../event-bus.js";

export default class Person {
    constructor(state, location_store){
        window.console.log('creating person: ' + state.name + '...');

        this.state = state;
        this.location_store = location_store;
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

        bus.$emit('person.change-location', [this, this.getLocation()]);

        return this;
    }

    getLocation(){
        return this.location_store.getLocation(this.state.location);
    }

    converse(character){}
}
