
import { useState } from 'react';
import './App.css';
import Appbar from './Components/Appbar';
import IntroCard from './Components/IntroCard';
import Navbar from './Components/Navbar';
import ContactCard from './Components/ContactCard';

function App() {

  const [introState, setIntroState] = useState(true)
  const [contactState, setContactState] = useState(false)

  return (
    <div className="App">
      <Navbar open={introState} setOpen={setIntroState} />
      <Appbar open={contactState} setOpen={setContactState} />
      {
        introState ? <IntroCard open={introState} setOpen={setIntroState} /> : null
      }
      {
        contactState ? <ContactCard open={contactState} setOpen={setContactState} /> : null
      }
    </div>
  );
}

export default App;
