<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "$lib/components/icons/Briefcase.svelte";
	import IconUsers from "$lib/components/icons/Users.svelte";
	import IconHeart from "$lib/components/icons/Heart.svelte";
	import IconGlobe from "$lib/components/icons/Globe.svelte";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Industry Impact",
			description: "Shape the future of property management while helping homeowners build wealth through real estate investments.",
			icon: IconBriefcase
		},
		{
			title: "Career Growth",
			description: "Advance your career in the thriving property management industry with mentorship, training, and clear promotion pathways.",
			icon: IconUsers
		},
		{
			title: "Complete Benefits Package",
			description: "Comprehensive health coverage, retirement matching, flexible PTO, and professional development opportunities.",
			icon: IconHeart
		}
	];

	const openings: JobOpening[] = [
		// Property Management
		{
			title: "Property Manager",
			department: "Property Management",
			location: "On-site",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Assistant Property Manager",
			department: "Property Management",
			location: "On-site",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Maintenance Coordinator",
			department: "Property Management",
			location: "On-site",
			type: "Full-time",
			url: "#"
		},

		// Leasing
		{
			title: "Leasing Agent",
			department: "Leasing",
			location: "On-site",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Tenant Relations Specialist",
			department: "Leasing",
			location: "On-site",
			type: "Full-time",
			url: "#"
		},

		// Operations
		{
			title: "Operations Manager",
			department: "Operations",
			location: "Hybrid",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Financial Analyst",
			department: "Operations",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Business Development
		{
			title: "Business Development Manager",
			department: "Business Development",
			location: "Hybrid",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Client Relations Manager",
			department: "Business Development",
			location: "Hybrid",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Marketing Coordinator",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
		{
			name: "Sarah Mitchell",
			position: "Senior Property Manager",
			company: "Property Management Team",
			quote:
				"I love helping homeowners achieve their investment goals while building lasting relationships with tenants. The company provides excellent training and growth opportunities.",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "David Rodriguez",
			position: "Leasing Agent",
			company: "Leasing Team",
			quote:
				"Every day brings new challenges and opportunities to help homeowners find quality tenants. The supportive team environment makes it easy to succeed and grow.",
			image:
				"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		},
		{
			name: "Jennifer Kim",
			position: "Operations Manager",
			company: "Operations Team",
			quote:
				"I've been here for four years and have advanced from assistant to manager. The leadership invests in employee development and the property management industry offers great career stability.",
			image:
				"https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Apply Online",
			description:
				"Submit your application through our careers portal with your resume and cover letter explaining your interest in property management."
		},
		{
			step: 2,
			title: "Interview Process",
			description: "Complete a phone screening followed by an in-person or video interview with our hiring team to discuss your experience and fit for the role."
		},
		{
			step: 3,
			title: "Join Our Team",
			description: "Complete onboarding and training to become an expert in property management services for homeowners."
		}
	];

	const values = [
		{
			icon: IconHeart,
			title: "Homeowner-First",
			description: "We're passionate about helping homeowners succeed with their rental investments and build long-term wealth."
		},
		{
			icon: IconUsers,
			title: "Trust & Reliability",
			description: "We build lasting relationships through transparency, consistent communication, and dependable service delivery."
		},
		{
			icon: IconGlobe,
			title: "Excellence in Service",
			description: "We're committed to providing exceptional property management services that exceed expectations every day."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Build your career in property management"
	subtitle="Join a team that's transforming how homeowners manage their rental properties. We're looking for passionate professionals who want to make a real difference in people's lives while growing their careers in a supportive, collaborative environment."
	imageSrc="/generated/image-a-diverse-group-of-professionals-engaged.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career in property management while helping homeowners succeed" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>
