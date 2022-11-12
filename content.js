{
	const url = window.location.href;
	const idTia = 'https://id.techinasia.com/'
	const freeTia = 'https://freetia-mochfamir.vercel.app/api'

	const preProc = url.includes(idTia) ? 'id' : 'en';
	const freeUrl = `${freeTia}?${preProc}=${url}`;
	document.getElementsByClassName('paywall-content')[0].innerHTML = '...loading contents...';

	fetch(freeUrl).then((response) => {
		// The API call was successful!
		return response.text();
	}).then(function (html) {
		// This is the HTML from our response as a text string
		// paywall content show
		document.getElementsByClassName('paywall-content')[0].innerHTML = html;
		document.getElementsByClassName('paywall-content')[0].setAttribute('style', 'all:revert');
		// paywall premium hide
		document.getElementsByClassName('paywall-hard')[0].setAttribute('style', 'display:none');
	}).catch(function (err) {
		// There was an error
		console.warn('Something went wrong.', err);
	});
}