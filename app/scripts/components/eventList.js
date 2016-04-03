var React = require('react'),
Time = require('react-time');

var EventList = React.createClass({
    render: function() {
        return <ul className="eventList col-md-4">
            {this.props.events.map(function(event, index){
                return <li key={event.id+index}>
                    <a  onClick={this.props.handleClick.bind(null, event, index)}
                        className={this.props.activeEventIndex ===  index ? 'active' : null}>
                        <span className="info eventUser">{event.userName}</span>
                        <span className="info eventName">Event: {event.name}</span>
                        <span className="info eventOn">On: <Time value={event.occurredOn} format="YYYY/MM/DD HH:mm" /></span>
                    </a>
                </li>;

            }.bind(this))}
        </ul>;
    }
});
module.exports = EventList;
