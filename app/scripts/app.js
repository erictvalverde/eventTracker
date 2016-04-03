var React =  require('react'),
    ReactDOM = require("react-dom"),
    EventList = require('./components/eventList'),
    EventDetail = require('./components/eventDetail'),
    mountNode = document.getElementById("app");

var App = React.createClass({

    getInitialState: function() {
        return {
            events: [],
            activeEventIndex: 0,
            selectedEvent: {}
        }
    },

    componentDidMount: function() {
        this.endPoint = 'https://api.myjson.com/bins/1jrcc';
        $.get(this.endPoint, function (result) {
            this.setState({
                events:result,
                activeEventId:0,
                selectedEvent:result[0]
            });
        }.bind(this));
    },

    handleClick: function(event, index){
        this.setState({
           selectedEvent:event,
            activeEventIndex:index
        });
    },

    render: function() {
    return <div className="container-fluid">
        <div className={ 'row ' + (this.state.events.length ? 'show' :'hide') }>
            <EventList events={this.state.events} activeEventIndex={this.state.activeEventIndex} handleClick={this.handleClick} />
            <EventDetail selectedEvent={this.state.selectedEvent} />
        </div>
      </div>;
    }
});


ReactDOM.render(<App />, mountNode);

