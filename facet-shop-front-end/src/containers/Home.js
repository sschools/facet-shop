import React, {Component} from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup
} from 'reactstrap';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      username: ""
    }
  }

  toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }

  _handleClick = (event) => {
    event.preventDefault();
  }

  _handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    this.props.makeUser(this.state.username)
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div className="m-5">
        <Button color="info" onClick={this.toggle}>Click Here to Shop!</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <Form onSubmit={this._handleSubmit}>
              <Input onChange={this._handleChange} placeholder="What's your name?"/>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
