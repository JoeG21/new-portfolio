import React from 'react'
import ReactDOM from 'react-dom'

import '../styling/modal.css'
import cross from '../pictures/svg/cross.svg'

const Modal = (props) => {
    if (!props.open) return null
    if (!props.sent) return null

    const sentMessage = (
        <div className='modal-sent'>
            <div className='modal-title' style={{backgroundColor: '#5cb85c'}}>
                <img src={cross} alt='Close' onClick={props.onClose} />
                <h1> Okay! </h1>
            </div>

            <div className='modal-message'>
                <h2> Message Sent! </h2>
            </div>
        </div>
    )

    const sentError = (
        <div className='modal-error'>
            <div className='modal-title' style={{backgroundColor: '#d2322d'}}>
                <img src={cross} alt='Close' onClick={props.onClose} />
                <h1> Error </h1>
            </div>

            <div className='modal-message'>
                <h2> Failed... </h2>
                <h2> Email: <a href="mailto:jcggomez@live.com" alt='Outlook Email'> jcggomez@live.com </a></h2>
            </div>
        </div>
    )

    return ReactDOM.createPortal(
        <div className='overlay'>
            {props.sent === true ? sentMessage : sentError}
        </div>,
        document.getElementById('portal')
    )
}

export default Modal