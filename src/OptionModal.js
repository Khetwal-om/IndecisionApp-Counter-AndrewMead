import React from 'react';
import Modal from 'react-modal';


const OptionModal=(props)=>{

    return(
        <Modal
          isOpen={!!props.selectedOption}
          onRequestClose={props.handleClearSelectedOption}
          contentLabel={"selected option"}
        >
            <h3>yup</h3>

            {props.selectedOption && <p>{props.selectedOption}</p>}

            <button onClick={props.handleClearSelectedOption}>Okies</button>
        </Modal>

    )
};


export default OptionModal;
