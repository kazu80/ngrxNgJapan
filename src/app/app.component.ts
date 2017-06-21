import {Component, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from './counter';
import {TodoActions} from './todoActions';
import {getTodos, TodosState} from './rootReducer';

interface AppState {
    counter: number;
}

export interface Todo {
    id: number;
    completed: boolean;
    text: string;
}

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    currentFilter: string;
    todos: Observable<Todo>;

    constructor(private _store: Store<TodosState>,
                private todoActions: TodoActions) {
        this.todos = _store.let(getTodos);
    }

    private applyFilter(filter) {
        this._store.dispatch(this.todoActions.setCurrentFilter(filter));
    }

    private onTodoClick(id) {
        this._store.dispatch(this.todoActions.toggleTodo(id));
    }

    private addTodo(input) {

        const foo = this.todoActions.addTodo(input.value);

        /*
         foo = {
         id: 1,
         text: 'foo',
         type: 'ADD_TODO'
         };
         console.log(foo);
         */

        this._store.dispatch(foo);
        input.value = '';
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }

    /**
     * ngrx guthub sample
     **/
    /*
    counter: Observable<number>;

    constructor(private store: Store<AppState>) {
        this.counter = store.select('counter');
    }

    increment() {
        this.store.dispatch({type: INCREMENT});
    }

    decrement() {
        this.store.dispatch({type: DECREMENT});
    }

    reset() {
        this.store.dispatch({type: RESET});
    }
     */
}
