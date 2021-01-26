import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <HookSwither />
    </div>
  )
};

const HookSwither = () => {

  const [color, setColor ] = useState('orange');
  const [fontSize, setFontSize] = useState(14);
  return(
    <div style = {{padding: '10px', 
    background:color, fontSize: `${fontSize}px`}}>
      Hello!!!
      <button onClick = {() => setColor('grey ')}>Dark</button>
      <button onClick = {() => setColor('blue')}>Light</button>
      <button onClick = {() => setFontSize((s) => s + 2)}>Bigger</button>
      <button onClick = {() => setFontSize((s) => s - 7)}>Less</button>

    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root')
);


