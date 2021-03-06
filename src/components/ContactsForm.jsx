import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import firebase from "../firebase";


const ContactsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(name.length < 3){
            alert('NAME')
            return;
        }
        if(email.indexOf('@') === -1 || email.length < 3){
            alert('EMAIL');
            return;
        }
        if(message.length < 1){
            alert('MESSAGE')
            return;
        }
        firebase
        .firestore()
        .collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(()=>{
            alert("SUBMIT")
        })
        .catch((error) => {
            alert(error.message)
        });

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        
    <Form className="p-5" onSubmit={handleSubmit}>
     <Form.Group controlId="formGridText">
         <Form.Label><h1>TEXT</h1></Form.Label>
     </Form.Group>
    <Form.Group controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Question</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Enter your question here" value={message} onChange={(e) => setMessage(e.target.value)} />
  </Form.Group>

    <Button variant="primary" type="submit">
        Send
    </Button>
    </Form>
    )
}
export default ContactsForm