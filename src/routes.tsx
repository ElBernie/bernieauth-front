import { RootRoute, Route, Router } from '@tanstack/router';
import LoginPage from './pages/login';
import OrganizationsPages from './pages/organizations';
import IndexPage from './pages';
import OrganizationPage from './pages/organization';

const rootRoute = new RootRoute({});

const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/',
	component: IndexPage,
});
const login = new Route({
	getParentRoute: () => rootRoute,
	path: 'login', // similar to /login
	component: LoginPage,
});

const organizations = new Route({
	getParentRoute: () => rootRoute,
	path: 'organizations',
	component: OrganizationsPages,
});

const organization = new Route({
	getParentRoute: () => rootRoute,
	path: '/organization/$organizationId',
    
	component: OrganizationPage,
});
const routeTree = rootRoute.addChildren([
	indexRoute,
	login,
	organizations,
	organization,
]);

const router = new Router({ routeTree: routeTree, defaultPreload: 'intent' });

declare module '@tanstack/router' {
	interface Register {
		// This infers the type of our router and registers it across your entire project
		router: typeof router;
	}
}

export default router;
