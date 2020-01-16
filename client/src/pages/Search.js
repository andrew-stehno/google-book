import React, { Component } from "react";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/jumbotron";
import BorderBox from "../components/border box";
import { Input, FormBtn } from "../components/input";

class Search extends Component {
  state = {
    search: ""
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <Jumbotron>
          <h1>(React) Google Books Search</h1>
          <h2>Search for and Save Books of Interest</h2>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col size="md-6">
              <BorderBox>
                <form>
                  <h3>Book Search</h3>
                  <Input />
                  <FormBtn>
                      Submit
                  </FormBtn>
                </form>
              </BorderBox>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <BorderBox>
                  <h3>Results</h3>
              </BorderBox>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Search;
