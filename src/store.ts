import { writable } from 'svelte/store';
import { persisted } from 'svelte-local-storage-store';
import type { ITodo, IToast, INewToast, INewTodo } from './types';

// Todos
export const todos = persisted<Array<ITodo>>('todos', []);

export const addTodo = (todo: INewTodo) => {
	const id = crypto.randomUUID();

	const defaults = {
		id,
		completed: false
	};

	todos.update((data) => [...data, { ...defaults, ...todo }]);

	addToast({
		message: 'Task added',
		type: 'success',
		timeout: 2000
	});
};

export const removeTodo = (id: string) => {
	todos.update((data) => data.filter((t) => t.id !== id));

	addToast({
		message: 'Task removed',
		type: 'error',
		timeout: 2000
	});
};

export const updateTodo = (todo: ITodo) => {
	todos.update((data) => data.filter((t) => t.id !== todo.id));

	todos.update((data) => [{ ...todo }, ...data]);
};

// Toasts
export const toasts = writable<Array<IToast>>([]);

export const addToast = (toast: INewToast) => {
	const id = crypto.randomUUID();

	const defaults = {
		id,
		type: 'info',
		timeout: 2000
	};

	toasts.update((all) => [{ ...defaults, ...toast }, ...all]);

	if (toast.timeout) setTimeout(() => dismissToast(id), toast.timeout);
};

export const dismissToast = (id: string) => {
	toasts.update((data) => data.filter((t) => t.id !== id));
};
