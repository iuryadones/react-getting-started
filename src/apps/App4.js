import React from 'react'


class Time extends React.Component {
  constructor(props){
    super(props);
    this.timer = 0;
    this.state = {
      time: new Date()
    }
  }

  componentDidMount(){
  // set up timer
    this.timer = setTimeout(() => {
      this.setState({
        time: new Date()
      })
      this.componentDidMount()
    },
    Math.floor(Date.now() / 1000) * 1000 + 1000 - Date.now())
  }

  componentWillUnmount(){
  // remove timer
    clearTimeout(this.timer)
  }

  render() {
    // render the current time
    return this.state.time.toLocaleTimeString()
  }
}


function ItIsTime() {
  return (
    <div>
      <h2>It is <Time /></h2>
      <p>Hi, Time is class of React.Component</p>
    </div>
  )
}

export default ItIsTime
