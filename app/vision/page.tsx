import { Icon } from "@iconify/react/dist/iconify.js";
const Vision = () => {
	return (
		<div className='min-h-screen bg-black text-white relative overflow-hidden'>
			{/* Background Elements */}
			<div className='absolute inset-0 opacity-3'>
				<div className='absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl'></div>
				<div className='absolute bottom-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl'></div>
			</div>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
				{/* Header Section */}
				<div className='text-center mb-20'>
					<div className='inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-medium backdrop-blur-sm mb-8'>
						<span className='w-2 h-2 bg-white rounded-full mr-3 animate-pulse'></span>
						Our Vision & Mission
					</div>

					<h1 className='text-4xl md:text-6xl font-black mb-6 leading-tight'>
						TRANSFORMING
						<br />
						<span className='text-white/70'>AFRICA'S WORKFORCE</span>
					</h1>

					<div className='w-32 h-1 bg-white mx-auto'></div>
				</div>

				{/* Vision Statement */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20'>
					<div className='space-y-8'>
						<div className='space-y-4'>
							<h2 className='text-3xl font-bold'>Our Vision</h2>
							<div className='w-16 h-0.5 bg-white'></div>
						</div>
						<p className='text-xl text-gray-300 leading-relaxed'>
							To become{" "}
							<span className='text-white font-semibold'>
								Africa's definitive HR Brain
							</span>
							, powering every organization across the continent with
							intelligent, comprehensive workforce management
							solutions that understand our unique context,
							challenges, and aspirations.
						</p>
					</div>

					<div className='space-y-8'>
						<div className='space-y-4'>
							<h2 className='text-3xl font-bold'>Our Mission</h2>
							<div className='w-16 h-0.5 bg-white'></div>
						</div>
						<p className='text-xl text-gray-300 leading-relaxed'>
							Democratizing enterprise-grade HR technology for African
							businesses, from startups to corporations, by delivering
							a{" "}
							<span className='text-white font-semibold'>
								Full Feature Stack — All In
							</span>
							solution that's accessible, affordable, and
							authentically African.
						</p>
					</div>
				</div>

				{/* Core Values */}
				<div className='mb-20'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							Our Core Values
						</h2>
						<div className='w-24 h-1 bg-white mx-auto'></div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{
								icon: "hugeicons:ai-innovation-01",
								title: "Innovation",
								description:
									"Pushing boundaries with cutting-edge HR tech solutions built for African excellence.",
							},
							{
								icon: "game-icons:africa",
								title: "African-First",
								description:
									"Designed by Africans, for Africans, understanding our unique business landscape.",
							},
							{
								icon: "carbon:security",
								title: "Security",
								description:
									"Military-grade security with 2FA and comprehensive audit trails for sensitive HR data.",
							},
							{
								icon: "mdi:help-outline",
								title: "Empowerment",
								description:
									"Enabling organizations to focus on growth while we handle the HR complexity.",
							},
						].map((value, index) => (
							<div
								key={index}
								className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105'
							>
								<div className='text-4xl mb-4'>
									<Icon icon={value.icon} />
								</div>
								<h3 className='text-xl font-bold mb-4'>
									{value.title}
								</h3>
								<p className='text-gray-300 leading-relaxed'>
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* The Problem We're Solving */}
				<div className='mb-20'>
					<div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl md:text-4xl font-bold mb-4'>
								The Challenge We Address
							</h2>
							<div className='w-24 h-1 bg-white mx-auto'></div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='text-center space-y-4'>
								<div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto'>
									<span className='text-2xl'>
										<Icon
											icon={
												"carbon:ibm-engineering-systems-design-rhapsody"
											}
										/>
									</span>
								</div>
								<h3 className='text-xl font-bold'>
									Fragmented Systems
								</h3>
								<p className='text-gray-300'>
									Multiple tools, scattered data, inefficient
									processes plague African businesses.
								</p>
							</div>

							<div className='text-center space-y-4'>
								<div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto'>
									<span className='text-2xl'>
										<Icon
											icon={
												"streamline-ultimate:cash-payment-bill-bold"
											}
										/>
									</span>
								</div>
								<h3 className='text-xl font-bold'>Cost Barriers</h3>
								<p className='text-gray-300'>
									Enterprise HR solutions are prohibitively expensive
									for growing African companies.
								</p>
							</div>

							<div className='text-center space-y-4'>
								<div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto'>
									<span className='text-2xl'>
										<Icon icon={"academicons:africarxiv"} />
									</span>
								</div>
								<h3 className='text-xl font-bold'>Context Gap</h3>
								<p className='text-gray-300'>
									Foreign solutions don't understand African business
									culture and compliance needs.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Our Solution */}
				<div className='text-center mb-20'>
					<h2 className='text-3xl md:text-4xl font-bold mb-8'>
						Our Solution
					</h2>
					<div className='w-24 h-1 bg-white mx-auto mb-12'></div>

					<div className='max-w-4xl mx-auto'>
						<p className='text-2xl text-gray-300 leading-relaxed mb-8'>
							<span className='text-white font-semibold'>
								Olutee Tech Hub
							</span>{" "}
							consolidates 13+ essential HR functions into one
							powerful, affordable platform. From onboarding to
							offboarding, payroll to performance tracking, we've got
							African businesses covered.
						</p>

						<div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
							{[
								"Employee Management",
								"Payroll Automation",
								"Performance Tracking",
								"Document Management",
								"Leave Management",
								"HR Letters System",
								"ID Card Generation",
								"Audit Trails",
							].map((feature, index) => (
								<div
									key={index}
									className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-sm font-medium hover:bg-white/20 transition-all duration-300'
								>
									{feature}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Future Vision */}
				<div className='text-center'>
					<div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12'>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Looking Ahead
						</h2>
						<div className='w-24 h-1 bg-white mx-auto mb-8'></div>
						<p className='text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto'>
							By 2030, we envision every African organization from
							Lagos startups to South Afrucan corporations powered by
							Olutee Hub, creating a connected ecosystem where
							talent thrives, businesses scale efficiently, and Africa
							leads in workforce innovation.
						</p>
					</div>
				</div>
			</div>

			{/* Bottom Line */}
			<div className='absolute bottom-0 left-0 w-full h-1 bg-white'></div>
		</div>
	);
};

export default Vision;
