<script lang="ts">
	import { fly } from 'svelte/transition';

	export let type = 'info';
</script>

<article
	class={type}
	role="alert"
	transition:fly={{ delay: 250, duration: 300, x: 100, opacity: 0 }}
>
	<slot />
</article>

<style lang="postcss">
	article {
		@apply text-center rounded-lg shadow-xl text-white py-3 px-6;
	}
	.error {
		@apply bg-rose-500;
	}

	.success {
		@apply bg-emerald-500;
	}

	.info {
		@apply bg-amber-500;
	}
</style>
