import { CustomAction } from '../bean/custom-action';
import { TodoItem } from '../bean/todo-item';

const initialState: State = {
    todos : [
        {title: 'Premiere chose', content: '', close: false},
        {title: 'Deuxieme chose', content: '', close: false},
        {title: 'Troisieme chose', content: '', close: false}
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
        default:
            return state;
    }
    
}