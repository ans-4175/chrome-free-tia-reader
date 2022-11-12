const url = window.location.href;
const idTia = 'https://id.techinasia.com/'
const freeTia = 'https://freetia-mochfamir.vercel.app/api'

const preProc = url.includes(idTia) ? 'id' : 'en';
window.open(`${freeTia}?${preProc}=${url}`);