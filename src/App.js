
import React, { useState } from 'react'
import Modal from './Modal'

// Used SASS as it helps in nesting and makes styling easier to implement
import './App.scss';


function App() {
  // React states for toggling modal
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="App">
      {/* Aria Hidden attribute is kept dependent on modal state. 
          When modal opens, the homepage is made invisible to accessibility.
          Wnen modal closes, it is again made visible to accessibility.
      */}
      <div className="app-container" aria-hidden={toggleModal}>
        <img src={'https://res.cloudinary.com/practicaldev/image/fetch/s--xfgXRW85--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/3581/61d0176e-4769-44f1-95f8-090f874e3956.png'} alt="Newday logo" height="100"/>
        <h2 data-testid="heading">Let’s see a modal</h2>

        {/* Click this to open the modal */}
        <button 
          id="open-modal-button" 
          type="button" 
          aria-label="Open newday modal" 
          onClick={() =>  setToggleModal(true)}>
            Click here to open modal
        </button>
      </div>
      <Modal showModal={toggleModal} onCancel={() => setToggleModal(false)} />
    </div>
  );
}

export default App;
