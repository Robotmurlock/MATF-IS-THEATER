window.zaposleni = [
  {ime_prezime: 'Momir Adžemović', zaposlenje: 'supervizor'},
  {ime_prezime: 'Dragana Milić', zaposlenje: 'organizator'},
  {ime_prezime: 'Katarina Savičić', zaposlenje: 'reditelj'},
  {ime_prezime: 'Ognjen Milinković', zaposlenje: 'organizator'},
  {ime_prezime: 'Nikola Vuković', zaposlenje: 'glumac'},
  {ime_prezime: 'Milan Blagojević', zaposlenje: 'blagajnik'},
  {ime_prezime: 'Petar Marković', zaposlenje: 'ostalo'},
]


export const getZaposleni = () => ({
  type: 'GET_ZAPOSLENI_SUCCESS',
  payload: window.zaposleni
})

export const kreirajZaposlenog = (data) => async (dispatch) => {
  window.zaposleni.push(data);
  dispatch({
    type: 'KREIRAJ_ZAPOSLENOG_SUCCESS',
    payload: data,
  });
}
