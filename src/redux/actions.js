export const actionTypes = {
    FAILURE: 'FAILURE',
    LOG_IN: 'LOG_IN',
    CHECK_LOGIN: 'CHECK_LOGIN',
    MODAL_ADD: 'MODAL_ADD',
    LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
    MODAL_SALE: 'MODAL_SALE',

}

export function failure(error) {
    return {
        type: actionTypes.FAILURE,
        error,
    }
}

export function addLogin(payload) {
    return { type: actionTypes.LOG_IN, payload }
};

export function addModal(payload) {
    return { type: actionTypes.MODAL_ADD, payload }
};

export function checkLogin() {
    return { type: actionTypes.CHECK_LOGIN}
};
  
export function modalSale(payload) {
    return { type: actionTypes.MODAL_SALE, payload}
};
