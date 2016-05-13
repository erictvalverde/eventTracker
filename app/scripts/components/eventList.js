import React from 'react';
import Time from 'react-time';

const EventList = function({events, activeEventIndex, handleClick}){ //< destructure the props eg. props.events
    return (<ul className="eventList col-md-4">
            {events.map( (event, index) => {
                return <li key={event.id+index}>
                    <a onClick={handleClick.bind(null, event, index)}
                       className={activeEventIndex ===  index ? 'active' : null}>
                       <span className="info eventUser">{event.userName}</span>
                       <span className="info eventName">Event: {event.name}</span>
                       <span className="info eventOn">On: <Time value={event.occurredOn} format="YYYY/MM/DD HH:mm" /></span>
                    </a>
                </li>;

            })}
        </ul>);
};

export default EventList;