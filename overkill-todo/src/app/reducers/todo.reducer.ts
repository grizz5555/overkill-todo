import { CustomAction } from '../bean/custom-action';
import { TodoItem } from '../bean/todo-item';
import { bypassSanitizationTrustStyle } from '@angular/core/src/sanitization/bypass';

const initialState: State = {
    todos : [
        {id: 1, title: 'Premiere chose', content: '', close: false},
        {id: 2, title: 'Deuxieme chose', content: '', close: false},
        {id: 3, title: 'Troisieme chose', content: '', close: false}
    ]
  }

export interface State {
    todos: TodoItem[];
}

export function reducer(state: State = initialState, action: CustomAction) {
    switch(action.type) {
        case 'NEW_TODO':
            const newState: State = 
             {
                ...state,
                todos: [... state.todos, action.payload]
            } 
            return newState;
        case 'TOGGLE_CLOSE':
            const toggleState: State =
            {
                ...state
            };            
            toggleState.todos.find(x => x.id === action.payload).close = !toggleState.todos.find(x => x.id === action.payload).close;
            return toggleState;
        case 'TODO_UPDATECONTENT':
            const updateState: State =
            {
                ...state
            }
            updateState.todos.find(x => x.id == action.payload.id).content = action.payload.content;
            return updateState;
        default:
            return state;
    }
    
}