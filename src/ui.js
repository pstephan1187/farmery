const Vue = require("vue");
const Bus = require("./event-bus.js");

class UI {
    constructor(){
        this.state = (require("./state.js"));
        this.clock = (require("./clock.js"));
    }

    init(){
        this.vue = new Vue({
            el: '#ui',
            data: {
                time: '',
                state: this.state,
            },
            created: function(){
                Bus.$on('time', function(clock){
                    this.time = clock.getFormattedDateTime();
                }.bind(this));
            }
        });
    }
}

const ui = new UI();

module.exports = ui;
