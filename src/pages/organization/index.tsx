import { Link, useParams } from '@tanstack/router';

const OrganizationPage: React.FunctionComponent = () => {
	const params = useParams();

	return (
		<>
			<h1>Organization page</h1>
			{JSON.stringify(params)}
			<Link to='/organizations'>back to organizations index</Link>
		</>
	);
};

export default OrganizationPage;
