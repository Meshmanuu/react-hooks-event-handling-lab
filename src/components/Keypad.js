// components/Keypad.js
import React from 'react';

function Keypad() {
  return (
    <div>
      {/* Add the input field with the type set to "password" and the event handler */}
      <input type="password" onChange={() => console.log('Entering password...')} />
    </div>
  );
}

export default Keypad;
