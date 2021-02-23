import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/modal.css';


function Modal({ open,  title, actions, onDismiss }) {
    if (!open) return null
    return (
        ReactDOM.createPortal(
        <>
            <div className="overlay" onClick={onDismiss}></div>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="title">
                    <h4>{title}</h4>
                </div>
                <div className="actions">{actions}</div>
            </div>
        </>,
        document.querySelector('#modal')
        )
    );
}

export default Modal;
