import ReactDOM from 'react-dom';
import React from 'react';

class Clock {
    constructor(state, bus){
        this.state = state;
        this.bus = bus;
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

    init(){
        this.bus.on('time.toggle', function(){
            this.paused = !this.paused;
        }.bind(this));
    }

    pause(){
        this.paused = true;
        this.bus.emit('time.pause', this);

        return this;
    }

    play(){
        this.paused = false;
        this.bus.emit('time.play', this);

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
        if(this.state.get('time.minute') >= 60){
            this.state.increment('time.hour');
            this.state.set('time.minute', 0);
        }

        if(this.state.get('time.hour') >=24){
            this.state.increment('time.day');
            this.state.set('time.hour', 0);
        }

        if(this.state.get('time.day') >= 31){
            this.state.increment('time.season');
            this.state.set('time.day', 1);
        }

        if(this.state.get('time.season') >= 4){
            this.state.increment('time.year');
            this.state.set('time.season', 0);
        }

        this.render();

        // this.bus.emit('time.tick', this);
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
