import { useState } from 'react';
import { Button, Input, NavContainer, NavLinks } from '../styles/NavbarStyled';
import CreateModal from './CreateModal';

const Navbar = () => {
  const [showModal, setShowModal] = useState(true);
  const handleOpen = () => setShowModal(false);
  const handleClose = () => setShowModal(true);

  return (
    <NavContainer>
      <NavLinks>
        <Button>Workspace</Button>
        <Button onClick={handleOpen}>Create</Button>
      </NavLinks>
      <NavLinks justify='flex-end'>
        <Input placeholder='search' />
      </NavLinks>
      {!showModal ? <CreateModal onClick={handleClose} /> : null}
    </NavContainer>
  );
};

export default Navbar;
