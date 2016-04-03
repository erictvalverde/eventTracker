var React = require('react'),
    Time = require('react-time');

var EventDetail = React.createClass({

    returnEventDetails: function(obj){
        var result = [];
        for (var p in obj) {
            if( obj.hasOwnProperty(p) ) {
                if(p.indexOf('Date') > -1){
                    result.push(
                        <li className="eventInfo" key={p}>
                            <strong>{p}:</strong> <Time value={obj[p]} format="YYYY/MM/DD HH:mm" />
                        </li>
                    );
                }else{
                    result.push(
                        <li className="eventInfo" key={p}>
                            <strong>{p}:</strong> {obj[p]}
                        </li>
                    );
                }

            }
        }
        return result;
    },

    render: function() {
        return <section className="eventDetails col-md-8">
            <header>
                <h1 className="heading">{this.props.selectedEvent.userName}</h1>
            </header>
            <ul>
                <li  className="eventInfo"><strong>Name:</strong> {this.props.selectedEvent.name}</li>
                <li className="eventInfo"><strong>Record Id:</strong> {this.props.selectedEvent.recordId}</li>
                <li className="eventInfo"><strong>Occurred On:</strong> <Time value={this.props.selectedEvent.occurredOn} format="YYYY/MM/DD HH:mm" /></li>
                <li className="eventDetailsContainer">
                    <h4>Event Detail</h4>
                    <ul>
                        {this.returnEventDetails(this.props.selectedEvent.details)}
                    </ul>
                </li>
            </ul>
        </section>;
    }
});
module.exports = EventDetail;
