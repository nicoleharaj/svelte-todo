<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { ITodo } from '../types';
	import { addToast, updateTodo } from '../store';

	export let todo: ITodo;

	const dispatch = createEventDispatcher();


	const handleClick = () => {
		todo.completed = !todo.completed;

		updateTodo(todo);

		if (todo.completed) {
			addToast({
				message: 'Task marked complete',
				type: 'success',
				timeout: 2000
			});
		}

		else {
			addToast({
				message: 'Task marked incomplete',
				type: 'error',
				timeout: 2000
			});
		}
	}
</script>

<div class="flex justify-between w-full">
	<div class="flex gap-2 items-center">
		<input type="checkbox" id="todo-{todo.id}" on:click={handleClick} bind:checked={todo.completed}/>
	
		{#if todo.completed}
			<label for="todo-{todo.id}" class="line-through italic text-gray-400">{todo.name}</label>
		{:else}
			<label for="todo-{todo.id}">{todo.name}</label>
		{/if}
	</div>
	
	<button on:click={() => dispatch('remove')}>x</button>
</div>
