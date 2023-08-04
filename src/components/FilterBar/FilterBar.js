import React, { Component } from 'react';
import styles from './FilterBar.module.scss';
import { Container, Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class FilterBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      criteria: '',
      category: 0,
    };
    this.criteriaRef = React.createRef();
    this.categoryRef = React.createRef();
  }

  onSearch = () => {
    const { criteria, category } = this.state;
    this.props.onSearch({ criteria, category });
  };

  renderCategories = () => {
    const { categories } = this.props;

    return categories.map(category => (
      <option key={category.id} value={category.id}>
        {category.name_localized}
      </option>
    ));
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.title}>Busca tus eventos favoritos</p>
        <Container>
          <Form>
            <Row>
              <Col xs="4">
                <FormGroup>
                  <Input
                    onChange={e => this.setState({ criteria: e.target.value })}
                    type="text"
                    className="rounded-0"
                    name="searchText"
                    placeholder="Criterio"
                  />
                </FormGroup>
              </Col>
              <Col xs="4">
                <FormGroup>
                  <Input
                    onChange={e => this.setState({ category: e.target.value })}
                    type="select"
                    className="rounded-0"
                    name="category"
                    placeholder="Categoría"
                  >
                    <option value={0}>Categoría</option>
                    {this.renderCategories()}
                  </Input>
                </FormGroup>
              </Col>
              <Col xs="4">
                <Button color="primary" onClick={this.onSearch} className={styles.buttonSearch} block>
                  BUSCAR
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

FilterBar.propTypes = {
  categories: PropTypes.array.isRequired,
  onSearch: PropTypes.func,
};

FilterBar.defaultProps = {
  categories: [],
};

export default FilterBar;
