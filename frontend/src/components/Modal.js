import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>User</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="first_name">First name</Label>
              <Input
                type="text"
                id="first_name"
                name="first_name"
                value={this.state.activeItem.first_name}
                onChange={this.handleChange}
                placeholder="Enter first name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="last_name">Last name</Label>
              <Input
                type="text"
                id="last_name"
                name="last_name"
                value={this.state.activeItem.last_name}
                onChange={this.handleChange}
                placeholder="Enter last name"
              />
            </FormGroup>
           <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                type="text"
                id="phone"
                name="phone"
                value={this.state.activeItem.phone}
                onChange={this.handleChange}
                placeholder="Enter phone"
              />
            </FormGroup>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input
                type="text"
                id="country"
                name="country"
                value={this.state.activeItem.country}
                onChange={this.handleChange}
                placeholder="Enter country"
              />
            </FormGroup>
            <FormGroup>
              <Label for="town">Town</Label>
              <Input
                type="text"
                id="town"
                name="town"
                value={this.state.activeItem.town}
                onChange={this.handleChange}
                placeholder="Enter town"
              />
            </FormGroup>
            <FormGroup>
              <Label for="street">Street</Label>
              <Input
                type="text"
                id="street"
                name="street"
                value={this.state.activeItem.street}
                onChange={this.handleChange}
                placeholder="Enter street"
              />
            </FormGroup>
              <FormGroup>
              <Label for="url">url</Label>
              <Input
                type="text"
                id="url"
                name="url"
                value={this.state.activeItem.url}
                onChange={this.handleChange}
                placeholder="Enter url"
              />
            </FormGroup>

               <FormGroup>
              <Label for="image">IMG</Label>
              <Input
                type="file"
                id="image"
                name="image"
                value={this.state.activeItem.image}
                onChange={this.handleChange}
                placeholder="Enter image"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}