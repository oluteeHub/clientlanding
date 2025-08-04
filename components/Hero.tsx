import { formLink } from "@/utils/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
	return (
		<div className='bg-black text-white'>
			{/* Main Hero Section */}
			<div className='min-h-screen relative overflow-hidden flex items-center'>
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
								<Icon
									icon={"streamline-ultimate:cash-payment-bill-bold"}
									className='text-2xl'
								/>
							</div>
							<div className='absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center'>
								<Icon
									icon={"icomoon-free:stats-dots"}
									className='text-xl'
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Gradient Line */}
				<div className='absolute bottom-0 left-0 w-full h-1 bg-white'></div>
			</div>

			{/* Problems We Solve Section */}
			<div className='relative py-20'>
				<div className='absolute inset-0 opacity-3'>
					<div className='absolute top-0 right-1/3 w-80 h-80 bg-white rounded-full blur-3xl'></div>
				</div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							The Problems We're Solving
						</h2>
						<div className='w-24 h-1 bg-white mx-auto mb-6'></div>
						<p className='text-xl text-gray-300 max-w-3xl mx-auto'>
							African businesses face unique HR challenges that
							generic solutions can't address. We're building the
							answer.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						{[
							{
								icon: "mdi:puzzle-outline",
								problem: "Fragmented Systems",
								description:
									"Multiple tools, scattered data, no single source of truth for employee information.",
							},
							{
								icon: "mdi:cash-remove",
								problem: "Expensive Solutions",
								description:
									"Enterprise HR software costs are prohibitive for growing African businesses.",
							},
							{
								icon: "mdi:earth-off",
								problem: "Foreign Context",
								description:
									"International solutions don't understand African compliance, culture, or business needs.",
							},
						].map((item, index) => (
							<div
								key={index}
								className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300'
							>
								<div className='w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6'>
									<Icon icon={item.icon} className='text-2xl' />
								</div>
								<h3 className='text-xl font-bold mb-4'>
									{item.problem}
								</h3>
								<p className='text-gray-300 leading-relaxed'>
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Core Features Section */}
			<div className='relative py-20'>
				<div className='absolute inset-0 opacity-3'>
					<div className='absolute bottom-0 left-1/3 w-96 h-96 bg-white rounded-full blur-3xl'></div>
				</div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							Full Feature Stack — All In
						</h2>
						<div className='w-24 h-1 bg-white mx-auto mb-6'></div>
						<p className='text-xl text-gray-300 max-w-3xl mx-auto'>
							Everything your organization needs to manage human
							resources, from onboarding to offboarding, in one
							powerful platform.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{[
							{
								icon: "mdi:account-plus",
								name: "Employee Onboarding",
								desc: "Self-service onboarding with org invite links",
							},
							{
								icon: "mdi:cash-multiple",
								name: "Payroll Automation",
								desc: "Monthly auto-salary with Paystack/Flutterwave",
							},
							{
								icon: "mdi:file-document-multiple",
								name: "Document Management",
								desc: "Secure vault for certificates & contracts",
							},
							{
								icon: "mdi:chart-line",
								name: "KPI Tracking",
								desc: "Performance monitoring & analytics",
							},
							{
								icon: "mdi:email-outline",
								name: "HR Letters System",
								desc: "Queries, promotions, commendations",
							},
							{
								icon: "mdi:calendar-check",
								name: "Leave Management",
								desc: "Request & approval workflows",
							},
							{
								icon: "mdi:card-account-details",
								name: "ID Card Generator",
								desc: "Auto-generate staff ID with QR codes",
							},
							{
								icon: "mdi:shield-check",
								name: "Audit Trails",
								desc: "Complete logs of all sensitive actions",
							},
						].map((feature, index) => (
							<div
								key={index}
								className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105'
							>
								<div className='w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4'>
									<Icon icon={feature.icon} className='text-xl' />
								</div>
								<h3 className='font-bold mb-2'>{feature.name}</h3>
								<p className='text-sm text-gray-300 leading-relaxed'>
									{feature.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Why Be Excited Section */}
			<div className='relative py-20'>
				<div className='absolute inset-0 opacity-3'>
					<div className='absolute top-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl'></div>
				</div>

				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							Why You Should Be Excited
						</h2>
						<div className='w-24 h-1 bg-white mx-auto mb-6'></div>
						<p className='text-xl text-gray-300 max-w-3xl mx-auto'>
							We're not just building software—we're revolutionizing
							how African businesses manage their most valuable asset:
							their people.
						</p>
					</div>

					<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
						<div className='space-y-8'>
							{[
								{
									title: "Built for Africa, By Africans",
									description:
										"Understanding local business culture, compliance requirements, and payment systems from day one.",
								},
								{
									title: "Freemium Model",
									description:
										"Start free with up to 10 staff, then pay-as-you-grow. No huge upfront costs or enterprise lock-ins.",
								},
								{
									title: "Military-Grade Security",
									description:
										"Google 2FA, encrypted data, comprehensive audit trails. Your sensitive HR data is fortress-protected.",
								},
								{
									title: "Real-Time Everything",
									description:
										"WebSocket-powered notifications, live updates, instant PDF generation. Your HR moves at the speed of business.",
								},
							].map((item, index) => (
								<div key={index} className='flex space-x-4'>
									<div className='w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
										<span className='text-black font-bold text-sm'>
											{index + 1}
										</span>
									</div>
									<div>
										<h3 className='text-xl font-bold mb-2'>
											{item.title}
										</h3>
										<p className='text-gray-300 leading-relaxed'>
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>

						<div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8'>
							<h3 className='text-2xl font-bold mb-6 text-center'>
								Launch Timeline
							</h3>
							<div className='space-y-6'>
								{[
									{
										phase: "Q1 2025",
										status: "MVP Launch",
										desc: "Core 5 modules live",
									},
									{
										phase: "Q2 2025",
										status: "Scale Up",
										desc: "Advanced HR operations",
									},
									{
										phase: "Q3 2025",
										status: "AI Integration",
										desc: "Smart insights & automation",
									},
									{
										phase: "Q4 2025",
										status: "Enterprise Ready",
										desc: "Multi-org & white-label",
									},
								].map((timeline, index) => (
									<div
										key={index}
										className='flex items-center justify-between p-4 bg-white/5 rounded-xl'
									>
										<div>
											<div className='font-bold'>
												{timeline.phase}
											</div>
											<div className='text-sm text-gray-400'>
												{timeline.desc}
											</div>
										</div>
										<div className='px-3 py-1 bg-white/20 rounded-full text-sm font-medium'>
											{timeline.status}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Final CTA Section */}
			<div className='relative py-20'>
				<div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12'>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Ready to Transform Your HR?
						</h2>
						<p className='text-xl text-gray-300 mb-8 leading-relaxed'>
							Join thousands of forward-thinking African businesses
							preparing for the future of workforce management. Get
							early access, exclusive updates, and founder pricing.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
							<a
								href={formLink}
								className='inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl'
							>
								Join Waitlist — It's Free
								<span className='ml-2'>→</span>
							</a>
							<button className='inline-flex items-center justify-center px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm'>
								Schedule Demo
								{/* <span className='ml-2'>📅</span> */}
							</button>
						</div>

						<div className='flex items-center justify-center space-x-8 text-sm text-gray-400'>
							<div className='flex items-center'>
								<Icon icon='mdi:check-circle' className='mr-2' />
								No Credit Card Required
							</div>
							<div className='flex items-center'>
								<Icon icon='mdi:check-circle' className='mr-2' />
								Early Access Guaranteed
							</div>
							<div className='flex items-center'>
								<Icon icon='mdi:check-circle' className='mr-2' />
								Founder Pricing
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
