const initialState = {
  predstave: []
}

const podaciReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'PREDSTAVE_SUCCESS':
      return {
        ...state,
        predstave: payload,
      }
    default:
      return state
  }
}

export default podaciReducer;
