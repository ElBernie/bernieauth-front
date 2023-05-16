import { Link } from '@tanstack/router';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

const IndexPage: React.FunctionComponent = () => {
	const { data, error, isLoading } = useQuery({ queryKey: '/test' });
	const { t } = useTranslation();
	return (
		<>
			<h1 className='text-3xl font-bold '>{t('HELLO_WORLD')}</h1>
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
