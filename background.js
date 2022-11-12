const idTia = 'https://id.techinasia.com/'
const enTia = 'https://www.techinasia.com/'

chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(idTia)) {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['content.js']
    });
  } else {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['alert.js']
    });
  }
});