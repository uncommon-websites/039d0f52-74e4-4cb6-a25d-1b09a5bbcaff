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
	<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
	<rect width="20" height="14" x="2" y="6" rx="2"/>
</svg>