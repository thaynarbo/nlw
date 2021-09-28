import { Route, BrowserRouter } from 'react-router-dom';
import { NewRoom } from './pages/NewRoom';
import { Home } from './pages/Home';

export default function App() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home} />
			<Route path='/rooms/new' component={NewRoom} />
		</BrowserRouter>
	);
}
