import React, { Component } from "react";
import { Col, Row, Container } from "../components/grid";
import Jumbotron from "../components/jumbotron";
import BorderBox from "../components/border box";
import { FormBtn } from "../components/input";

class Saved extends Component {
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
            <Col size="sm-12">
              <BorderBox>
                  <h3>Saved Books</h3>
                  <BorderBox>
                    <FormBtn>View</FormBtn>
                    <FormBtn>Delete</FormBtn>
                  </BorderBox>
              </BorderBox>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Saved;
