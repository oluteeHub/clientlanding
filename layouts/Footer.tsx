import { navLinks } from "@/utils/data";
import { logo } from "@/assets";
import Image from "next/image";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='bg-black text-white relative overflow-hidden'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-3'>
				<div className='absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl'></div>
				<div className='absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl'></div>
			</div>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				{/* Main Footer Content */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
					{/* Brand Section */}
					<div className='lg:col-span-2 space-y-6'>
						<div className='flex items-center space-x-3'>
							<Image
								src={logo}
								alt='Olutee Hub Logo'
								width={160}
								height={80}
								className='filter brightness-110'
							/>
						</div>
						<p className='text-gray-300 text-lg leading-relaxed max-w-md'>
							<span className='text-white font-semibold'>
								Olutee Hub
							</span>{" "}
							- Africa's leading HR system, revolutionizing human
							resource management across the continent.
						</p>
						<div className='flex space-x-4'>
							<button className='bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105'>
								Get Started
							</button>
							<button className='bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg'>
								Learn More
							</button>
						</div>
					</div>

					{/* Quick Links */}
					<div className='space-y-6'>
						<h3 className='text-xl font-bold text-white mb-4 relative'>
							Quick Links
							<div className='absolute -bottom-2 left-0 w-12 h-0.5 bg-white'></div>
						</h3>
						<ul className='space-y-3'>
							{navLinks.map((link, index) => (
								<li key={index}>
									<a
										href={link.link}
										className='text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block'
									>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div className='space-y-6'>
						<h3 className='text-xl font-bold text-white mb-4 relative'>
							Connect
							<div className='absolute -bottom-2 left-0 w-12 h-0.5 bg-white'></div>
						</h3>
						<div className='space-y-4'>
							<div className='flex items-center space-x-3 text-gray-300'>
								<div className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center'>
									<span className='text-xs'>📧</span>
								</div>
								<span>tadeniji06@gmail.com</span>
							</div>
							<div className='flex items-center space-x-3 text-gray-300'>
								<div className='w-8 h-8 bg-white/10 rounded-full flex items-center justify-center'>
									<span className='text-xs'>🌍</span>
								</div>
								<span>Lagos, Nigeria</span>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-white/10 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
						<div className='flex items-center space-x-6 text-sm text-gray-400'>
							<span>
								© {currentYear} Olutee Hub. All rights reserved.
							</span>
							<span className='hidden md:block'>•</span>
							<a
								href='#'
								className='hover:text-white transition-colors duration-200'
							>
								Privacy Policy
							</a>
							<span className='hidden md:block'>•</span>
							<a
								href='#'
								className='hover:text-white transition-colors duration-200'
							>
								Terms of Service
							</a>
						</div>
						<div className='flex items-center space-x-2 text-sm text-gray-400'>
							<span>Made with</span>
							<span className='text-white animate-pulse'>❤️</span>
							<span>in Africa</span>
						</div>
					</div>
				</div>
			</div>

			{/* Decorative Elements */}
			<div className='absolute top-0 left-0 w-full h-1 bg-white'></div>
		</footer>
	);
};

export default Footer;
