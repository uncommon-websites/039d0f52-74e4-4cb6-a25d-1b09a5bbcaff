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
	<line x1="4" x2="20" y1="12" y2="12"/>
	<line x1="4" x2="20" y1="6" y2="6"/>
	<line x1="4" x2="20" y1="18" y2="18"/>
</svg>