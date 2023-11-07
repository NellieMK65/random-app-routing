import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
	const params = useParams();

	// The id is defined from the Route component
	// After getting the id from params passed through the url,
	// we can run the fetch api to get a single movie
	// useEffect(() => {
	//     fetch(`http://localhost:3000/movies/${params.id}`)
	// }, [])

	return <div>MovieDetails {params.id}</div>;
}

export default MovieDetails;
