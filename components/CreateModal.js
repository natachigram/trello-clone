import { useState } from 'react';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    title: '',
    body: '',
  });

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  //  this function creates a new board

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/board', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    router.push('/');
    setForm({ title: '', body: '' });
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
            <Input
              type='text'
              name='title'
              value={form.title}
              placeholder='Board Title'
              onChange={handleChange}
              required
            />
            <Textarea
              placeholder='Description'
              name='body'
              value={form.body}
              onChange={handleChange}
              required
            ></Textarea>
            <Button width='100%'>Create Board</Button>
          </Form>
        ) : null}
      </Modal>
    </>
  );
};

export default CreateModal;
