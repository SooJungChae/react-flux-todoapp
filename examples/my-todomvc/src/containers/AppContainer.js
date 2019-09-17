// containers are what connects the state from stores to views
import { Container } from 'flux/utils';
import AppView from '../views/AppView';
import TodoStore from '../data/TodoStore';
import TodoDraftStore from '../data/TodoDraftStore';
import TodoActions from '../data/TodoActions';

function getStores() {
    return [
        TodoStore,
        TodoDraftStore
    ];
}

function getState() {
    return {
        todos: TodoStore.getState(),
        todoDraft: TodoDraftStore.getState(),
        onAddTodo: TodoActions.addTodo,
        onDeleteTodo: TodoActions.deleteTodo,
        onToggleTodo: TodoActions.toggleTodo,
        onUpdateDraft: TodoActions.updateDraft
    };
}
export default Container.createFunctional(AppView, getStores, getState);

