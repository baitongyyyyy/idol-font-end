import { actionTypes } from './actions'
const initialState = {
    login: false,
    addmodal: false,
    salemodal: false,
  };
  
  function rootReducer(state = initialState, action) {

    if (action.type === actionTypes.LOG_IN) {
      return Object.assign({}, state, {
        login: action.payload
      });
    }

    if (action.type === actionTypes.LOG_IN_SUCCESS) {
      return Object.assign({}, state, {
        login: action.payload
      });
    }

    if (action.type === actionTypes.MODAL_ADD) {
      return Object.assign({}, state, {
        addmodal: action.payload
      });
    }

    if (action.type === actionTypes.MODAL_SALE) {
      return Object.assign({}, state, {
        salemodal: action.payload
      });
    }

    return state;
  };
  
  export default rootReducer;