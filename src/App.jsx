import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';

import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './features/nav/NavBar/NavBar';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import PeopleDashboard from './features/user/PeopleDashboard/PeopleDashboard';
import UserDetailPage from './pages/UserDetailPage';
import SettingsDashboard from './features/user/Settings/SettingsDashboard';
import EventForm from './features/event/EventForm/EventForm';
import FormikForm from './features/event/EventForm/FormikForm';

function App(props) {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route
        path='/(.+)'
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Switch key={props.location.key}>
                <Route exact path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailPage} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile/:id' component={UserDetailPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route
                  path={['/createEvent', '/manage/:id']}
                  // component={EventForm}
                  component={FormikForm}
                />
              </Switch>
            </Container>
          </>
        )}
      />
    </Switch>
  );
}

export default withRouter(App);
