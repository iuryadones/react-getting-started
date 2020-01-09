import React from 'react'


function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0
        &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  )
}


function MailBoxMessages() {
  const messages = ['Msg 1', 'Msg 2']
  return (
    <div>
      <Mailbox unreadMessages={messages} />
    </div>
  )
}


export default MailBoxMessages
