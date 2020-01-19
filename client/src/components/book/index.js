import React from "react";
import BorderBox from "../border box";
import { FormBtn } from "../input";
import "./style.css";

const Book = props => {
  return (
    <div>
      <BorderBox>
        <FormBtn onClick={() => props.saveToDatabase(props.title, props.author, props.description, props.link)}>Save</FormBtn>
        <FormBtn>
          <a href={props.link} rel="noopener noreferrer" target="_blank" id="view">
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
