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
	<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
	<circle cx="9" cy="7" r="4"/>
	<path d="m22 21-3-3m0 0a2 2 0 0 0 0-4 2 2 0 0 0 0 4"/>
</svg>