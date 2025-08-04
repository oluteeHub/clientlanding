import { formLink } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
	return (
		<div className='min-h-screen bg-black text-white relative overflow-hidden flex items-center'>
			{/* Background Elements */}
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute top-20 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl'></div>
				<div className='absolute bottom-20 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl'></div>
			</div>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Left Content */}
					<div className='space-y-8'>
						{/* Badge */}
						<div className='inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium backdrop-blur-sm'>
							<span className='w-2 h-2 bg-white rounded-full mr-2 animate-pulse'></span>
							Africa's Leading HR System
						</div>

						{/* Main Heading */}
						<div className='space-y-4'>
							<h1 className='text-5xl md:text-6xl lg:text-7xl font-black leading-tight'>
								OLUTEE
								<br />
								<span className='text-white/80'>HUB</span>
							</h1>
							<div className='w-24 h-1 bg-white'></div>
						</div>

						{/* Subtitle */}
						<p className='text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-lg'>
							<span className='text-white font-semibold'>
								"Africa's HR Brain"
							</span>
							<br />
							All In - Built For Africa.
						</p>

						{/* Feature Pills */}
						<div className='flex flex-wrap gap-3'>
							{[
								"Payroll Automation",
								"Employee Management",
								"KPI Tracking",
								"Document Vault",
							].map((feature, index) => (
								<span
									key={index}
									className='px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm'
								>
									{feature}
								</span>
							))}
						</div>

						{/* CTA Buttons */}
						<div className='flex flex-col sm:flex-row gap-4 pt-4'>
							<a
								href={formLink}
								className='inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl'
							>
								Join Waitlist
								<span className='ml-2'>→</span>
							</a>
							<button className='inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm'>
								Watch Demo
								<span className='ml-2'>▶</span>
							</button>
						</div>

						{/* Stats */}
						<div className='flex items-center space-x-8 pt-8 border-t border-white/10'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-white'>
									13+
								</div>
								<div className='text-sm text-gray-400'>
									Core Features
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-white'>
									10
								</div>
								<div className='text-sm text-gray-400'>
									Free Staff Limit
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-white'>
									100%
								</div>
								<div className='text-sm text-gray-400'>
									African-Built
								</div>
							</div>
						</div>
					</div>

					{/* Right Content - Feature Preview */}
					<div className='relative'>
						<div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-6'>
							<div className='flex items-center justify-between'>
								<h3 className='text-xl font-bold'>
									HR Dashboard Preview
								</h3>
								<div className='flex space-x-1'>
									<div className='w-3 h-3 bg-white/20 rounded-full'></div>
									<div className='w-3 h-3 bg-white/20 rounded-full'></div>
									<div className='w-3 h-3 bg-white rounded-full'></div>
								</div>
							</div>

							{/* Mock Dashboard Elements */}
							<div className='space-y-4'>
								<div className='flex items-center justify-between p-4 bg-white/5 rounded-xl'>
									<div className='flex items-center space-x-3'>
										<div className='w-10 h-10 bg-white/20 rounded-full'></div>
										<div>
											<div className='w-24 h-3 bg-white/30 rounded'></div>
											<div className='w-16 h-2 bg-white/20 rounded mt-2'></div>
										</div>
									</div>
									<div className='w-16 h-6 bg-white/20 rounded'></div>
								</div>

								<div className='flex items-center justify-between p-4 bg-white/5 rounded-xl'>
									<div className='flex items-center space-x-3'>
										<div className='w-10 h-10 bg-white/20 rounded-full'></div>
										<div>
											<div className='w-20 h-3 bg-white/30 rounded'></div>
											<div className='w-12 h-2 bg-white/20 rounded mt-2'></div>
										</div>
									</div>
									<div className='w-16 h-6 bg-white/20 rounded'></div>
								</div>

								<div className='flex items-center justify-between p-4 bg-white/5 rounded-xl'>
									<div className='flex items-center space-x-3'>
										<div className='w-10 h-10 bg-white/20 rounded-full'></div>
										<div>
											<div className='w-28 h-3 bg-white/30 rounded'></div>
											<div className='w-18 h-2 bg-white/20 rounded mt-2'></div>
										</div>
									</div>
									<div className='w-16 h-6 bg-white rounded'></div>
								</div>
							</div>

							<div className='flex justify-between items-center pt-4 border-t border-white/10'>
								<span className='text-sm text-gray-400'>
									Active Employees
								</span>
								<span className='text-lg font-bold'>247</span>
							</div>
						</div>

						{/* Floating Elements */}
						<div className='absolute -top-4 -right-4 w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center'>
							<span className='text-2xl'><Icon icon={'streamline-ultimate:cash-payment-bill-bold'}/></span>
						</div>
						<div className='absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center'>
							<span className='text-xl'><Icon icon={'icomoon-free:stats-dots'} /></span>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Gradient Line */}
			<div className='absolute bottom-0 left-0 w-full h-1 bg-white'></div>
		</div>
	);
};

export default Hero;
