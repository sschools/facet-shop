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
      <div className="">
        <button className="btn btn-secondary">Click Here to Shop!</button>
      </div>
    )
  }
}
