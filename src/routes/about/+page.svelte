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
			title: "Professional licensing",
			description: "Licensed under § 34c Abs. 1 GewO for property management services, supervised by Bezirksamt Mitte von Berlin, and member of IHK Berlin."
		},
		{
			title: "Comprehensive service",
			description: "From tenant acquisition and property maintenance to legal services and administrative tasks - we handle every aspect of rental property management."
		},
		{
			title: "Nationwide coverage",
			description: "Operating across all of Germany with teams in major cities, ensuring consistent service quality regardless of your property location."
		}
	];
</script>

<SecondaryHero
	title="Professional property management"
	subtitle="across Germany since our founding"
	imageSrc="/generated/image-a-diverse-team-of-property-management-pr.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"Buena GmbH was founded with a clear mission: property ownership should be simple, and nobody should have to become a professional in rental, marketing, and administration just to prepare for retirement. We recognized that property ownership often becomes time-intensive, non-transparent, and costly, causing owners to forget why they acquired property in the first place.",
		"Our comprehensive approach encompasses three distinct service tiers: single unit management for individual apartment owners, entire building management for sole building owners, and specialized WEG administration for co-owners of multi-party buildings. Each service is designed to address the specific needs of different property ownership structures.",
		"Today, we operate across all of Germany from our headquarters in Berlin, with teams in Leipzig, Munich, Frankfurt am Main, Cologne, Hamburg, and Stuttgart. Licensed under § 34c Abs. 1 GewO and supervised by Bezirksamt Mitte von Berlin, we provide professional property management services that allow property owners to focus on their investment strategy rather than operational complexities."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- Team and Investors sections removed - no real data available for Buena -->

<!-- CTA Section -->
<CallToAction
	title="Professional property management you can trust"
	subtitle="Licensed, regulated, and nationwide"
	description="Join property owners across Germany who trust Buena GmbH for comprehensive rental property administration. Contact our team at +49 30 88789123 or info@buena.com to learn how we can help you focus on your investment strategy while we handle the operational complexities."
/>
