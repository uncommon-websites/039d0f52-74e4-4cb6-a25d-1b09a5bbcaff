// Types
import type { PageLoad } from "./$types";
import type { ComponentType } from "svelte";

// Icons
import IconUsers from "$lib/components/icons/Users.svelte";
import IconShield from "$lib/components/icons/Shield.svelte";
import IconZap from "$lib/components/icons/Zap.svelte";

// Use cases can be considered industries depending on the company.
// Types
type UseCase = {
	meta: {
		title: string;
		description: string;
	};
	hero: {
		title: string;
		subtitle: string;
		imageSrc: string;
		callsToAction: Array<{
			href: string;
			label: string;
		}>;
	};
	summary: {
		title: string;
		text: string;
	};
	testimonials: Array<{
		quote: string;
		name: string;
		position: string;
		company: string;
		image: string;
	}>;
	features: {
		title: string;
		subtitle: string;
		items: Array<{
			title: string;
			description: string;
			icon: ComponentType;
		}>;
	};
	cta: {
		title: string;
		subtitle: string;
		imageSrc: string;
		description: string;
		callsToAction: Array<{
			href: string;
			label: string;
			variant?: "primary" | "secondary" | "ghost";
		}>;
	};
};

// Constants
const healthcareUseCase: UseCase = {
	meta: {
		title: "Healthcare",
		description: "Healthcare solutions for providers and organizations"
	},
	hero: {
		title: "Healthcare Innovation Platform",
		subtitle: "Empowering providers to deliver better patient care",
		imageSrc:
			"https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1920&auto=format&fit=crop",
		callsToAction: [
			{ href: "/demo", label: "Get Started" },
			{ href: "#features", label: "Learn More" }
		]
	},
	summary: {
		title: "Transforming Healthcare Delivery",
		text: "Our platform helps healthcare providers improve patient outcomes, streamline operations, and ensure compliance while reducing administrative burden on clinical staff."
	},
	testimonials: [
		{
			quote: "This solution has revolutionized how we manage patient data and care coordination.",
			name: "Dr. Sarah Williams",
			position: "Chief Medical Officer",
			company: "Metro Health",
			image: "/images/testimonials/sarah-williams.jpg"
		},
		{
			quote: "We've seen a 30% reduction in administrative tasks since implementation.",
			name: "Robert Chen",
			position: "Healthcare Administrator",
			company: "Community Care",
			image: "/images/testimonials/robert-chen.jpg"
		}
	],
	features: {
		title: "Healthcare Solutions That Make a Difference",
		subtitle: "Purpose-built for modern healthcare challenges",
		items: [
			{
				title: "Patient Engagement",
				description: "Connect with patients through secure messaging and telehealth integration",
				icon: IconUsers
			},
			{
				title: "Clinical Workflows",
				description: "Streamline documentation and clinical processes for improved efficiency",
				icon: IconZap
			},
			{
				title: "Data Analytics",
				description: "Gain insights from healthcare data to improve quality measures",
				icon: IconZap
			},
			{
				title: "Compliance Management",
				description: "Stay compliant with HIPAA, HITECH and other healthcare regulations",
				icon: IconShield
			}
		]
	},

	cta: {
		title: "Elevate Your Healthcare Practice",
		subtitle: "Join leading healthcare organizations using our platform",
		imageSrc:
			"https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1920&auto=format&fit=crop",
		description:
			"Schedule a consultation to see how we can help you improve patient care and operational efficiency.",
		callsToAction: [
			{ href: "/get-started", label: "Get Started", variant: "primary" },
			{ href: "/contact", label: "Talk to Sales", variant: "secondary" }
		]
	}
};

const financeUseCase: UseCase = {
	meta: {
		title: "Finance",
		description: "Financial solutions for institutions and businesses"
	},
	hero: {
		title: "Financial Intelligence Platform",
		subtitle: "Empowering financial decisions with data-driven insights",
		imageSrc:
			"https://images.unsplash.com/photo-1638913662180-afc4334cf422?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		callsToAction: [
			{ href: "/demo", label: "Get Started" },
			{ href: "#features", label: "Learn More" }
		]
	},
	summary: {
		title: "Revolutionizing Financial Services",
		text: "Our platform enables financial institutions to enhance customer experiences, automate compliance processes, and leverage AI for better risk assessment and investment strategies."
	},
	testimonials: [
		{
			quote:
				"This platform has transformed our risk management approach and increased our efficiency by 50%.",
			name: "James Wilson",
			position: "CTO",
			company: "Global Investments",
			image: "/images/testimonials/james-wilson.jpg"
		},
		{
			quote: "The predictive analytics have given us a competitive edge in market analysis.",
			name: "Linda Chang",
			position: "Head of Trading",
			company: "Apex Capital",
			image: "/images/testimonials/linda-chang.jpg"
		}
	],
	features: {
		title: "Powerful Financial Tools",
		subtitle: "Comprehensive solutions for modern financial challenges",
		items: [
			{
				title: "Risk Assessment",
				description: "Advanced analytics to identify and mitigate potential risks",
				icon: IconZap
			},
			{
				title: "Fraud Detection",
				description: "AI-powered systems to detect unusual patterns and prevent fraud",
				icon: IconShield
			},
			{
				title: "Investment Analysis",
				description: "Data-driven insights for portfolio management and optimization",
				icon: IconZap
			},
			{
				title: "Regulatory Compliance",
				description: "Automated tools to ensure adherence to financial regulations",
				icon: IconShield
			}
		]
	},

	cta: {
		title: "Transform Your Financial Services",
		subtitle: "Join leading financial institutions already using our platform",
		imageSrc:
			"https://images.unsplash.com/photo-1638913662180-afc4334cf422?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description:
			"Schedule a demo to see how we can help you improve efficiency and customer satisfaction.",
		callsToAction: [
			{ href: "/demo", label: "Request Demo", variant: "primary" },
			{ href: "/pricing", label: "View Solutions", variant: "secondary" }
		]
	}
};

const technologyUseCase: UseCase = {
	meta: {
		title: "Technology",
		description: "Tech solutions for companies of all sizes"
	},
	hero: {
		title: "Technology Innovation Hub",
		subtitle: "Accelerate your digital transformation journey",
		imageSrc:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		callsToAction: [
			{ href: "/demo", label: "Get Started" },
			{ href: "#features", label: "Explore Features" }
		]
	},
	summary: {
		title: "Powering Tech Innovation",
		text: "Our platform helps technology companies streamline development workflows, improve collaboration, and deliver products faster with integrated DevOps tools and AI-powered insights."
	},
	testimonials: [
		{
			quote:
				"This solution has cut our development cycle by 35% and improved code quality significantly.",
			name: "Alex Rivera",
			position: "CTO",
			company: "FutureTech",
			image: "/images/testimonials/alex-rivera.jpg"
		},
		{
			quote:
				"The automated testing and deployment features have revolutionized our release process.",
			name: "Priya Sharma",
			position: "VP of Engineering",
			company: "CodeInnovate",
			image: "/images/testimonials/priya-sharma.jpg"
		}
	],
	features: {
		title: "Technology Solutions for Modern Teams",
		subtitle: "Tools designed for today's development challenges",
		items: [
			{
				title: "DevOps Integration",
				description: "Seamlessly connect your development and operations workflows",
				icon: IconZap
			},
			{
				title: "AI-Assisted Development",
				description: "Leverage machine learning for code suggestions and bug detection",
				icon: IconZap
			},
			{
				title: "Collaboration Tools",
				description: "Foster teamwork with real-time communication and sharing features",
				icon: IconUsers
			},
			{
				title: "Performance Monitoring",
				description: "Track application performance and identify optimization opportunities",
				icon: IconZap
			}
		]
	},

	cta: {
		title: "Elevate Your Tech Company",
		subtitle: "Join innovative technology companies using our platform",
		imageSrc:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "See how our solutions can help you build better products faster.",
		callsToAction: [
			{ href: "/demo", label: "Schedule Demo", variant: "primary" },
			{ href: "/resources", label: "View Resources", variant: "secondary" }
		]
	}
};

const educationUseCase: UseCase = {
	meta: {
		title: "Education",
		description: "Educational solutions for institutions of all levels"
	},
	hero: {
		title: "Education Transformation Platform",
		subtitle: "Empowering educators and students in the digital age",
		imageSrc:
			"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		callsToAction: [
			{ href: "/demo", label: "Get Started" },
			{ href: "#features", label: "Learn More" }
		]
	},
	summary: {
		title: "Reimagining Education",
		text: "Our platform helps educational institutions create engaging learning experiences, streamline administrative tasks, and leverage data analytics to improve student outcomes and educator effectiveness."
	},
	testimonials: [
		{
			quote:
				"This platform has transformed how we deliver curriculum and engage with our students.",
			name: "Dr. Emily Rodriguez",
			position: "Superintendent",
			company: "Westview School District",
			image: "/images/testimonials/emily-rodriguez.jpg"
		},
		{
			quote:
				"The analytics capabilities have helped us identify at-risk students and intervene earlier.",
			name: "Professor Thomas Lee",
			position: "Dean of Students",
			company: "Horizon University",
			image: "/images/testimonials/thomas-lee.jpg"
		}
	],
	features: {
		title: "Educational Tools for Modern Learning",
		subtitle: "Comprehensive solutions for today's educational challenges",
		items: [
			{
				title: "Interactive Learning",
				description: "Create engaging content that adapts to individual student needs",
				icon: IconZap
			},
			{
				title: "Assessment Tools",
				description: "Measure learning outcomes with diverse evaluation methods",
				icon: IconShield
			},
			{
				title: "Student Analytics",
				description: "Track progress and identify opportunities for intervention",
				icon: IconZap
			},
			{
				title: "Administrative Automation",
				description: "Streamline operations from enrollment to grade management",
				icon: IconZap
			}
		]
	},

	cta: {
		title: "Transform Your Educational Institution",
		subtitle: "Join leading schools and universities using our platform",
		imageSrc:
			"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description:
			"Schedule a demo to see how we can help improve learning outcomes and institutional efficiency.",
		callsToAction: [
			{ href: "/demo", label: "Request Demo", variant: "primary" },
			{ href: "/case-studies", label: "View Case Studies", variant: "secondary" }
		]
	}
};

const useCases: Record<string, UseCase> = {
	healthcare: healthcareUseCase,
	finance: financeUseCase,
	technology: technologyUseCase,
	education: educationUseCase
};

export const load: PageLoad = async ({ params }) => {
	const { usecase } = params;

	if (!usecase || !(usecase in useCases)) {
		return {
			meta: {
				title: "Use Case",
				description: "Learn how our platform can help your industry",
				image: "",
				url: ""
			}
		};
	}

	return useCases[usecase as keyof typeof useCases] ?? healthcareUseCase;
};