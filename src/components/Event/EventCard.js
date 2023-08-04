import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

class EventCard extends Component {
  render() {
    let { text, title, image, url } = this.props;

    if (text) {
      if (text.length > 250) {
        text = text.substr(0, 250);
      }
    }
    return (
      <div>
        <Card className="rounded-0">
          {image !== null ? <CardImg top width="100%" src={image.url} alt={title} className="rounded-0" /> : ''}
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>
              {text}
              ...
            </CardText>
            <a className="btn btn-info btn-block" href={url} target="_bkank">
              MÁS INFORMACIÓN
            </a>
          </CardBody>
        </Card>
      </div>
    );
  }
}

EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
};

EventCard.defaultProps = {
  image: null,
};

export default EventCard;
