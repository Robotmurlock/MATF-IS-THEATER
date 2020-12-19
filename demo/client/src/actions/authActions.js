export const login = (username, password) => (dispatch) => new Promise((res, rej) => {
    if (!username || !password) res();
    const accounts = {
      supervizor: {
        account: 'Momir Adžemović',
        accountType: 'supervizor'
      },
      dragana: {
        account: 'Dragana Milić',
        accountType: 'zaposleni'
      },
      katarina: {
        account: 'Katarina Savičić',
        accountType: 'zaposleni'
      },
      ognjen: {
        account: 'Ognjen Milinković',
        accountType: 'zaposleni'
      },
      nikola: {
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
