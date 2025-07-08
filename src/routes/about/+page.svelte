<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Reliability",
			description: "Consistent, dependable service that homeowners can count on, from tenant screening to maintenance response."
		},
		{
			title: "Transparency",
			description: "Clear communication and detailed reporting so property owners always know what's happening with their investment."
		},
		{
			title: "Expertise",
			description: "Deep knowledge of property management, tenant relations, and housing regulations to protect your investment."
		}
	];
</script>

<SecondaryHero
	title="Transforming property ownership"
	subtitle="into hassle-free investments"
	imageSrc="/generated/image-a-diverse-team-of-property-management-pr.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"We founded Property Management for Homeowners after witnessing countless homeowners struggle with the complexities of being a landlord. What started as a simple conversation with a neighbor who was overwhelmed by tenant screening and maintenance requests grew into a mission to transform property ownership into a truly passive investment.",
		"Our approach centers on comprehensive service that covers every aspect of property management, from finding reliable tenants to handling legal compliance. We believe homeowners should focus on building wealth, not dealing with late-night repair calls or navigating complex housing regulations.",
		"Today, we help homeowners across the region turn their properties into profitable, hassle-free investments. By combining thorough tenant screening, proactive maintenance, and expert legal guidance, we've created a service that lets property owners sleep well at night knowing their investment is in capable hands."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- Team and Investors sections removed - no real data available for Property Management for Homeowners -->

<!-- CTA Section -->
<CallToAction
	title="Ready to turn your property into passive income?"
	subtitle="Let's get started today"
	description="Join hundreds of homeowners who've transformed their properties into profitable, hassle-free investments with our comprehensive property management services."
/>
