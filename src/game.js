class Game {
    constructor(state){
        console.log('creating game...');
        this.state = state;
    }

    init(){
        console.log('initializing game: ', this.state);

        this.state.init();
    }

    render(){
    	this.state.location_store.render();
    }
}

export default Game;
