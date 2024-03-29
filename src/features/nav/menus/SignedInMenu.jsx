import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';

const SignedInMenu = ({ signOut, currentUser }) => {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/images/user.png' />
      <Dropdown pointing='top left' text={currentUser}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/settings'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item
            as={Link}
            to='/settings'
            text='My Events'
            icon='calendar'
          />
          <Dropdown.Item
            as={Link}
            to='/settings'
            text='My Network'
            icon='users'
          />
          <Dropdown.Item
            as={Link}
            to='/settings'
            text='My Profile'
            icon='user'
          />
          <Dropdown.Item
            as={Link}
            to='/settings'
            text='Settings'
            icon='settings'
          />
          <Dropdown.Item onClick={signOut} text='Sign Out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
