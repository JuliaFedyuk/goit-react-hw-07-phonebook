import Container from './Components/Container/Container';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import './App.scss';

const App = () => (
  <Container>
    <h1 className="main_title">Phonebook</h1>
    <ContactForm />
    <h2 className="contacts_title">Contacts</h2>
    <Filter />
    <ContactList />
  </Container>
);

export default App;
