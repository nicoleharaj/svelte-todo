<script lang="ts">
	import Toast from './Toast.svelte';

	import { dismissToast, toasts } from '../../store';
</script>

{#if $toasts}
	<section class="flex flex-col gap-4 mt-4 mr-4 items-end fixed top-0 left-0 right-0 w-100">
		{#each $toasts as toast (toast.id)}
			<Toast type={toast.type} on:dismiss={() => dismissToast(toast.id)}>{toast.message}</Toast>
		{/each}
	</section>
{/if}
