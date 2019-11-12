import React, { useState } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../menus/SignedOutMenu";
import SignedInMenu from "../menus/SignedInMenu";

const NavBar = ({ history }) => {
  const [authenticated, setAuthenticated] = useState(true);

  const handleSignIn = () => setAuthenticated(true);
  const handleSignOut = () => {
    setAuthenticated(false);
    history.push("/");
  };

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='./assets/images/logo.png' alt='logo' />
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
          <SignedInMenu signOut={handleSignOut} />
        ) : (
          <SignedOutMenu signIn={handleSignIn} />
        )}
      </Container>
    </Menu>
  );
};

export default withRouter(NavBar);
