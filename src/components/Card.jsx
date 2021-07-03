import React from "react";
import Avatar from "./Avatar.jsx";
import Detail from "./Details.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.currentClub} />
        <Detail detailInfo={props.age} />
        <Detail detailInfo={props.debutYear} />
        <Detail detailInfo={props.prevClub} />
        <Detail detailInfo={props.goals} />
        <Detail detailInfo={props.assists} />
        <Detail detailInfo={props.position} />
        <Detail detailInfo={props.freekickScored} />
      </div>
    </div>
  );
}

export default Card;
