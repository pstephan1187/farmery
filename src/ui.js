class UI {
    constructor(){
        this.bus = (require("./event-bus.js"));
    }

    init(){
        this.updateTime();
    }

    updateTime(){
        this.bus.on('time', function(time){
            const el = document.getElementById('datetime');
            el.textContent = time.getFormattedDate() + ' ' +time.getFormattedTime()
        }.bind(this));
    }
}

const ui = new UI();

module.exports = ui;
