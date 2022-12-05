import React, { useEffect, useRef } from 'react'
import CloseImage from './close.png'

const Modal = ({ showModal, onCancel }) => {
    // Ref created to access Modal DOM nodes
    const modalRef = useRef(null);

    // When modal is visible, bring focus to modal.
    useEffect(() => {
        showModal && modalRef.current?.focus()
    }, [showModal])

    /** 
     * If showModal is false, just return null. 
     *  This way, there is no unnecessary render of modal in DOM 
    * */
    if (!showModal) return null;

    return (
        <>
            {/* Back dark filter for modal, so that modal is the point of focus for visitor */}
            <div className="newday-pc-dark-filter"></div>

            {/* Code for Modal */}
            <div id="newday-modal-container" tabIndex="0" ref={modalRef}>
                <div
                    className="nd-dialog-container"
                    role="dialog"
                    aria-describedby="newday-modal-description"
                    aria-labelledby="newday-modal-title" 
                    aria-modal="true"
                >
                    <div className="nd-dialog-row">
                        <div id="newday-group-container" className="nd-dialog-columns">
                            {/* <!-- Modal Text Content --> */}
                            <div id="newday-modal-text" className="modal-text">
                                <h2 id="newday-modal-title" className="title">Here’s something about us</h2>
                                <p id="newday-modal-description" className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /><br />
                                    <a href="https://www.newday.co.uk/" target="_blank" aria-label="Checkout our website" rel="noreferrer">Go to NewDay website.</a>
                                </p>
                            </div>
                             {/* <!-- Modal Text Content END --> */}
                        </div>

                        {/* <!-- Button Groups for Modal Actions --> */}
                        <div
                            id="newday-button-group-parent"
                            className="nd-dialog-columns button-group-parent"
                        >
                            <div id="newday-button-group" className="button-group">
                                <div className="modal-actions-container">

                                    {/* <!-- Button to redirect to explore products page --> */}
                                    <button type="button" aria-label="Explore our products" id="newday-accept-btn-handler">
                                        Explore products&nbsp;{" "}
                                    </button>
                                    {/* <!-- Button to redirect to explore products page END --> */}

                                    {/* <!-- Button to close dialog --> */}
                                    <button type="button" aria-label="Cancel the modal" onClick={onCancel} id="newday-reject-all-handler">
                                        Cancel
                                    </button>
                                    {/* <!-- Button to close dialog END --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- Button Groups for Modal Actions END --> */}

                        {/* <!-- Close Button --> */}
                        <div id="newday-close-btn-container" className="" aria-label="Close modal dialog" onClick={onCancel}>
                            <img src={CloseImage} alt="Modal dialog close button" width="15" height="15" />
                        </div>
                        {/* <!-- Close Button END--> */}
                    </div>
                </div>
            </div>
            {/* <!-- Code for Modal END --> */}
        </>
    )
}

// Export Modal as a default export from the Modal.js file
export default Modal