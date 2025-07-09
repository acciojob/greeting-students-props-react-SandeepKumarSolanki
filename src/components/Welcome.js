import React from "react";

const Welcome = (props) => {
  return (
    <div>
      <h1>Hey! {props.name}</h1>
      <h2>Welcome to School.</h2>
      <p>{props.name}</p>
    </div>
  );
};

export default Welcome;
