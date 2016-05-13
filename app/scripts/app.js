import React from 'react';
import ReactDOM from 'react-dom';
import EventList from './components/eventList';
import EventDetail from './components/eventDetail';

const mountNode = document.getElementById('app');

class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            events: [],
            activeEventIndex: 0,
            selectedEvent: {}
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.endPoint = 'https://api.myjson.com/bins/1jrcc';
        $.get(this.endPoint, function (result) {
            this.setState({
                events:result,
                activeEventId:0,
                selectedEvent:result[0]
            });
        }.bind(this));
    }

    handleClick(event, index){
        this.setState({
           selectedEvent:event,
           activeEventIndex:index
        });
    }   

    render() {
        return <div className="container-fluid">
            <div className={ 'row ' + (this.state.events.length ? 'show' :'hide') }>
                <EventList events={this.state.events} activeEventIndex={this.state.activeEventIndex} handleClick={this.handleClick} />
                <EventDetail selectedEvent={this.state.selectedEvent} />
            </div>
          </div>;
    }
};


ReactDOM.render(<App />, mountNode);

