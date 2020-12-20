const initialState = {
  predstave: [],
  zaposleni: [],
}

const podaciReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'PREDSTAVE_SUCCESS':
      return {
        ...state,
        predstave: payload,
      }
    case 'GET_ZAPOSLENI_SUCCESS':
      return {
        ...state,
        zaposleni: payload,
      }
    case 'KREIRAJ_ZAPOSLENOG_SUCCESS':
      return {
        ...state,
        zaposleni: [
          ...state.zaposleni,
          payload,
        ],
      }
    default:
      return state
  }
}

export default podaciReducer;
