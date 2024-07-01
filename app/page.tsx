import Image from 'next/image'
import Link from 'next/link'
import CubeComponent from './components/CubeComponent'

function Footer() {
	return (
		<footer className=" text-white py-4 mt-8 w-full">
			<div className="max-w-6xl mx-auto flex justify-between items-center px-4">
				<p className="text-sm">&copy; 2024 Rev. All rights reserved.</p>
				<ul className="flex space-x-4">
					<li>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-500 transition-colors duration-300"
						>
							Twitter
						</a>
					</li>
					<li>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-500 transition-colors duration-300"
						>
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-500 transition-colors duration-300"
						>
							GitHub
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-backgroundStart to-backgroundEnd">
			<header className="bg-black bg-opacity-50 text-white p-4 sticky top-0 z-50 w-full shadow-md">
				<nav className="flex justify-between items-center w-full max-w-6xl mx-auto">
					<div className="flex-1 text-center md:text-left">
						<Link
							href="/"
							className="text-1xl font-bold hover:text-blue-500 transition-colors duration-300"
						>
							<div className="shine">Rev</div>
						</Link>
					</div>
					<ul className="flex justify-center space-x-4 lg:space-x-8 flex-1">
						<li>
							<Link
								href="/"
								className="hover:text-blue-500 transition-colors duration-300"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/projects"
								className="hover:text-blue-500 transition-colors duration-300"
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								href="/skills"
								className="hover:text-blue-500 transition-colors duration-300"
							>
								Skills
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className="hover:text-blue-500 transition-colors duration-300"
							>
								AboutMe
							</Link>
						</li>
						<li>
							<Link
								href="/contact"
								className="hover:text-blue-500 transition-colors duration-300"
							>
								Contact
							</Link>
						</li>
					</ul>
					<div className="flex-1 flex justify-center md:justify-end items-center">
						<Image
							src="/icon.jpeg"
							alt="Profile Picture"
							width={40}
							height={40}
							className="rounded-full border-2 border-gray-500"
						/>
					</div>
				</nav>
			</header>

			<div className="text-center space-y-4 h-screen flex flex-col justify-evenly items-center">
				<CubeComponent />
				<div className="portfolio-name">
					<h1 className="text-4xl md:text-6xl font-bold">
						HEY, I&apos;m R LAKSHMAN REVANTH
					</h1>

					<p className="text-gray-600">
						I&apos;m a app developer, backend developer & Trader
					</p>
					<div className="flex justify-center space-x-4 mt-8">
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
							→ see my projects
						</button>
						<button className="border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white font-bold py-2 px-4 rounded">
							→ more about me
						</button>
					</div>
				</div>
			</div>

			<div className="text-container p-16">
				<div className="bg-blue-500/80 backdrop-blur-md rounded-xl p-10 shadow-lg w-full text-center mx-auto">
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Your vision + my code = exceptional digital experiences.
					</h1>
					<p className="text-lg md:text-xl text-blue-200">
						Let's transform your ideas into reality.
					</p>
				</div>
			</div>
			<div className="services-section flex flex-col justify-between items-center w-full pt-4 md:pt-6 lg:pt-8">
				<div className="services-section-title flex flex-col">
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						My Services
					</h1>
					<div className="services-section-sub-title">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dicta quisquam aperiam vero voluptatum suscipit
						vel, sint
					</div>
				</div>

				<div className="services-section-cards flex justify-center items-center ">
					<div className="grid">
						<div className="card">
							<h4>Products</h4>
							<p>
								Standard chunk of Lorem Ipsum used since the
								1500s is showed below for those interested.
							</p>
							<div className="shine"></div>
							<div className="background">
								<div className="tiles">
									<div className="tile tile-1"></div>
									<div className="tile tile-2"></div>
									<div className="tile tile-3"></div>
									<div className="tile tile-4"></div>

									<div className="tile tile-5"></div>
									<div className="tile tile-6"></div>
									<div className="tile tile-7"></div>
									<div className="tile tile-8"></div>

									<div className="tile tile-9"></div>
									<div className="tile tile-10"></div>
								</div>

								<div className="line line-1"></div>
								<div className="line line-2"></div>
								<div className="line line-3"></div>
							</div>
						</div>
						<div className="card">
							<h4>Products</h4>
							<p>
								Standard chunk of Lorem Ipsum used since the
								1500s is showed below for those interested.
							</p>
							<div className="shine"></div>
							<div className="background">
								<div className="tiles">
									<div className="tile tile-1"></div>
									<div className="tile tile-2"></div>
									<div className="tile tile-3"></div>
									<div className="tile tile-4"></div>

									<div className="tile tile-5"></div>
									<div className="tile tile-6"></div>
									<div className="tile tile-7"></div>
									<div className="tile tile-8"></div>

									<div className="tile tile-9"></div>
									<div className="tile tile-10"></div>
								</div>

								<div className="line line-1"></div>
								<div className="line line-2"></div>
								<div className="line line-3"></div>
							</div>
						</div>
						<div className="card">
							{' '}
							<h4>Categories</h4>
							<p>
								Standard chunk of Lorem Ipsum used since the
								1500s is showed below for those interested.
							</p>
							<div className="shine"></div>
							<div className="background">
								<div className="tiles">
									<div className="tile tile-1"></div>
									<div className="tile tile-2"></div>
									<div className="tile tile-3"></div>
									<div className="tile tile-4"></div>

									<div className="tile tile-5"></div>
									<div className="tile tile-6"></div>
									<div className="tile tile-7"></div>
									<div className="tile tile-8"></div>

									<div className="tile tile-9"></div>
									<div className="tile tile-10"></div>
								</div>

								<div className="line line-1"></div>
								<div className="line line-2"></div>
								<div className="line line-3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="contact-section flex flex-col justify-between items-center w-full min-h-screen pt-4 md:pt-6 lg:pt-8">
				<div className="contact-section-title flex flex-col items-start">
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Contact Me
					</h1>
					<div className="services-section-sub-title">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dicta quisquam aperiam vero voluptatum suscipit
						vel, sint
					</div>
				</div>
				<div className="contact-section-body">
					<div className="wrapper">
						<form className="form__contact" action="">
							<fieldset>
								<p>Hey, Stranger!</p>
								<p>
									My name is{' '}
									<span
										className="form__field field--name"
										data-placeholder="your name"
										tabIndex={1}
										contentEditable
									></span>{' '}
									and I'm writing to you since I'm interested
									in{' '}
									<span
										className="form__field field--message"
										data-placeholder="your message"
										tabIndex={2}
										contentEditable
									></span>
									.
								</p>
								<p>
									This is my{' '}
									<span
										className="form__field field--email"
										data-placeholder="email address"
										tabIndex={3}
										contentEditable
									></span>
									.
								</p>
								<p>Hope to get in touch soon. Cheers!</p>
								<button
									type="submit"
									className="button button--xlarge"
									tabIndex={4}
								>
									Send message &#187;
								</button>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
			<div className="skills-section-title flex flex-col items-start pt-4 md:pt-6 lg:pt-8">
				<div className="skills-section-title">
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Skills
					</h1>
					<div className="skills-section-sub-title">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dicta quisquam aperiam vero voluptatum suscipit
						vel, sint
					</div>
				</div>
				<div className="skills-section-body"></div>
			</div>
			{/* <div className="road-card">
				<div className="shadow">⚠ the End</div>
			</div> */}

			<Footer />
		</main>
	)
}
