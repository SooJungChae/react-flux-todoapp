// containers are what connects the state from stores to views
import { Container } from 'flux/utils';
import AppView from '../views/AppView';
import TodoStore from '../data/TodoStore';

function getStores() {
    return [
        TodoStore
    ];
}

function getState() {
    return {
        todos: TodoStore.getState()
    };
}
export default Container.createFunctional(AppView, getStores, getState);

