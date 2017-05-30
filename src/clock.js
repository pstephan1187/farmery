import ReactDOM from 'react-dom';
import React from 'react';
// import bus from "./event-bus.js";

class Clock {
    constructor(state){
        this.state = state;
        this.total_elapsed = 0;

        this.paused = false;

        this.toggle = this.toggle.bind(this);
        this.pause = this.pause.bind(this);
        this.play = this.play.bind(this);
    }

    loop(elapsed){
        this.tick(elapsed);
        console.log(this.total_elapsed, Math.round(1000 / elapsed) + ' FPS');
    }

    // init(){
    //     this.interval = setInterval(this.tick.bind(this), 10);

    //     // Bus.$on('time.toggle', function(){
    //     //     this.paused = !this.paused;
    //     // }.bind(this));
    // }

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

    tick(elapsed){
        if(this.paused){
            this.render();
            return;
        }

        this.total_elapsed += elapsed;
        
        if(this.total_elapsed < 1000){
            return;
        }

        this.total_elapsed -= 1000;
        this.state.increment('time.minute');

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

        this.render();

        // bus.$emit('time.tick', this);
    }

    getFormattedDate(){
        var season;

        switch(this.state.get('time.season')){
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

        return season + ' ' + this.state.get('time.day') + ' Year ' + this.state.get('time.year');
    }

    getFormattedTime(){
        var hour = this.state.get('time.hour');

        var meridiem = 'AM';

        var minute = "" + this.state.get('time.minute') + "";;
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

    render(){
        ReactDOM.render(
            <div>
                { this.getFormattedDateTime() }
                <button onClick={ this.toggle }>
                    { this.paused ? 'Play': 'Pause' }
                </button>
            </div>,
            document.getElementById('clock')
        );
    }
}

export default Clock;
