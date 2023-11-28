import React from "react";

function Data(props) {

  return (
    <div>
      <p>{props.work}</p>
      <p>{props.about}</p>
      <p>{props.fName}</p>
      <p>{props.lName}</p>
      <p>{props.email}</p>
      <p>{props.country}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
      <p>{props.street}</p>
    </div>
  );
}

export default Data;