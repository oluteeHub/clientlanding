"use client";

import Image from "next/image";
import { navLinks, formLink } from "@/utils/data";
import { logo } from "@/assets";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Header = () => {
	const [isMobile, setIsMobile] = useState(false);

	const toggleMobile = () => {
		setIsMobile(!isMobile);
	};

	return (
		<nav className='relative flex justify-between items-center px-4 md:px-8 lg:px-12'>
			{/* Logo */}
			<div className='cursor-pointer z-50'>
				<Image
					alt='logo'
					src={logo}
					width={200}
					height={70}
					className='md:w-[200px] md:h-[160px]'
				/>
			</div>

			{/* Desktop Navigation */}
			<div className='hidden md:flex justify-around gap-8 lg:gap-16'>
				{navLinks.map((link, index) => (
					<Link
						className='cursor-pointer hover:opacity-70 transition-opacity duration-200'
						href={link.link}
						key={index}
					>
						{link.title}
					</Link>
				))}
			</div>

			{/* Desktop CTA Button */}
			<Link target="_blank" href={formLink}>
				<button className='hidden md:flex bg-white cursor-pointer h-6 px-4 lg:px-5 py-5 font-bold text-black items-center rounded-2xl hover:bg-gray-100 transition-colors duration-200'>
					Join Waitlist
				</button>
			</Link>

			{/* Mobile Menu Button */}
			<button
				onClick={toggleMobile}
				className='md:hidden z-50 p-2'
				aria-label='Toggle mobile menu'
			>
				<Icon
					icon={isMobile ? "mdi:close" : "mdi:menu"}
					className={"w-6 h-6 text-gray-500"}
				/>
			</button>

			{isMobile && (
				<div className='fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden'>
					<div className='fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300'>
						{/* Mobile Menu Content */}
						<div className='flex flex-col pt-20 px-6 space-y-6'>
							{navLinks.map((link, index) => (
								<Link
									className='cursor-pointer text-black hover:text-gray-600 transition-colors duration-200 py-2 border-b border-gray-100'
									href={link.link}
									key={index}
									onClick={() => setIsMobile(false)}
								>
									{link.title}
								</Link>
							))}

							{/* Mobile CTA Button */}
							<Link target="_blank" href={formLink}>
								<button
									className='bg-black text-white cursor-pointer px-6 py-3 font-bold rounded-2xl hover:bg-gray-800 transition-colors duration-200 mt-6'
									onClick={() => setIsMobile(false)}
								>
									Join Waitlist
								</button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Header;
