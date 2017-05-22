export default class Location {
    constructor(location_key){
        window.console.log('creating location...');

        this.id = location_key;
        this.state = (require("../state.js")).locations[location_key];
        this.bus = (require("../event-bus.js"));
    }

    init(){
        console.log('initializing location: ' + this.state.name + '...');
    }

    getName(){
        return this.state.name;
    }
}
