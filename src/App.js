import './App.css';
import Form from './components/Form';
import React, {useState} from 'react';
import FormDisplay from './components/FormDisplay';

function App() {
  const [boxes, setBoxes] = useState([])

  const addBox = (box) => {
    setBoxes([...boxes, box])
  }


  return (
    <div className="App">
      <Form addBox={addBox}/>
      <FormDisplay boxes={boxes}/>
    </div>
  );
}

export default App;
