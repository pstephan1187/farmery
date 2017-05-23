export default class Person {
    constructor(state){
        window.console.log('creating person...');

        this.state = state;
    }

    init(){
        console.log('initializing person: ' + this.state.name + '...');
        this.defineMovements();
    }

    getName(){
        return this.state.name;
    }

    // TODO: use location objects
    goTo(location_key){
        console.log(this.getName() + ' is going to ' + location_key);
        this.state.location = location_key;
    }

    getLocation(){
        // get the location object here
    }

    converse(character){}
}
