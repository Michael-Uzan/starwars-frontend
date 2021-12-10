import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { AppFotter } from './cmp/AppFooter';
import { AppHeader } from './cmp/AppHeader';
import { SideBar } from './cmp/SideBar';
import { UserMsg } from './cmp/UserMsg';
import IFilter from './interface/IFilter.interface';
import { Home } from './pages/Home';
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
    <div className="main-app">
      <Router>
        <UserMsg />
        <AppHeader onChangeFilter={onChangeFilter} />
        <main className='main-content' >
          <SideBar movies={movies} />
          <Switch>
            <Route path='/movie/:movieId'
              render={(props) => (
                <MovieDetails {...props} loadMovies={loadMovies} authed={true} />
              )}
            />
            <Route path='/' component={Home} />
          </Switch>
        </main>
        <AppFotter />
      </Router>
    </div>
  );
}

export default App;
