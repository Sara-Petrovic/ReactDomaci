import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button } from '../Button';
import KontaktForma from "../KontaktForma";

class Ulogujse extends Component {
  state = {
    isOpen: false
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
    return (
      <>
        <div
          className="d-flex align-items-center justify-content-center"
        >
          <Button buttonStyle='btn--outline' onClick={this.openModal} >
            Uloguj se
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Uloguj se</Modal.Title>
          </Modal.Header>
          <Modal.Body><KontaktForma></KontaktForma></Modal.Body>
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