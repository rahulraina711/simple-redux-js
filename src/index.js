import configureStore from './store/configureStore';
import {bugAdded, bugRemoved, bugResolved, getUnresolvedBugs, bugAssignedToUser, getBugsByUser} from './store/bugs';
import {projectAdded} from './store/projects';
import {userAdded} from './store/users';

const store = configureStore();

//console.log(store.getState());
store.dispatch(userAdded({name: "user 1"}));
store.dispatch(userAdded({name: "user 2"}));
store.dispatch(userAdded({name: "user 3"}));



store.dispatch(projectAdded({name: "my project 1"}));

store.dispatch(bugAdded({description:"A bug related to logging"}));
store.dispatch(bugAdded({description:"Another bug"}));
store.dispatch(bugAdded({description:"A bug related copying"}));

store.dispatch(bugResolved({id:1}));

store.dispatch(bugAssignedToUser({bugId:1 , userId:1}));
store.dispatch(bugAssignedToUser({bugId:2 , userId:2}));
store.dispatch(bugAssignedToUser({bugId:3 , userId:3}));

const unresolvedBugs = getUnresolvedBugs(store.getState());
const bugsByUser = getBugsByUser(1)(store.getState());

console.log(unresolvedBugs, bugsByUser);

