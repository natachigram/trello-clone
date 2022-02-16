import { Heading, Modal, ModalText } from '../styles/ModalStyled';

const CreateModal = (props) => {
  return (
    <>
      <Modal>
        <Heading>
          Create Board <span onClick={props.onClick}>X</span>
        </Heading>
        <ModalText>
          <p>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </p>
        </ModalText>
      </Modal>
    </>
  );
};

export default CreateModal;
