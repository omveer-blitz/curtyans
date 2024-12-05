import { css, Global } from '@emotion/react';
import WrappedModal from 'react-modal';
import { ReactModalProps } from "./types";
import React from 'react';


export const bottomSheetStyle = {
  content: {
    padding: "0",
    top: 0,
    left: "0",
    bottom: "0",
    right: "0",
    margin: "auto",
    height: "auto",
    borderRadius: 0,
    background: '#fff',
    border: "none",
    maxHeight: "100%"
  }
};

export const rightSheetStyle = {
  content: {
    padding: "0",
    top: "unset",
    left: "unset",
    bottom: "unset",
    right: "0",
    margin: "0",
    borderRadius: "0",
    background: '#fff',
    border: "none",
    height: "100vh",
    width: '390px',
    overflowY: 'auto',
  },
};

export const modalStyle = {
  content: {
    padding: "var(--spacing-xxl)",
    height: '100%',
    width: '100%',
    top: 'unset',
    left: '0',
    bottom: '0',
    right: 'unset',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    maxHeight: '100vh',

    background: '#fff',
    // Limit to small-ish modals
    overflowY: 'auto',
  },
  overlay: {
    zIndex: 5,
    backgroundColor: 'var(--color-flamingo0500)',
  }
};


const mergeStyle = (additionalStyles: WrappedModal.Styles = {}) => ({
  content: Object.assign({}, modalStyle.content, additionalStyles.content),
  overlay: Object.assign({}, modalStyle.overlay, additionalStyles.overlay),
});

const BaseModal = (props: ReactModalProps) => {

	React.useEffect(() => {
    if(!props.isOpen) {
      // hackery to remove ReactModal__Body--open class from body
      if(document && document.body) {
        document.body.classList.remove('ReactModal__Body--open');
      }
    }
  }, [props.isOpen]);

  return (
    <WrappedModal
      closeTimeoutMS={300}
      style={mergeStyle(props.style)}
      {...props}
    >
      <Global
        styles={css`
          ${props.style === rightSheetStyle && `
            .ReactModal__Content {
              transform: translateX(100%) translateY(0);
            }
            .ReactModal__Content--after-open {
              transform: translateX(0px);
            }
          `}
					${props.style === bottomSheetStyle && `
            .ReactModal__Content {
							@media(min-width: 1200px) {
								width: 60vw;
								height: 80vh !important;
							}
						}
          `}
        `}
      />
			{props.children}
    </WrappedModal>
  );
};

export default BaseModal;
