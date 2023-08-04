import React, { Component } from 'react';
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import EventList from './components/Event/EventList';
import { Container } from 'reactstrap';
import Footer from './components/Footer/Footer';
import { getCategories, getEvents } from './utils/api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      events: [],
      loading: false,
    };
  }

  componentDidMount() {
    getCategories()
      .then(res => {
        this.setState({
          categories: res.data.categories,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onSearch = data => {
    this.setState({
      loading: true,
    });

    getEvents(data)
      .then(res => {
        this.setState({
          events: res.data.events,
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { categories, events, loading } = this.state;

    return (
      <div className="App">
        <Header title="Eventos" />
        <FilterBar categories={categories} onSearch={this.onSearch} />
        <Container className="pt-4 mb-4">
          {loading ? <p className="text-center">Buscando Eventos...</p> : <EventList events={events} />}
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
