import React from "react";
import Card from "./Card.jsx";
import players from "../players.js";

function createCard(player) {
  return (
    <Card
      key={player.id}
      name={player.name}
      img={player.imgURL}
      curClub={player.currentClub}
      age={player.age}
      debutYear={player.debutYear}
      prevClub={player.prevClub}
      goals={player.goals}
      assists={player.assists}
      position={player.position}
      freekickScored={player.freekickScored}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Football Team</h1>
      {players.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
