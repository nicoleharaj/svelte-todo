<script lang="ts">
	import { addToast, addTodo } from '../store';

	let inputField: HTMLInputElement;
	let item: string;

	let handleSubmit = () => {
		if (!inputField.value) {
			addToast({
				message: 'Text field cannot be empty!',
				type: 'error',
				timeout: 3000
			});

			return;
		}

		addTodo({ name: item });

		inputField.value = '';
	};
</script>

<form on:submit|preventDefault={handleSubmit} class="flex gap-2 pt-3 border-t border-slate-300">
	<label class="sr-only" for="todo-input">Enter a new to do item</label>
	<input
		bind:this={inputField}
		bind:value={item}
		id="todo-input"
		placeholder="Enter a task..."
		class="rounded border border-slate-300 px-2 py-1 hover:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-500/40 active:ring active:ring-indigo-500/40"
	/>
	<button
		type="submit"
		class="flex m-0 px-2 text-white text-2xl font-bold rounded shadow-md bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500/40"
	>
		+
	</button>
</form>
