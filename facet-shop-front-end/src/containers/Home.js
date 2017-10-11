import React, {Component} from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ""
    }
  }

  render() {
    return (
      <div>
        I am the Home Screen!
      </div>
    )
  }
}
