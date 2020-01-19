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

  loadDataBase() {
    API.getBook()
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  deleteBook(id) {
    API.deleteBook(id)
      .then(
        res =>
          (document.getElementById("gonzo").value =
            "Your book has been deleted!")
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Jumbotron />
        <Container fluid>
          <Row>
            <div id="gonzo" style={{ color: "red" }}></div>
          </Row>
          <Row>
            <Col size="sm-12">
              <BorderBox>
                <h3>Saved Books</h3>
                {this.state.book.map(list => {
                  return (
                    <SavedBooks
                      viewSavedBook={this.viewSavedBook}
                      deleteBook={this.deleteBook}
                      key={list.id}
                      id={list.id}
                      title={list.title}
                      authors={list.author}
                      description={list.synopsis}
                      // image={list.image}
                      link={list.link}
                    />
                  );
                })}
              </BorderBox>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
