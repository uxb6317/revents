import React, { useState } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { openModal } from '../../modals/modalSlice';
import { logout } from '../../auth/authSlice';
import SignedOutMenu from '../menus/SignedOutMenu';
import SignedInMenu from '../menus/SignedInMenu';
import { MODAL_TYPES } from '../../modals/modalTypes';

const NavBar = ({ openModal, auth, logout }) => {
  const { authenticated, currentUser } = auth;
  const history = useHistory();

  const handleSignIn = () => {
    openModal({ modalType: MODAL_TYPES.LoginModal });
  };

  const handleRegister = () => {
    openModal({ modalType: MODAL_TYPES.RegisterModal });
  };

  const handleSignOut = () => {
    logout();
    history.push('/');
  };

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='./assets/images/logo.png' className='logo' alt='logo' />
          Re-vents
        </Menu.Item>
        <Menu.Item exact as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/people' name='People' />
        <Menu.Item>
          <Button
            as={Link}
            to='/createEvent'
            floated='right'
            positive
            inverted
            content='Create Event'
          />
        </Menu.Item>
        {authenticated ? (
          <SignedInMenu signOut={handleSignOut} currentUser={currentUser} />
        ) : (
          <SignedOutMenu signIn={handleSignIn} register={handleRegister} />
        )}
      </Container>
    </Menu>
  );
};

const mapStateToProps = ({ authState }) => ({ auth: authState });

export default connect(mapStateToProps, { openModal, logout })(NavBar);
