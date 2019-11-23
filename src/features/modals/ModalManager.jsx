import React from 'react';
import { connect } from 'react-redux';

import TestModal from './TestModal';

const modalLookup = {
  TestModal
};

const ModalManager = ({ currentModal }) => {
  let modal = null;

  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    modal = <ModalComponent {...modalProps} />;
  }

  return <span>{modal}</span>;
};

const mapStateToProps = ({ modalState }) => ({
  currentModal: modalState
});

export default connect(mapStateToProps)(ModalManager);
