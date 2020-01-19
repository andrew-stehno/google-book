import React, { Component } from "react";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/jumbotron";
import BorderBox from "../components/border box";
import SavedBooks from "../components/SavedBooks";
import API from "../utils/API";

class Saved extends Component {
  state = {
    book: [],
    viewBook: {}
  };

  componentDidMount() {
    this.loadDataBase();
  }

  componentDidUpdate() {
    this.loadDataBase();
  }

  loadDataBase() {
    API.getBook()
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  deleteBook(id) {
    API.deleteBook(id)
      .then(res => console.log("Your book has been deleted!"))
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
              {this.state.book.length ? (
                <BorderBox>
                  <h3>Saved Books</h3>
                  {this.state.book.map(list => {
                    return (
                      <SavedBooks
                        viewSavedBook={this.viewSavedBook}
                        deleteBook={this.deleteBook}
                        key={list._id}
                        id={list._id}
                        title={list.title}
                        authors={list.author}
                        description={list.synopsis}
                        // image={list.image}
                        link={list.link}
                      />
                    );
                  })}
                </BorderBox>
              ) : (
                <h3>Your List is Empty!</h3>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
