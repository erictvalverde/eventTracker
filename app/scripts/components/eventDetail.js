var React = require('react'),
    Time = require('react-time'),
    R = require('ramda');

var EventDetail = React.createClass({
    detailsList : [],
    eventDetails : function(k){
        return this.props.selectedEvent.details[k];
    },
    formatedDateNode:function (k) {
      return <li className="eventInfo" key={k}>
                <strong>{k}:</strong> <Time value={this.eventDetails(k)} format="YYYY/MM/DD HH:mm" />
            </li>
    },
    formatedNameNode:function (k) {
      return <li className="eventInfo" key={k}>
                 <strong>{k}:</strong> {this.eventDetails(k)}
             </li>;
    },
    checkIfDateOrName: function(key){
      return ( key.indexOf('Date') !== -1 )
      ? this.detailsList.push(this.formatedDateNode(key))
      : this.detailsList.push(this.formatedNameNode(key));
    },
    getEventDetails: function (details) {
      // todo: re implement returnEventDetails in a "functinal" approach
      // // using ramdajs - http://ramdajs.com/0.21.0/index.html
      this.detailsList.length = 0;
      R.forEach(this.checkIfDateOrName, R.keysIn(details))
      return this.detailsList;
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
