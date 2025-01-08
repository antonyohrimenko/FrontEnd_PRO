//import React from 'react'


export default function User({ firstName, lastName, age, userName, email }) {
  return (
    <div>
      <p>
        Name: {firstName} {lastName}
      </p>
      {age >= 30 ? <p> Age: {age} </p> : "Age is below 30"}
      <p> Username: {userName} </p>
      <p>
        Email:
        <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
}
