const defaultState = {
    value:5
};    
export default (state = 0,actions) => {
    switch(actions.type) {
        case 'Click2':return actions.selected
        default: return state;
    }
}