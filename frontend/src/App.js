import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import "./components/todoList.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {
        first_name: "",
        last_name: "",
        phone: "",
        country: "",
        town: "",
        street: "",
        url: "",
        image: "",
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.searchField !== prevState.searchField) {
      // TODO: past code here to update todoList after searchField changed
      axios
          .get(`api/v1/users/?first_name=${this.state.searchField}`)
          .then((res) => this.setState({todoList: res.data}))
          .catch((err) => console.log('Error! ', err))
      console.log('entered filter: ', this.state.searchField)
    }
  }

  refreshList = () => {
    axios
      .get("api/v1/users/")
      .then((res) => this.setState({ todoList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (item) => {
    this.toggle();

    const bodyFormData = new FormData();

      for(const [key, value] of Object.entries(item)){
        if(key === 'image') {
          bodyFormData.append(key, '')
        } else {
          bodyFormData.append(key, value)
        }
      }

    if (item.id) {
      axios
        .put(`http://127.0.0.1:8000/api/v1/users/${item.id}/`, bodyFormData, {headers: {"Content-Type": "multipart/form-data"}})
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("http://127.0.0.1:8000/api/v1/users/", bodyFormData, {headers: {"Content-Type": "multipart/form-data"}})
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    axios
      .delete(`api/v1/users/${item.id}/`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { first_name: "", last_name: "", phone: "",  country: "", town: "", street: "", url: "", image: "" };

    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed === viewCompleted
    );
  console.log(this.state.todoList)
return(

      <>{this.state.todoList.map((item) => (
      <div
          className="row body-row mt-1 mb-2"
          key={item.id}
      >

        <div className="col-2">{item.first_name} {item.last_name}</div>
        <div className="col-1">{item.phone}</div>
        <div className="col-1">{item.country}</div>
        <div className="col-1">{item.town}</div>
        <div className="col-2">{item.street}</div>
        <div className="col-2"><a href={item.url}>link</a></div>
        <div className="col-1"><img src={item.image} alt="IMG"/></div>
        <div className="col-2">
          <span>
            <button
              className="btn btn-secondary sm mr-2 "
              onClick={() => this.editItem(item)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger sm "
              onClick={() => this.handleDelete(item)}
            >
              Delete
            </button>
          </span>
        </div>
      </div>))
      }</>

)

  };

  render()  {

    return (
      <main className="container">
        <h1 className="text-uppercase text-center my-4">Address book</h1>
        <div className="col-12 table-border">
          <button className="btn btn-primary mr-4" onClick={this.createItem}>
          Add address
          </button>
          <input value={this.state.searchField} onChange={(e) => this.setState({searchField: e.target.value})} placeholder="Search field" />
          <div className="container">
            <div className="row head-row mb-2">
              <div className="col-2">Name</div>
              <div className="col-1">Phone</div>
              <div className="col-1">Country</div>
              <div className="col-1">Town</div>
              <div className="col-2">Street</div>
              <div className="col-2">URL</div>
              <div className="col-1">IMG</div>
              <div className="col-2">Edit</div>
            </div>
            {this.renderItems()}
          </div>

        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;