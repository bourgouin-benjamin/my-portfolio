// Composants
import Welcome from '@/components/home/Welcome/Welcome';
import About from '@/components/home/About/About';
import Skills from '@/components/home/Skills/Skills';
import LastProject from '@/components/home/LastProject/LastProject';
import Contact from '@/components/home/Contact/Contact';

function Home() {
	return (
		<main>
			<Welcome />
			<div className="wrapper">
				<About />
				<Skills />
				<LastProject />
				<Contact />
			</div>
		</main>
	);
}

export default Home;
