<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import Hero from "$lib/components/layout/hero-sections/Hero.svelte";
	import UseCases from "$lib/components/layout/UseCases.svelte";
</script>

<Hero
	title="Turn your property into effortless income"
	subtitle="Effortless income from your property"
	imageSrc="/generated/image-a-modern-residential-home-with-a-cozy-in.webp"
	centered={false}
/>
<LogoScroller 
	label="Trusted by homeowners from leading real estate platforms"
	logoUrls={[
		'https://logo.clearbit.com/zillow.com',
		'https://logo.clearbit.com/redfin.com',
		'https://logo.clearbit.com/realtor.com',
		'https://logo.clearbit.com/apartments.com'
	]}
/>

<Summary
	title="What we do"
	text="We provide comprehensive property management services that handle everything from tenant placement to maintenance and legal compliance. Our hands-off approach allows homeowners to enjoy profitable rental income without the daily hassles of being a landlord."
/>

<Testimonials
	testimonials={[
		{
			name: "Anastasia Rodriguez",
			position: "Marketing Executive",
			company: "Homeowner",
			quote:
				"Before Buena, I spent 15+ hours per week dealing with tenant calls, maintenance requests, and rent collection. Now I have my weekends back and my rental income is more consistent than ever.",
			image:
				"/generated/image-a-professional-woman-in-a-sleek-modern-h.webp"
		},
		{
			name: "Theodore Mitchell",
			position: "Investment Advisor",
			company: "Homeowner",
			quote:
				"I was terrified of legal issues and problem tenants when I first became a landlord. Their expert team handles all compliance and tenant screening, giving me complete peace of mind. I sleep well knowing my investment is protected.",
			image:
				"/generated/image-a-businessman-sitting-comfortably-in-a-c.webp"
		},
		{
			name: "Valencia Chen",
			position: "Software Engineer",
			company: "Homeowner",
			quote:
				"My rental income increased by 23% in the first year with their professional management. Their market knowledge, efficient maintenance, and tenant retention strategies have significantly boosted my property's profitability.",
			image:
				"/generated/image-a-young-professional-woman-relaxing-in-a.webp"
		}
	]}
/>

<Features
	title="Your property, our expertise"
	subtitle="Comprehensive services that handle every aspect of rental management"
	features={[
		{
			title: "Expert tenant placement",
			description:
				"We find and screen qualified tenants through rigorous background checks, credit verification, and rental history analysis to ensure reliable, long-term occupancy."
		},
		{
			title: "Seamless rent collection",
			description:
				"Our automated system handles all rent collection, late payments, and financial reporting so you receive consistent income without the hassle."
		},
		{
			title: "Complete property maintenance",
			description:
				"From routine upkeep to emergency repairs, we coordinate with trusted contractors to maintain your property's condition and protect your investment value."
		}
	]}
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications for your property management needs"
	useCases={[
		{
			title: "First-time landlords get expert guidance",
			description: "New to rental property? Our comprehensive onboarding process guides you through tenant screening, lease agreements, and legal compliance. We handle the complexity so you can focus on building your investment portfolio with confidence.",
			image: "/generated/image-a-homeowner-sitting-at-a-wooden-table-su.webp",
			link: {
				href: "/use-cases/first-time-landlords",
				label: "Learn more"
			}
		},
		{
			title: "Professional maintenance preserves your investment",
			description: "From routine upkeep to emergency repairs, our trusted contractor network ensures your property stays in excellent condition. We coordinate all maintenance activities, protecting your investment value while keeping tenants satisfied.",
			image: "/generated/image-a-diverse-team-of-property-maintenance-w.webp",
			link: {
				href: "/use-cases/property-maintenance",
				label: "Learn more"
			}
		},
		{
			title: "Quality tenants for long-term success",
			description: "Our rigorous screening process includes background checks, credit verification, and rental history analysis to find reliable tenants. We match your property with families who will treat it as their home, ensuring consistent income and minimal turnover.",
			image: "/generated/image-a-joyful-family-of-four-including-parent.webp",
			link: {
				href: "/use-cases/quality-tenant-placement",
				label: "Learn more"
			}
		}
	]}
/>

<AboutTeaser />
<CallToAction />
