import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppFotter } from './cmp/AppFooter';
import { AppHeader } from './cmp/AppHeader';
import { SideBar } from './cmp/SideBar';
import { UserMsg } from './cmp/UserMsg';
import IFilter from './interface/IFilter.interface';
import { MovieDetails } from './pages/MovieDetails';
import { eventBusService } from './services/event-bus.service';
import { starwarsService } from './services/starwars.service';

function App() {

  const [movies, setMovies] = useState<any>(null);
  const [filterBy, setFilterBy] = useState<any>(null);

  useEffect(() => {
    eventBusService.showSuccessMsg('Welcome!!!')
    loadMovies()
    console.log('init')
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
            <Route path='/movie/:movieId'
              render={(props) => (
                <MovieDetails {...props} loadMovies={loadMovies} authed={true} />
              )}
            />
          </Switch>
        </main>
        <AppFotter />
      </Router>
    </div>
  );
}

export default App;
