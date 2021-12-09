import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppFotter } from './cmp/AppFooter';
import { AppHeader } from './cmp/AppHeader';
import { SideBar } from './cmp/SideBar';
import { UserMsg } from './cmp/UserMsg';
import IFilter from './interface/IFilter.interface';
import routes from './routes/routes';
import { starwarsService } from './services/starwars.service';

function App() {

  const [movies, setMovies] = useState<any>(null);
  const [filterBy, setFilterBy] = useState<any>(null);

  useEffect(() => {
    loadMovies()
  }, [])

  const loadMovies = async () => {
    const movies = await starwarsService.getMovies(filterBy)
    setMovies(movies)
  }

  const onChangeFilter = async (filterBy: IFilter) => {
    setFilterBy(filterBy)
    const movies = await starwarsService.getMovies(filterBy)
    setMovies(movies)
  }

  return (
    <div className="main-container">
      <Router>
        <UserMsg />
        <AppHeader onChangeFilter={onChangeFilter} />
        <SideBar movies={movies} />
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
