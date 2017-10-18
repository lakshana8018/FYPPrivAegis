var atbParam = document.querySelector('html').getAttribute('data-chromeatb');
chrome.runtime.sendMessage({atb: atbParam});
