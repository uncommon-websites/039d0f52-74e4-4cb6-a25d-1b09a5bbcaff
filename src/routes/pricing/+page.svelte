<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
	testimonials={[
		{
			name: "Casey Lim",
			position: "Product Designer",
			company: "Timewell",
			quote:
				"I moved across the country and didn't have time to manage tenants. These folks made it completely smooth—I don't even think about my rental anymore.",
			image:
				"/generated/image-a-confident-asian-woman-with-a-professio.webp"
		},
		{
			name: "Ava Sandhu",
			position: "Software Engineer",
			company: "Kepler Systems",
			quote:
				"As a first-time landlord, I had no idea where to start. They walked me through everything and found great tenants in less than two weeks.",
			image:
				"/generated/image-a-south-asian-woman-with-a-warm-inviting.webp"
		},
		{
			name: "Damon Ortega",
			position: "Real Estate Investor",
			company: "Ortega Property Group",
			quote:
				"They handle every issue with professionalism and speed. Payments just show up in my account. That's exactly what I wanted.",
			image:
				"/generated/image-a-hispanic-man-with-a-friendly-and-appro.webp"
		}
	]}
/>

<CallToAction />
