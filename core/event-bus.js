class Bus {
    constructor(){
        this.events = {};
    }

    emit(event, args){
        if(!this.events[event]){
            return;
        }

        for(var i in this.events[event]){
            const callback = this.events[event][i];
            callback(...args);
        }
    }

    on(event, callback){
        if(!this.events[event]){
            this.events[event] = [];
        }

        this.events[event].push(callback);
    }
}

export default Bus;
