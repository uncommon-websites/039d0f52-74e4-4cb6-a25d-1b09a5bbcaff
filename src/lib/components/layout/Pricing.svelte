<!--
@component Pricing

Please update features according to the company's product offering. Do not remove this comment.
-->
<script lang="ts">
	// Types
	type PricingTier = {
		name: string;
		monthlyPrice?: number | null;
		yearlyPrice?: number | null;
		description: string;
		features: string[];
		cta: {
			label: string;
			href: string;
		};
		highlight?: boolean;
	};

	type PricingFeature = {
		name: string;
		tiers: {
			[key: string]: boolean | string;
		};
	};

	// Components
	import Button from "$lib/components/ui/Button.svelte";
	import SectionHeader from "./SectionHeader.svelte";
	import IconCheck from "$lib/components/icons/Check.svelte";
	import IconX from "$lib/components/icons/X.svelte";
	import NumberFlow from "@number-flow/svelte";
	import LogoScroller from "./LogoScroller.svelte";

	// Props
	const {
		title = "Professional property management services",
		subtitle = "Three service tiers tailored to your property ownership structure",
		tierNames = ["Single Unit", "Entire Building", "Shared Building"],
		features = [
			{
				name: "Property type",
				tiers: {
					"Single Unit": "Individual apartments",
					"Entire Building": "Multi-apartment buildings",
					"Shared Building": "Co-owned buildings (WEG)"
				}
			},
			{
				name: "Tenant acquisition",
				tiers: {
					"Single Unit": true,
					"Entire Building": true,
					"Shared Building": true
				}
			},
			{
				name: "Rent collection monitoring",
				tiers: {
					"Single Unit": true,
					"Entire Building": true,
					"Shared Building": true
				}
			},
			{
				name: "Property maintenance",
				tiers: {
					"Single Unit": true,
					"Entire Building": true,
					"Shared Building": true
				}
			},
			{
				name: "Legal services",
				tiers: {
					"Single Unit": true,
					"Entire Building": true,
					"Shared Building": true
				}
			},
			{
				name: "Utility billing management",
				tiers: {
					"Single Unit": true,
					"Entire Building": true,
					"Shared Building": false
				}
			},
			{
				name: "Service provider management",
				tiers: {
					"Single Unit": false,
					"Entire Building": true,
					"Shared Building": true
				}
			},
			{
				name: "Emergency measures",
				tiers: {
					"Single Unit": false,
					"Entire Building": true,
					"Shared Building": true
				}
			},
			{
				name: "Owners' meetings",
				tiers: {
					"Single Unit": false,
					"Entire Building": false,
					"Shared Building": true
				}
			},
			{
				name: "Annual financial plans",
				tiers: {
					"Single Unit": false,
					"Entire Building": false,
					"Shared Building": true
				}
			}
		],
		tiers = [
			{
				name: "Single Unit Management",
				monthlyPrice: null,
				yearlyPrice: null,
				description: "Sondereigentumsverwaltung - For individual apartment owners",
				features: [
					"Maintenance and modernizations",
					"Utility billing management",
					"New tenancy coordination",
					"Tenant care and support",
					"Repair management",
					"Legal services",
					"Rent price adjustments",
					"Rent collection monitoring",
					"Rent dunning services"
				],
				cta: {
					label: "Contact us",
					href: "tel:+4930887891"
				}
			},
			{
				name: "Entire Building Management",
				monthlyPrice: null,
				yearlyPrice: null,
				description: "Mietverwaltung - For sole owners of multi-apartment buildings",
				features: [
					"All single unit services",
					"Service provider management",
					"Emergency response measures",
					"Building-wide coordination",
					"Comprehensive tenant management",
					"Professional property oversight",
					"Legal compliance management",
					"Financial reporting and accounting"
				],
				cta: {
					label: "Contact us",
					href: "tel:+4930887891"
				},
				highlight: true
			},
			{
				name: "Shared Building Management",
				monthlyPrice: null,
				yearlyPrice: null,
				description: "WEG Verwaltung - For co-owners of multi-party buildings",
				features: [
					"Maintenance and modernizations",
					"Accounting and year-end statements",
					"Repair management coordination",
					"Service provider management",
					"Legal services and compliance",
					"Owners' meetings organization",
					"Annual financial planning",
					"Emergency measures coordination",
					"Rent collection monitoring"
				],
				cta: {
					label: "Contact us",
					href: "tel:+4930887891"
				}
			}
		]
	}: {
		title?: string;
		subtitle?: string;
		tiers?: PricingTier[];
		features?: PricingFeature[];
		tierNames?: string[];
		caption?: string;
	} = $props();

	// State
	let annual = $state(true);
</script>

<section class="section-py section-px container mx-auto">
	<div class="flex flex-col items-baseline justify-between lg:flex-row">
		<SectionHeader {title} {subtitle} />

		<div class="mb-8 flex justify-center">
			<div class="inline-flex items-center rounded-full bg-gray-200 p-0.5 gap-0.5">
				<button
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 {!annual ? 'bg-white text-gray-900' : 'text-gray-600 hover:text-gray-900'}"
					onclick={() => (annual = false)}
				>
					Monthly
				</button>
				<button
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 {annual ? 'bg-white text-gray-900' : 'text-gray-600 hover:text-gray-900'}"
					onclick={() => (annual = true)}
				>
					Annual <span class="text-xs ml-1 text-gray-500">Save 20%</span>
				</button>
			</div>
		</div>
	</div>

	<div class="bb grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each tiers as tier}
			<div
				class="flex flex-col rounded-xl bg-white p-6 ring ring-gray-200 transition-all duration-300 dark:bg-gray-800 dark:ring-gray-700"
				class:ring-2={tier.highlight}
				class:ring-primary={tier.highlight}
				class:dark:ring-primary-700={tier.highlight}
				class:translate-y-[-4px]={tier.highlight}
			>
				<div class="mb-8">
					<h3 class="text-title3 mb-4 dark:text-white">{tier.name}</h3>
					<div class="mt-2 flex items-baseline">
						{#if tier.monthlyPrice === null && tier.yearlyPrice === null}
							<span class="text-title2 dark:text-white">Custom</span>
						{:else}
							<NumberFlow
								class="text-title2 [&::part\(suffix\)]:text-caption dark:text-white"
								format={{
									style: "currency",
									currency: "USD",
									trailingZeroDisplay: "stripIfInteger"
								}}
								value={annual ? tier.yearlyPrice : tier.monthlyPrice}
								suffix="/month"
							/>
						{/if}
					</div>
					<p class="text-callout text-emphasis-medium mt-3 dark:text-gray-300">
						{tier.description}
					</p>
				</div>

				<div class="mb-8 flex-grow">
					<ul class="space-y-3">
						{#each tier.features as feature}
							<li class="flex items-center gap-2">
								<IconCheck class="text-primary-600 dark:text-primary-400 size-5 flex-shrink-0" />
								<span class="text-body text-emphasis-medium dark:text-gray-300">{feature}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="mt-auto">
					<Button
						href={tier.cta.href}
						variant={tier.highlight ? "primary" : "secondary"}
						class="w-full"
					>
						{tier.cta.label}
					</Button>
				</div>
			</div>
		{/each}
	</div>
	<div class="mt-32">
		<!-- Responsive table wrapper with horizontal scroll on mobile -->
		<!-- <div class=" hidden overflow-x-auto px-4 sm:mx-0 sm:block sm:px-0">
			<table
				class="w-full min-w-full border-separate border-spacing-0 border-gray-200 text-left dark:border-gray-700"
			>
				<thead>
					<tr>
						<th
							class="sticky left-0 min-w-[120px] border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
						>
							<span class="sr-only">Feature</span>
						</th>
						{#each tierNames as tierName}
							<th
								class="text-headline min-w-[100px] border-b border-gray-200 p-4 text-start font-normal dark:border-gray-700"
							>
								{tierName}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each features as feature}
						<tr>
							<td class="text-caption">
								{feature.name}
							</td>
							{#each tierNames as tierName}
								<td
									class="min-w-[100px] border-b border-gray-200 p-4 text-start text-gray-600 dark:border-gray-700 dark:text-gray-300"
								>
									{#if typeof feature.tiers[tierName] === "boolean"}
										{#if feature.tiers[tierName]}
											<IconCheck
												class="text-primary-600 dark:text-primary-400 mx-auto size-5 sm:mx-0"
											/>
										{:else}
											<IconX class="mx-auto size-5 text-gray-400 sm:mx-0" />
										{/if}
									{:else}
										{feature.tiers[tierName]}
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div> -->

		<!-- Mobile feature comparison (alternative view for very small screens) -->
		<div>
			<!-- Universal pricing comparison for mobile -->
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<!-- Sticky header with tier names -->
					<thead class="border-border sticky top-0 z-10 border-b">
						<tr>
							<th class="min-w-[120px] py-3 text-left">
								<span class="sr-only">Feature</span>
							</th>
							{#each tierNames as tierName, i}
								<th class="text-caption min-w-[100px] py-3 text-left dark:text-white">
									{tierName}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="divide-border divide-y">
						{#each features as feature}
							<tr>
								<td class="text-body py-3 pr-8 font-medium lg:pr-0 dark:text-white">
									{feature.name}
								</td>
								{#each tierNames as tierName, i}
									<td class="py-3">
										{#if typeof feature.tiers[tierName] === "boolean"}
											{#if feature.tiers[tierName]}
												<IconCheck class="text-primary-900 dark:text-primary-400 size-5" />
											{:else}
												<IconX class="size-5 text-gray-400" />
											{/if}
										{:else}
											<span class="text-callout font-medium text-gray-700 dark:text-gray-300">
												{feature.tiers[tierName]}
											</span>
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<LogoScroller />
</section>

<style lang="postcss">
	@reference '../../../app.css';

	:global(number-flow-svelte)::part(suffix) {
		@apply text-sm text-gray-400 dark:text-gray-500;
	}
</style>
