import ReactDOM from 'react-dom';
import React from 'react';
import bus from "./event-bus.js";
import state from './state.js';

class Clock {
    constructor(){
        this.state = state.time;
        this.paused = false;

        this.toggle = this.toggle.bind(this);
        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);
    }

    init(){
        this.interval = setInterval(this.tick.bind(this), 10);

        // Bus.$on('time.toggle', function(){
        //     this.paused = !this.paused;
        // }.bind(this));
    }

    pause(){
        this.paused = true;
        bus.$emit('time.pause', this);

        return this;
    }

    play(){
        this.paused = false;
        bus.$emit('time.play', this);

        return this;
    }

    toggle(){
        if(this.paused){
            return this.play();
        }

        return this.pause();
    }

    tick(){
        if(this.paused){
            return;
        }

        this.state.minute++;

        // increment hour
        if(this.state.minute >= 60){
            this.state.hour++;
            this.state.minute = 0;
        }

        if(this.state.hour >=24){
            this.state.day++;
            this.state.hour = 0;
        }

        if(this.state.day >= 31){
            this.state.season++;
            this.state.day = 1;
        }

        if(this.state.season >= 4){
            this.state.year++;
            this.state.season = 0;
        }

        ReactDOM.render(
            <div>
                { this.getFormattedDateTime() }
                <button onClick={ this.toggle }>Toggle</button>
            </div>,
            document.getElementById('clock')
        );

        bus.$emit('time.tick', this);
    }

    getFormattedDate(){
        var season;

        switch(this.state.season){
            case 0:
                season = 'Spring';
                break;
            case 1:
                season = 'Summer';
                break;
            case 2:
                season = 'Fall';
                break;
            case 3:
                season = 'Winter';
                break;
        }

        return season + ' ' + this.state.day + ' Year ' + this.state.year;
    }

    getFormattedTime(){
        var hour = this.state.hour;

        var meridiem = 'AM';

        var minute = "" + this.state.minute + "";;
        var pad = "00";
        var minute = pad.substring(0, pad.length - minute.length) + minute;

        if(hour >= 12){
            meridiem = 'PM';

            if(hour >=13){
                hour -= 12;
            }
        }

        if(hour === 0){
            hour = 12;
        }

        return hour + ':' + minute + ' ' + meridiem;
    }

    getFormattedDateTime(){
        return this.getFormattedDate() + ' ' + this.getFormattedTime();
    }
}

export default (new Clock);
