const INIT_STATE = [];

export default function(state = INIT_STATE, action) {
    let nextState = [...state];
    switch (action.type) {
         default:
            return nextState;
    }
}