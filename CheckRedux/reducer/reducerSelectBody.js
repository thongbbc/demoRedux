const defaultState = {
    value:0
};    
export default (state = 0,actions) => {
    switch(actions.type) {
        case 'Click':return actions.selected
        default: return state;
    }
}