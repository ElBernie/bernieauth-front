import { Link } from '@tanstack/router';
const Navbar = () => {
	return (
		<>
			<h1>BernieAUth</h1>
			<Link to='/'>Home</Link>
			<Link to='/register'>Register</Link>
		</>
	);
};
export default Navbar;
