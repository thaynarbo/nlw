import { useHistory } from 'react-router-dom';

import illustrationImg from './../assets/images/illustration.svg';
import logoImg from './../assets/images/logo.svg';
import googleIconImg from './../assets/images/google-icon.svg';
import './../styles/auth.scss';
import { Button } from '../components/Button';

export function Home() {
	const history = useHistory();
	const navigateNewRoom = () => {
		history.push('/rooms/new');
	};
	return (
		<div id='page-auth'>
			<aside>
				<img
					src={illustrationImg}
					alt='ilustração de perguntas e respostas'
				/>
				<strong>Crie salas de Q&amp;A ao-vivo</strong>
				<p>Tire as dúvidas de sua audiencia em tempo real</p>
			</aside>
			<main>
				<div className='main-content'>
					<img src={logoImg} alt='Letmeask' />

					<button onClick={navigateNewRoom} className='create-room'>
						<img src={googleIconImg} alt='logo do google' />
						Crie sua sala com o google
					</button>

					<div className='separator'>ou entre numa sala</div>
					<form action=''>
						<input
							type='text'
							placeholder='digite o código da sala'
						/>
						<Button type='submit'>Entrar na sala</Button>
					</form>
				</div>
			</main>
		</div>
	);
}
