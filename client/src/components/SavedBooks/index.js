import React from "react";
import BorderBox from "../border box";
import { FormBtn } from "../input";
import { Link } from "react-router-dom";

const SavedBooks = props => {
  return (
    <div>
      <BorderBox>
        <FormBtn onClick={() => props.deleteBook(props.id)}>Delete</FormBtn>
        <FormBtn>
          <a href={props.link} rel="noopener noreferrer" target="_blank" id="view">
            View
          </a>
        </FormBtn>
        <Link to={"/books/" + props.id}>
        <h3>{props.title}</h3>
        </Link>
        {/* <h5>Author: {props.authors}</h5>
        <h5>Synopsis:</h5>
        <p>{props.description}</p> */}
      </BorderBox>
    </div>
  );
};

export default SavedBooks;
