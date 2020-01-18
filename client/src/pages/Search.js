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

  componentDidMount() {}

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
        this.setState({books: this.state.results.items});
        console.log(this.state.books);
      })
      .catch(err => console.log(err));
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
            <Col size="sm-12">
              <BorderBox>
                <h3>Results</h3>
                  {this.state.books.map(list => {
                    return(
                      <Book
                      key={list.volumeInfo.title}
                      title={list.volumeInfo.title}
                      />
                    )
                  })}
              </BorderBox>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
