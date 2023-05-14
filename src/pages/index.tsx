import { Link } from '@tanstack/router';
import { useQuery } from 'react-query';

const IndexPage: React.FunctionComponent = () => {
	const { data, error, isLoading,  } = useQuery({ queryKey: '/test' });
	return (
		<>
			<h1>Hello from /</h1>
			<Link to='/login'>Login</Link>
			<br />
			<Link to='/organizations'>Organizations</Link>
			loading:{isLoading ? 'loading' : 'loaded'}
			<br />
			error:{JSON.stringify(error)}
			<br />
			data: {JSON.stringify(data)}
			<br />
		</>
	);
};

export default IndexPage;
