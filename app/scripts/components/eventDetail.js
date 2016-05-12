var React = require('react'),
    Time = require('react-time'),
    R = require('ramda');

var EventDetail = React.createClass({

    formatNodeValue: function(key, value){
      return ( key.indexOf('Date') !== -1 )
      ? <Time value={ value } format="YYYY/MM/DD HH:mm" />
      : value
    },

    formatedNode:function (arr) {
      var key   = arr[0],
          value = arr[1];
      return <li className="eventInfo" key={key}>
                <strong>{key}:</strong> { this.formatNodeValue(key, value) }
            </li>
    },

    getEventDetails: function (details) {
      // todo: re implement returnEventDetails in a "functinal" approach
      // // using ramdajs - http://ramdajs.com/0.21.0/index.html
      return R.map(this.formatedNode, R.toPairs(details)); //{key:value} => [key,value]
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
                        {this.getEventDetails(this.props.selectedEvent.details)}

                    </ul>
                </li>
            </ul>
        </section>;
    }
});

module.exports = EventDetail;
