import React from 'react';
import ContactsForm from './components/ContactsForm';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <ContactsForm/>
        </Container>
      </header>
    </div>
  );
}

export default App;
