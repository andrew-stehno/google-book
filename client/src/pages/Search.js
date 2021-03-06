import React, { Component } from "react";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/jumbotron";
import BorderBox from "../components/border box";
import Book from "../components/book";
import { Input, FormBtn } from "../components/input";
import API from "../utils/API";

class Search extends Component {
  state = {
    bookSearch: "",
    results: [],
    books: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        this.setState({ results: res.data });
        this.setState({ books: this.state.results.items });
        document.getElementById("search-input").value = "";
      })
      .catch(err => console.log(err));
  };

  saveToDatabase = (title, author, synopsis, link) => {
    API.saveBook({
      title,
      author,
      synopsis,
      link
    })
      .then(res => this.bookSaved())
      .catch(err => console.log(err));
  };

  bookSaved = () => {
    document.getElementById("saved-msg").innerHTML =
      "Your book has been saved!";
  };

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
              <BorderBox>
                <form>
                  <h3>Book Search</h3>
                  <Input
                    name="bookSearch"
                    value={this.state.bookSearch}
                    onChange={this.handleInputChange}
                    placeholder="Search for books"
                  />
                  <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
                </form>
              </BorderBox>
            </Col>
          </Row>
          <Row>
            <div id="saved-msg"></div>
          </Row>
          <Row>
            <Col size="sm-12">
              {this.state.books.length ? (
                <BorderBox>
                  <h3>Results</h3>
                  {this.state.books.map(list => {
                    return (
                      <Book
                        saveToDatabase={this.saveToDatabase}
                        key={list.id}
                        title={list.volumeInfo.title}
                        authors={list.volumeInfo.authors[0]}
                        synopsis={list.volumeInfo.synopsis}
                        link={list.volumeInfo.previewLink}
                      />
                    );
                  })}
                </BorderBox>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
