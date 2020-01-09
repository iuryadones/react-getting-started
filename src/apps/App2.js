import React from 'react'


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Iury',
  lastName: 'Adones'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function NameDict () {
  return element
}

export default NameDict
