import React from "react";

import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter,
} from "react-modal-bootstrap";

export class ModelDialog extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    console.log("ModelDialog");
  }

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  hideModal = () => {
    this.props.closeDialog();
    console.log("on dialog close");
    this.setState({
      isOpen: false,
    });
  };

  /*    renderMovieCasting() {
     console.log("movieCasting", this.props.dialogText[0]);
     return this.props.dialogText.map((key) => {
     <div>
     <p>{this.props.dialogText[key]}</p>
     </div>
     });
     }*/

  render() {
    return (
      <Modal isOpen={this.props.isOpen} onRequestHide={this.hideModal}>
        <ModalHeader>
          <ModalClose onClick={this.hideModal} />
          <ModalTitle>{this.props.dialogTitle} </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <ul className="movieCasting">
            <li>Category: {this.props.dialogText[0]}</li>
            <li>Director: {this.props.dialogText[1]}</li>
            <li>Release_Year: {this.props.dialogText[2]}</li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-default" onClick={this.hideModal}>
            Close
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}
