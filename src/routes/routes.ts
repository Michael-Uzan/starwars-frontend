import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";

interface IRoutes {
    path: string,
    component: any
}

const routes: IRoutes[] = [
    {
        path: '/movie/:movieId',
        component: MovieDetails,
    },
    {
        path: '/',
        component: Home,
    }
]

export default routes;
