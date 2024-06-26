import Image from "next/image";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

export default function Home() {
  return (
		<main className=" bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
			<Header />

			<section
				id="hero"
				className="snap-start">
				<Hero />
			</section>

			<section
				id="about"
				className="snap-center">
				<About />
			</section>

			{/* About */}

			{/* Experience */}

			{/* Skills */}

			{/* Projects */}

			{/* Contact Me */}
		</main>
	);
}
