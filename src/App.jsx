import { Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Nav from './components/Nav';
import MovieDetails from './pages/MovieDetails';

function App() {
	return (
		<>
			<Nav />

			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/movies/:id" element={<MovieDetails />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
