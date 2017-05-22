export default class Clock {
    constructor(){
        this.state = (require("./state.js")).time;
        this.bus = (require("./event-bus.js"));
        console.log(this.state);
    }

    init(){
        this.interval = setInterval(this.tick.bind(this), 10);
    }

    tick(){
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

        this.bus.emit('time', this);

        console.log(this.getFormattedDate() + ' ' +this.getFormattedTime());
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
}
