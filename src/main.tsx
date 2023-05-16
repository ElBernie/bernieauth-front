import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from '@tanstack/router';
import './i18n/config.ts';
import './index.css';
import router from './routes.tsx';
import { store } from './state/store.ts';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './utils/queryclient.util.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>
);
