import { Link } from '@tanstack/router';

const IndexPage: React.FunctionComponent = () => {
	return (
		<>
			<h1>Hello from /</h1>
			<Link to='/login'>Login</Link>
			<br />
			<Link to='/organizations'>Organizations</Link>
		</>
	);
};

export default IndexPage;
