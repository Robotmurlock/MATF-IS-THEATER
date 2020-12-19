const initialState = {
  // account: null,
  // accountType: null,
  account: 'Ognjen Milinković',
  accountType: 'zaposleni',
}

const generalReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        account: payload.account,
        accountType: payload.accountType,
      }
    default:
      return state
  }
}

export default generalReducer;
