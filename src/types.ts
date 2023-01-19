export interface INewTodo {
	name: string;
}

export interface ITodo extends INewTodo {
	id: string;
	completed: boolean;
}

export interface INewToast {
	type: string;
	timeout: number;
	message: string;
}

export interface IToast extends INewToast {
	id: string;
}
