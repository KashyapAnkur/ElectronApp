import Users from '../Components/Users.json';

const initialState = {users: Users};

function UserReducer(state = initialState, action) {
    switch(action.type) {
        case "deleteuser" : {
            let remainingusers = state.filter( (val) => {
                return val.id !== action.id;
            });
            return remainingusers;
        }
        case "isSelected": {
            state.forEach( (val) => {
                if(val.id == action.id) {
                    val.isSelected = "true";
                } else {
                    val.isSelected = "false";
                }
            });
            return state;
        }
        default: {
            return state.users.users;
        }
    }
}

export default UserReducer;