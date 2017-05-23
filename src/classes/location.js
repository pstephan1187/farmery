export default class Location {
    constructor(state){
        window.console.log('creating location...');

        // this.id = location_key;
        this.state = state;
        this.bus = (require("../event-bus.js"));
    }

    init(){
        console.log('initializing location: ' + this.getName() + '...');
    }

    getName(){
        return this.state.name;
    }
}
