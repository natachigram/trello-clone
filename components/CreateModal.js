import { useState } from 'react';

import {
  Form,
  Heading,
  Input,
  Modal,
  ModalText,
  Textarea,
} from '../styles/ModalStyled';
import { Button } from '../styles/NavbarStyled';

const CreateModal = (props) => {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  //  this function creates a new board

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //  this function creates a new board

  return (
    <>
      <Modal>
        <Heading>
          Create Board <span onClick={props.onClick}>x</span>
        </Heading>
        <ModalText onClick={handleShowForm}>
          <p>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </p>
        </ModalText>
        {showForm ? (
          <Form onSubmit={handleSubmit}>
            <Input placeholder='Board Title' required />
            <Textarea placeholder='Description'></Textarea>
            <Button width='100%'>Save</Button>
          </Form>
        ) : null}
      </Modal>
    </>
  );
};

export default CreateModal;
