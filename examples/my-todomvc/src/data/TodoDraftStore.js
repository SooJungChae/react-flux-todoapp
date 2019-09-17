'use strict';

import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Immutable from "immutable";

class TodoDraftStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                // draft 는 다시 입력할 수 있도록 없애줘야 한다.
                return '';

            case TodoActionTypes.UPDATE_DRAFT:
                return action.text;

            default:
                return state;
        }
    }
}

export default new TodoDraftStore();
