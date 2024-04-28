import React from 'react';

// SubmitButton component accepting onClick prop
function SubmitButton (props){
  return (
    <div className='Submit'>
    <button className='SubmitButton' type="submit" onClick={props.onClick}>
      Add Transaction
    </button>
    </div>
  );
};
// when the SubmitButton component is clicked calls the handleSubmit function passed from the Form component.
export default SubmitButton;
