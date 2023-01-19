<script lang="ts">
	import Todo from '../components/Todo.svelte';
	import Form from '../components/Form.svelte';
	import { removeTodo, todos } from '../store';
	import Toasts from '../components/Toasts/Toasts.svelte';
</script>

<main class="flex flex-col items-center justify-center h-screen bg-indigo-500/10 select-none">
	<Toasts />
	<div class="flex flex-col gap-2 bg-white rounded-lg p-6 shadow-md">
		<h1 class="font-bold text-2xl">Things to do:</h1>
		<ul class="pb-3">
			{#each $todos as todo (todo.id)}
				<li class="flex gap-3">
					<Todo {todo} on:remove={() => removeTodo(todo.id)} />
				</li>
			{/each}
		</ul>

		<Form />
	</div>
</main>
