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

  return (
    <>
      <Modal>
        <Heading>
          Create Board <span onClick={props.onClick}>X</span>
        </Heading>
        <ModalText onClick={handleShowForm}>
          <p>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </p>
        </ModalText>
        {showForm ? (
          <Form>
            <Input placeholder='Board Title' />
            <Textarea placeholder='Description'></Textarea>
            <Button width='100%'>Save</Button>
          </Form>
        ) : null}
      </Modal>
    </>
  );
};

export default CreateModal;
