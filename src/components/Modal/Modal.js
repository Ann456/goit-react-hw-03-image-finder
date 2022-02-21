import { Component } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import { ReactComponent as CloseIcon } from '../image/cross.svg';


const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    state = {
        loader: false,
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    };

    handleKeyDown = e => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
    };

    handleBackdrop = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };
    
    render() {
        return createPortal(
            <div className={s.overlay} onClick={this.handleBackdrop}>
                <div className={s.modal}>
                    <CloseIcon
                        onClick={this.props.onClick}
                        className={s.icon}
                    />
                    <img src={this.props.src} alt=""></img>
                </div>
            </div>,
            modalRoot  
        );
    }
};
