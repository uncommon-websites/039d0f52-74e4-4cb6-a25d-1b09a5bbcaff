<script lang="ts">
	let { class: className = "", ...rest } = $props();
</script>

<svg 
	class={className} 
	width="24" 
	height="24" 
	viewBox="0 0 24 24" 
	fill="none" 
	stroke="currentColor" 
	stroke-width="2" 
	stroke-linecap="round" 
	stroke-linejoin="round"
	{...rest}
>
	<circle cx="12" cy="12" r="10"/>
	<path d="m9 12 2 2 4-4"/>
	<path d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6"/>
	<path d="M3 12c0-1.2 4.03-6 9-6s9 4.8 9 6"/>
	<path d="m12 2 3 3-3 3-3-3z"/>
</svg>