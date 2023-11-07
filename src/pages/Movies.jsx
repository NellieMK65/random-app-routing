import { NavLink } from 'react-router-dom';

const Movies = () => {
	return (
		<div>
			<div className="card">
				{/* <img src="..." className="card-img-top" alt="..." /> */}
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<NavLink to={`/movies/${34}`} className="btn btn-primary">
						View
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Movies;
