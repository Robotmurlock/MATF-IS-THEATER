export const login = (username, password) => (dispatch) => new Promise((res, rej) => {
    if (!username || !password) res();
    const accounts = {
      'supervizor@pozoriste.com': {
        account: 'Momir Adžemović',
        accountType: 'supervizor'
      },
      'dragana@pozoriste.com': {
        account: 'Dragana Milić',
        accountType: 'zaposleni'
      },
      'katarina@pozoriste.com': {
        account: 'Katarina Savičić',
        accountType: 'zaposleni'
      },
      'ognjen@pozoriste.com': {
        account: 'Ognjen Milinković',
        accountType: 'zaposleni'
      },
      'nikola@pozoriste.com': {
        account: 'Nikola Vuković',
        accountType: 'zaposleni'
      },
    }
    const acc = accounts[username.toLowerCase()];
    setTimeout(() => {
        if (!acc) return rej(new Error('Nepostojeći korisnik'));
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {...acc}
        });
        res();
      },
      1000
    )
  })
;
