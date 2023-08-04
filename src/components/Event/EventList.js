import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import EventCard from './EventCard';
import { PropTypes } from 'prop-types';

class EventList extends Component {
  renderEvents = () => {
    const { events } = this.props;
    return events.map(event => {
      if (!event.name) return null;

      return (
        <Col xs="4" className="mb-4">
          <EventCard image={event.logo} title={event.name.text} text={event.description.text} url={event.url} />
        </Col>
      );
    });
  };
  render() {
    return (
      <div>
        <Row>{this.renderEvents()}</Row>
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList;
