import { formLink } from "@/utils/data";
import Link from "next/link";
const Roadmap = () => {
	const roadmapData = [
		{
			phase: "P1",
			period: "Q2 2025 - MVP Launch",
			status: "current",
			title: "Foundation & Core Features",
			description:
				"Building the essential HR infrastructure that African businesses need most.",
			features: [
				"Organization & User Onboarding",
				"Employee Data Management",
				"Basic Payroll System",
				"Document Management",
				"Admin Control Center",
			],
			milestone: "Start with 5 core modules",
		},
		{
			phase: "P2",
			period: "Q3 2025 - Scale Up",
			status: "upcoming",
			title: "Advanced HR Operations",
			description:
				"Expanding capabilities with sophisticated workforce management tools.",
			features: [
				"KPI & Performance Tracking",
				"HR Letters System",
				"Leave & Absence Management",
				"Real-time Notifications",
				"Enhanced Reporting",
			],
			milestone: "10+ feature modules",
		},
		{
			phase: "P3",
			period: "Q4 2025 - Enhancement",
			status: "planned",
			title: "Innovation & Automation",
			description:
				"Introducing cutting-edge features that set us apart from competitors.",
			features: [
				"AI-Powered KPI Insights",
				"ID Card Generator",
				"Bulk Operations Suite",
				"Advanced Analytics Dashboard",
				"Mobile App Launch",
			],
			milestone: "13+ features with AI integration",
		},
		{
			phase: "P4",
			period: "Q1 2026 - Enterprise",
			status: "future",
			title: "Enterprise & Scale",
			description:
				"Preparing for large-scale adoption across African enterprises.",
			features: [
				"Multi-org Dashboard",
				"Government Integration APIs",
				"Advanced Security & Compliance",
				"White-label Solutions",
				"Enterprise Support Tier",
			],
			milestone: "Enterprise-ready platform",
		},
	];

	const getStatusColor = (status : string) => {
		switch (status) {
			case "current":
				return "bg-white text-black";
			case "upcoming":
				return "bg-white/20 text-white border border-white/30";
			case "planned":
				return "bg-white/10 text-white/70 border border-white/20";
			case "future":
				return "bg-white/5 text-white/50 border border-white/10";
			default:
				return "bg-white/10 text-white/70";
		}
	};

	return (
		<div className='min-h-screen bg-black text-white relative overflow-hidden'>
			{/* Background Elements */}
			<div className='absolute inset-0 opacity-3'>
				<div className='absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl'></div>
				<div className='absolute bottom-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl'></div>
			</div>

			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
				{/* Header */}
				<div className='text-center mb-20'>
					<div className='inline-flex items-center px-6 py-3 bg-white/10 border border-white/20 rounded-full text-sm font-medium backdrop-blur-sm mb-8'>
						<span className='w-2 h-2 bg-white rounded-full mr-3 animate-pulse'></span>
						Development Roadmap 2025
					</div>

					<h1 className='text-4xl md:text-6xl font-black mb-6 leading-tight'>
						OUR JOURNEY TO
						<br />
						<span className='text-white/70'>AFRICA'S HR BRAIN</span>
					</h1>

					<div className='w-32 h-1 bg-white mx-auto mb-8'></div>

					<p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
						A transparent look at how we're building the most
						comprehensive HR solution for African businesses, one
						milestone at a time.
					</p>
				</div>

				{/* Timeline */}
				<div className='relative'>
					{/* Vertical Line */}
					<div className='absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 transform md:-translate-x-0.5'></div>

					<div className='space-y-16'>
						{roadmapData.map((phase, index) => (
							<div key={index} className='relative'>
								{/* Timeline Dot */}
								<div
									className={`absolute left-0 md:left-1/2 w-8 h-8 rounded-full transform md:-translate-x-4 z-10 flex items-center justify-center ${
										phase.status === "current"
											? "bg-white"
											: phase.status === "upcoming"
											? "bg-white/60"
											: phase.status === "planned"
											? "bg-white/30"
											: "bg-white/10"
									}`}
								>
									<div
										className={`w-3 h-3 rounded-full ${
											phase.status === "current"
												? "bg-black"
												: "bg-white"
										}`}
									></div>
								</div>

								{/* Content Card */}
								<div
									className={`ml-16 md:ml-0 ${
										index % 2 === 0
											? "md:pr-8 md:text-right"
											: "md:pl-8 md:ml-auto"
									} md:w-1/2`}
								>
									<div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300'>
										{/* Phase Header */}
										<div className='flex items-center justify-between mb-6'>
											<div
												className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(
													phase.status
												)}`}
											>
												{phase.phase}
											</div>
											<span className='text-sm text-gray-400'>
												{phase.period}
											</span>
										</div>

										{/* Title & Description */}
										<h3 className='text-2xl font-bold mb-4'>
											{phase.title}
										</h3>
										<p className='text-gray-300 mb-6 leading-relaxed'>
											{phase.description}
										</p>

										{/* Features Grid */}
										<div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6'>
											{phase.features.map((feature, featureIndex) => (
												<div
													key={featureIndex}
													className='bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm'
												>
													{feature}
												</div>
											))}
										</div>

										{/* Milestone */}
										<div className='border-t border-white/10 pt-4'>
											<div className='flex items-center justify-between'>
												<span className='text-sm text-gray-400'>
													Milestone:
												</span>
												<span className='text-sm font-semibold'>
													{phase.milestone}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Key Metrics Section */}
				<div className='mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							Roadmap Metrics
						</h2>
						<div className='w-24 h-1 bg-white mx-auto mb-6'></div>
						<p className='text-gray-300'>
							Key targets we're working towards in 2025
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{[
							{
								number: "13+",
								label: "Core Features",
								description: "Complete HR suite",
							},
							{
								number: "1000+",
								label: "Organizations",
								description: "Target by Q4 2025",
							},
							{
								number: "50K+",
								label: "Employees",
								description: "Managed on platform",
							},
							{
								number: "99.9%",
								label: "Uptime",
								description: "Enterprise reliability",
							},
						].map((metric, index) => (
							<div key={index} className='text-center space-y-3'>
								<div className='text-4xl font-black text-white'>
									{metric.number}
								</div>
								<div className='text-lg font-semibold'>
									{metric.label}
								</div>
								<div className='text-sm text-gray-400'>
									{metric.description}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Technology Stack Preview */}
				<div className='mt-20'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4'>
							Powered By Modern Tech
						</h2>
						<div className='w-24 h-1 bg-white mx-auto mb-6'></div>
						<p className='text-gray-300'>
							Our carefully chosen technology stack for maximum
							performance
						</p>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
						{[
							{ name: "React", category: "Frontend" },
							{ name: "Node.js", category: "Backend" },
							{ name: "MongoDB", category: "Database" },
							{ name: "Paystack", category: "Payments" },
							{ name: "Cloudinary", category: "Storage" },
							{ name: "Socket.IO", category: "Real-time" },
						].map((tech, index) => (
							<div
								key={index}
								className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300'
							>
								<div className='text-sm font-bold mb-1'>
									{tech.name}
								</div>
								<div className='text-xs text-gray-400'>
									{tech.category}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* CTA Section */}
				<div className='mt-20 text-center'>
					<div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12'>
						<h2 className='text-3xl font-bold mb-6'>
							Be Part of the Journey
						</h2>
						<p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
							Join our waitlist to get early access as we build
							Africa's most comprehensive HR platform, feature by
							feature, milestone by milestone.
						</p>
					<Link href={formLink} target="_blank">
							<button className='inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-2xl'>
								Join the Waitlist
								<span className='ml-2'>→</span>
							</button>
					</Link>
					</div>
				</div>
			</div>

			{/* Bottom Line */}
			<div className='absolute bottom-0 left-0 w-full h-1 bg-white'></div>
		</div>
	);
};

export default Roadmap;
