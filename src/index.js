import store from './store';
import {bugAdded, bugRemoved, bugResolved} from './actions';


console.log(store.getState());

store.dispatch(bugAdded("A bug related to logging"));
console.log(store.getState());

store.dispatch(bugResolved(1));
console.log(store.getState());

store.dispatch(bugRemoved(1));
console.log(store.getState());
