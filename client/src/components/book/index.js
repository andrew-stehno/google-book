import React from "react";
import BorderBox from "../border box";
import { FormBtn } from "../input";

const Book = props => {
  return (
    <div>
      <BorderBox>
        <FormBtn>Save</FormBtn>
        <FormBtn>
          <a href={props.link} rel="noopener noreferrer" target="_blank">
            View
          </a>
        </FormBtn>
        <h3>{props.title}</h3>
        <h5>Author: {props.authors}</h5>
        <h5>Synopsis:</h5>
        <p>{props.description}</p>
      </BorderBox>
    </div>
  );
};

export default Book;
