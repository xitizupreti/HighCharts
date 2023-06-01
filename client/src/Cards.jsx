import React from "react";

function Card(props) {
  const { name, des, observation } = props;
  return (
    <>
      <div style={{ marginTop: "70px" }}>
        <p style={{ textAlign: "center" }}>
          <b>Name=</b>
          {name}
        </p>
        <p style={{ textAlign: "center" }}>
          <b>Description=</b>
          {des}
        </p>
        <p style={{ textAlign: "center" }}>
          <b>Observations=</b>
          {observation}
        </p>
      </div>
    </>
  );
}

export default Card;
