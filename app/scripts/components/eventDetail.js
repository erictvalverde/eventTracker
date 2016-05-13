import React from 'react';
import Time from 'react-time';
import R from 'ramda';

const formatNodeValue = (key, value) => ( key.indexOf('Date') !== -1 ) ? <Time value={ value } format="YYYY/MM/DD HH:mm" /> : value;

const formatedNode = (arr) => {
  var key   = arr[0],
      value = arr[1];
  return <li className="eventInfo" key={key}>
            <strong>{key}:</strong> { formatNodeValue(key, value) }
         </li>
};

const getEventDetails = (details) => R.map(formatedNode, R.toPairs(details)); //{key:value} => [key,value]

const EventDetail = function({selectedEvent}){//< destructure the props eg. props.selectedEvent
  return <section className="eventDetails col-md-8">
          <header>
              <h1 className="heading">{selectedEvent.userName}</h1>
          </header>
          <ul>
              <li className="eventInfo"><strong>Name:</strong> {selectedEvent.name}</li>
              <li className="eventInfo"><strong>Record Id:</strong> {selectedEvent.recordId}</li>
              <li className="eventInfo"><strong>Occurred On:</strong> <Time value={selectedEvent.occurredOn} format="YYYY/MM/DD HH:mm" /></li>
              <li className="eventDetailsContainer">
                  <h4>Event Detail</h4>
                  <ul>
                      {getEventDetails(selectedEvent.details)}
                  </ul>
              </li>
          </ul>
        </section>;
};

export default EventDetail;