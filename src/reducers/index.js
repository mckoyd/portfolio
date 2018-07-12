import { TOGGLE_NAV } from '../actions';

const initState = {
  navView: false
};

export default (state=initState, action) => {
  switch(action.type){
  case TOGGLE_NAV:
    return {...state, navView: !state.navView};
  default:
    return state;
  }
};