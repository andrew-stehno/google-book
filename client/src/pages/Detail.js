import React, { Component } from "react";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";

class Detail extends Component {
  state = {
    book: {}
  };

  componentDidMount() {
    API.getOneBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h2>Search for and Save Books of Interest</h2>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col size="sm-12">
              <h1>{this.state.book.title}</h1>
              <h2>Written by: {this.state.book.author}</h2>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
              <article>
                <h3>Synopsis</h3>
                <p>{this.state.book.synopsis}</p>
              </article>
            </Col>
          </Row>
          <Row>
            <Col size="sm-12">
              <p>
                View this book on<a
                  href={this.state.book.link}
                  rel="noopener noreferrer"
                  target="_blank"
                > Google
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col size="md-2">
              <Link to="/saved">← Back to Results</Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Detail;
