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
			name: "Lino Müller",
			position: "Property Owner",
			company: "Buena Landlord",
			quote:
				"I've been a Buena landlord for 4 years with 5 apartments rented and managed through their service. The peace of mind they provide is invaluable.",
			image:
				"/generated/image-a-professional-man-in-a-modern-office-se.webp"
		},
		{
			name: "Julia Dreher",
			position: "Tenant",
			company: "Buena Tenant",
			quote:
				"The efficiency of Buena's rental process is incredible. I viewed an apartment on Monday and signed the contract on Thursday.",
			image:
				"/generated/image-a-professional-woman-in-a-sleek-modern-h.webp"
		},
		{
			name: "Klaus Weber",
			position: "Building Owner",
			company: "Property Investor",
			quote:
				"Their comprehensive building management service handles everything from tenant care to emergency measures. I can focus on growing my portfolio.",
			image:
				"/generated/image-a-hispanic-man-with-a-friendly-and-appro.webp"
		}
	]}
/>

<CallToAction />
