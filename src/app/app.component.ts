import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET} from './counter';
import {TodoActions} from './todoActions';

interface AppState {
    counter: number;
}

// TodosStateが見つからないので色々なinterfaceとClassを作ってみる
export interface Todo {
    text: string;
}

class Bar {
}

export interface Foo {
    foo: Number;
}

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent {
    todos: Observable<Todo>;

    constructor(// private _store: Store<TodosState>,
        private _store: Store<Todo>,
        private todoActions: TodoActions) {
        this.todos = _store.select('todos');
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
