import { QueryClient, QueryFunctionContext } from 'react-query';
import axios from './axios.util';

// Create a default query function for react-query, so we don't have to pass an axios call everytime
const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
	const { data } = await axios.get(
		`${import.meta.env.VITE_AUTH_SERVER_URL}${queryKey[0]}`
	);
	return data;
};

// setting the default query function
export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryFn: defaultQueryFn,
		},
	},
});
