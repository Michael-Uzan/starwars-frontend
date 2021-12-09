import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppFotter } from './cmp/AppFooter';
import { AppHeader } from './cmp/AppHeader';
import { SideBar } from './cmp/SideBar';
import { UserMsg } from './cmp/UserMsg';
import routes from './routes/routes';
import { starwarsService } from './services/starwars.service';

function App() {

  return (
    <div className="main-container">
      <Router>
        <UserMsg />
        {/* <AppHeader /> */}
        <SideBar />
        <main >
          <Switch>
            {routes.map(route => <Route key={route.path} component={route.component} path={route.path} />)}
          </Switch>
        </main>
        <AppFotter />
      </Router>
    </div>
  );
}

export default App;
