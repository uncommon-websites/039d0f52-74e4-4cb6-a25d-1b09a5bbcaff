<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	// import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CustomerCardHero from "$lib/components/layout/hero-sections/CustomerCardHero.svelte";
	import UseCases from "$lib/components/layout/UseCases.svelte";
</script>

<CustomerCardHero
	title="Property management made simple"
	customers={[
		{
			name: "Lino Müller",
			position: "Property Owner",
			imageSrc: "/generated/image-a-professional-middle-aged-german-man-st.webp"
		},
		{
			name: "Julia Dreher",
			position: "Tenant",
			imageSrc: "/generated/image-a-professional-woman-in-a-sleek-modern-h.webp"
		},
		{
			name: "Matthias Weber",
			position: "Investment Advisor",
			imageSrc: "/generated/image-a-businessman-sitting-comfortably-in-a-c.webp"
		}
	]}
/>
<LogoScroller 
	label="Properties advertised on Germany's leading rental platforms"
	logoUrls={[
		'https://logo.clearbit.com/immobilienscout24.de',
		'https://logo.clearbit.com/immowelt.de',
		'https://logo.clearbit.com/wg-gesucht.de',
		'https://logo.clearbit.com/immonet.de'
	]}
/>

<Summary
	title="What we do"
	text="Buena GmbH is a comprehensive property management company that handles all aspects of rental property administration for landlords throughout Germany. We provide end-to-end services including tenant acquisition, property maintenance, rent collection, legal services, and administrative tasks, allowing property owners to focus on their investment strategy rather than operational complexities."
/>

<!-- Testimonials removed - now using CustomerCardHero instead -->

<Features
	title="Three service tiers for every property owner"
	subtitle="Professional property management solutions tailored to your specific needs"
	features={[
		{
			title: "Single unit management",
			description:
				"Perfect for individual apartment owners. Includes tenant placement, rent collection, maintenance coordination, legal services, and comprehensive administrative support for your investment property."
		},
		{
			title: "Entire building management",
			description:
				"Ideal for sole owners of multi-apartment buildings. All single unit services plus service provider management, emergency response measures, and comprehensive building administration."
		},
		{
			title: "Shared building management",
			description:
				"Specialized WEG administration for co-owners of multi-party buildings. Includes owners' meetings, annual financial plans, accounting services, and coordinated maintenance management."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="How Buena transforms property ownership across Germany"
	useCases={[
		{
			title: "Retirement investment made simple",
			description: "Property owners shouldn't have to become professionals in rental, marketing, and administration just to prepare for retirement. Buena handles all operational complexities while you focus on your investment strategy and enjoy consistent monthly income.",
			image: "/generated/image-a-homeowner-sitting-at-a-wooden-table-su.webp",
			link: {
				href: "/use-cases/retirement-investment",
				label: "Learn more"
			}
		},
		{
			title: "Professional tenant acquisition",
			description: "We advertise your properties on ImmobilienScout24 and Immowelt, conduct professional photography, coordinate viewings, verify tenant identities, and handle complete contract processing to find reliable, long-term tenants.",
			image: "/generated/image-a-diverse-team-of-property-maintenance-w.webp",
			link: {
				href: "/use-cases/tenant-acquisition",
				label: "Learn more"
			}
		},
		{
			title: "Comprehensive legal compliance",
			description: "Our licensed property management services under § 34c Abs. 1 GewO ensure full legal compliance, supervised by Bezirksamt Mitte von Berlin. We handle all regulatory requirements so you can invest with confidence.",
			image: "/generated/image-a-joyful-family-of-four-including-parent.webp",
			link: {
				href: "/use-cases/legal-compliance",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction />
