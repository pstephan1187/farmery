const Vue = require("vue");

Vue.component('clock', require('./classes/components/clock.vue'));

class UI {
    constructor(){
        this.state = (require("./state.js"));
        this.clock = (require("./clock.js"));
    }

    init(){
        this.vue = new Vue({
            el: '#ui',
            data: {
                state: this.state,
            }
        });
    }
}

const ui = new UI();

module.exports = ui;
