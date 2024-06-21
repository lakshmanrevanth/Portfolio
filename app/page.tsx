import Image from 'next/image'
import Link from 'next/link'
// function aboutMeContactFun() {
// 	return (
// 		<div className="card">
// 			<div className="background"></div>
// 			<div className="logo">Socials</div>

// 			<a href="#">
// 				<div className="box box1">
// 					<span className="icon"></span>
// 				</div>
// 			</a>

// 			<a href="##">
// 				<div className="box box2">
// 					{' '}
// 					<span className="icon"></span>
// 				</div>
// 			</a>

// 			<a href="###">
// 				<div className="box box3">
// 					<span className="icon"></span>
// 				</div>
// 			</a>

// 			<div className="box box4"></div>
// 		</div>
// 	)
// }
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
			</div>

			<div className="about-me-section h-screen flex flex-col w-full">
				<div className="about-me-nav-section flex justify-start items-center p-8 h-15">
					<h1 className="text-2xl md:text-4xl font-bold text-white">
						About Me
					</h1>
				</div>
				<div className="about-me-body flex flex-col justify-start items-center p-8 w-full ">
					<div className="about-me-body-title w-full">
						<div className="about-me-body-name ">
							<h1 className="text-2xl md:text-4xl font-bold text-white">
								R LAKSHMAN REVANTH
							</h1>
						</div>
						<div className="about-me-body-name-subtitle">
							<h2 className="text-1xl md:text-2xl font-bold text-white">
								App Developer
							</h2>
						</div>
						<div className="red-line"></div>
					</div>
					<div className="about-me-body-center flex flex-row justify-start w-full">
						<div className="about-me-body-left">
							<div className="about-me-body-left-education">
								<div className="card">
									<h2>EDUCATION</h2>
									<div className="education-item">
										<div className="year">2020 - 2024</div>
										<div className="details">
											<div className="institution">
												Sona College Of Technology
											</div>
											<div>
												B.TECH Fashion Technology ( CGPA
												8.3/10 )
											</div>
										</div>
									</div>
									<div className="education-item">
										<div className="year">2023</div>
										<div className="details">
											<div className="institution">
												Image Creative Education
											</div>
											<div>UI/UX Designing</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="about-me-body-right"></div>
					</div>

					<div className="about-me-body-social-card "></div>
				</div>
			</div>

			<Footer />
		</main>
	)
}
