import React from 'react';
import { connect } from 'react-redux';

import { MODAL_LOOKUP } from './modalLookup';

const ModalManager = ({ currentModal }) => {
  let modal = null;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = MODAL_LOOKUP[modalType];

    modal = <ModalComponent {...modalProps} />;
  }

  return <span>{modal}</span>;
};

const mapStateToProps = ({ modalState }) => ({
  currentModal: modalState
});

export default connect(mapStateToProps)(ModalManager);
