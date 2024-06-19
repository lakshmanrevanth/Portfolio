import Image from 'next/image'
import Link from 'next/link'

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
							Rev
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
			<div className="text-center space-y-4 h-screen flex flex-col justify-center items-center">
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

			<div className="text-container p-16">
				<div className="bg-blue-500/80 backdrop-blur-md rounded-xl p-10 shadow-lg w-full text-center mx-auto">
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Your vision + my code = exceptional digital experiences.
					</h1>
					<p className="text-lg md:text-xl text-blue-200">
						Let's transform your ideas into reality.
					</p>
				</div>

				<div className="services-grid">
					<div className="service">
						<h3>Web apps</h3>
						<p>
							I develop web applications in Python and JavaScript
							programming languages.
						</p>
					</div>
					<div className="service">
						<h3>E-Commerce</h3>
						<p>
							I build e-commerce sites and provide technical
							solutions on Shopify and Wix as a platform partner.
						</p>
					</div>
					<div className="service">
						<h3>No-code</h3>
						<p>
							I provide technical solutions on no-code platforms
							like WebFlow, Wix, Squarespace.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</main>
	)
}
