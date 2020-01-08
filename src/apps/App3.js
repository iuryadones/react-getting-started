import React from 'react'


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreenting(user) {
  if (Object.keys(user).length) {
    return <h1>Hi, {formatName(user)}!</h1>;
  }
  return <h1>Hi, Stranger.</h1>;
}


function NameConditional() {
  const userNull = {};
  const case_one = getGreenting(userNull);
  const user = {'firstName': 'Iury', 'lastName': 'Adones'};
  const case_two = getGreenting(user);
  return (
    <div>
      <div>
        {case_one}
        <p>Case user null -> response Stranger</p>
      </div>
      <div>
        {case_two}
        <p>Case user with user.firstName and user.lastName</p>
      </div>
    </div>
  )
}

export default NameConditional
