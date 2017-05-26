export default class Location {
    constructor(state){
        window.console.log('creating location...');

        this.state = state;
    }

    init(){
        console.log('initializing location: ' + this.getName() + '...');
    }

    getName(){
        return this.state.name;
    }
}
