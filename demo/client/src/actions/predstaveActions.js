
const API_URL = 'http://127.0.0.1:5000';


export const getPredstave = () => async (dispatch, getState) => {
  const res = await fetch(API_URL + '/predstave');
  let predstave = Object.values(await res.json());
  const { account, accountType } = getState().general;
  if (accountType === 'zaposleni') {
    predstave = predstave.filter(p =>
      (p.status !== 'prijavljena' && p.status !== 'odbijena') || p.organizator === account
    )
  }
  if (accountType === 'supervizor') {
    predstave = predstave.filter(p =>
      (p.status !== 'odbijena')
    )
  }
  predstave = predstave.sort((a, b) => a.id - b.id);
  dispatch({ type: 'PREDSTAVE_SUCCESS', payload: predstave})
}

export const sacuvajPredstavu = (data) => async (dispatch) => {
  const url = API_URL + (data.id ? '/azuriraj' : '/dodaj');
  const method = data.id ? 'put' : 'post';
  await fetch(url, {
    method,
    body: JSON.stringify({ id: data.id, data }),
    headers: {
      'Content-Type': 'application/json'
    },
  });
}
