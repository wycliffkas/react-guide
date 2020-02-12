import React from "react";
import Person from './Person';

const Persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        changed={event => props.changed(event, person.id)}
        isAuth={props.isAuthenticated}
      />
    );
  });

export default Persons;
