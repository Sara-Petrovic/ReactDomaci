import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button } from '../Button';


class Ulogujse extends Component {
  state = {
    isOpen: false
  };

  
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        
          <Button  buttonStyle='btn--outline' onClick={this.openModal} >
            Uloguj se
          </Button>
        
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Uloguj se</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label htmlFor="name">Ime</label>
            <input type="text" className="form-control" id="name" value={this.state.name}  />
            <label htmlFor="exampleInputEmail1">Email adresa</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email}  />
          </Modal.Body>
          <Modal.Footer>
            <Button buttonStyle='btn--primary' onClick={this.closeModal}>
              Log in
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Ulogujse;