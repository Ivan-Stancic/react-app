import  {useState} from 'react';
import OsobeLista from './List/OsobeLista';

function App() {

  const [name, setName] = useState("Neki tekst");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
  }

  return (
    <div>
      <h3>Osobe</h3>
      <OsobeLista />
    <input value={name} onChange={handleChange} placeholder="upiši nešto" />
    </div>
  );
}

export default App;
