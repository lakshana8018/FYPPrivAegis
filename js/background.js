function Background() {
  $this = this;

  $this.timeSinceEpoch = function() {
      var atbTime = {
              oneWeek     : 604800000,
              oneDay      : 86400000,
              oneHour     : 3600000,
              oneMinute   : 60000,
              estEpoch    : 1456290000000
          },
          localDate = new Date(),
          localTime = localDate.getTime(),
          utcTime = localTime + (localDate.getTimezoneOffset() * atbTime.oneMinute),
          est = new Date(utcTime + (atbTime.oneHour * -5)),
          dstStartDay = 13 - ((est.getFullYear() - 2016) % 6),
          dstStopDay = 6 - ((est.getFullYear() - 2016) % 6),
          isDST = (est.getMonth() > 2 || (est.getMonth() == 2 && est.getDate() >= dstStartDay)) && (est.getMonth() < 10 || (est.getMonth() == 10 && est.getDate() < dstStopDay)),
          epoch = isDST ? atbTime.estEpoch - atbTime.oneHour : atbTime.estEpoch;

      return new Date().getTime() - epoch;
  }

  $this.majorVersion = function() {
      var tse = $this.timeSinceEpoch();
      return Math.ceil( tse / 604800000);
  }

  $this.minorVersion = function() {
      var tse = $this.timeSinceEpoch();
      return Math.ceil( tse % 604800000 / 86400000);
  }

  $this.atbDelta = function(ogMajor, ogMinor) {
      var majorVersion = $this.majorVersion();
          minorVersion = $this.minorVersion();
          majorDiff = majorVersion - ogMajor,
          minorDiff = Math.abs(minorVersion - ogMinor);

      return majorDiff > 0 ? (7 * majorDiff) + minorDiff : minorDiff;
  }


  // clearing last search on browser startup
  localStorage['last_search'] = '';

  var os = "o";
  if (window.navigator.userAgent.indexOf("Windows") != -1) os = "w";
  if (window.navigator.userAgent.indexOf("Mac") != -1) os = "m";
  if (window.navigator.userAgent.indexOf("Linux") != -1) os = "l";

  localStorage['os'] = os;

  chrome.runtime.onInstalled.addListener(function(details) {
    // only run the following section on install
    if (details.reason !== "install") {
      return;
    }

    if (localStorage['atb'] === undefined) {
        var majorVersion = $this.majorVersion();
            minorVersion = $this.minorVersion();

        localStorage['atb'] = 'v' + majorVersion + '-' + minorVersion;
        localStorage['majorVersion'] = majorVersion;
        localStorage['minorVersion'] = minorVersion;
    }

    // inject the oninstall script to opened DuckDuckGo tab.
    chrome.tabs.query({ url: 'https://fypprivaegis.000webhostapp.com/' }, function (tabs) {
      var i = tabs.length, tab;
      while (i--) {
        tab = tabs[i];
        chrome.tabs.executeScript(tab.id, {
          file: 'js/oninstall.js'
        });
        chrome.tabs.insertCSS(tab.id, {
          file: 'css/noatb.css'
        });
      }
    });

  });

  chrome.runtime.onMessage.addListener(function(request, sender, callback) {
    if (request.options) {
      callback(localStorage);
    }

    if (request.current_url) {
      chrome.tabs.getSelected(function(tab) {
        var url = tab.url;
        callback(url);
      });
    }

    if (!localStorage['set_atb'] && request.atb) {
      localStorage['atb'] = request.atb;
      localStorage['set_atb'] = request.atb;

      var xhr = new XMLHttpRequest();

      xhr.open('GET',
        'https://fypprivaegis.000webhostapp.com/' + request.atb,
        true
      );
      xhr.send();
    }

    return true;
  });
}

var background = new Background();

chrome.omnibox.onInputEntered.addListener(function(text) {
  chrome.tabs.query({
    'currentWindow': true,
    'active': true
  }, function(tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: "https://fypprivaegis.000webhostapp.com/" + encodeURIComponent(text) + "&bext=" + localStorage['os'] + "cl"
    });
  });
});

//This adds Context Menu when user select some text.
//create context menu
chrome.contextMenus.create({
  title: 'Search PrivAegis for "%s"',
  contexts: ["selection"],
  onclick: function(info) {
    var queryText = info.selectionText;
    chrome.tabs.create({
      url: "https://fypprivaegis.000webhostapp.com/" + queryText + "&bext=" + localStorage['os'] + "cr"
    });
  }
});

// Add ATB param
chrome.webRequest.onBeforeRequest.addListener(
    function (e) {
      // Only change the URL if there is no ATB param specified.
      if (e.url.indexOf('atb=') !== -1) {
        return;
      }

      // Only change the URL if there is an ATB saved in localStorage
      if (localStorage['atb'] === undefined) {
        return;
      }

      var newURL = e.url + "&atb=" + localStorage['atb'];
      return {
        redirectUrl: newURL
      };
    },
    {
        urls: [
            "*:https://fypprivaegis.000webhostapp.com/?*",
            "*:https://fypprivaegis.000webhostapp.com/?*",
        ],
        types: ["main_frame"]
    },
    ["blocking"]
);

chrome.webRequest.onCompleted.addListener(
    function () {
      var atb = localStorage['atb'],
          setATB = localStorage['set_atb'];

      if (!atb || !setATB) {
        return;
      }

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
           if (xhr.status == 200) {
             var curATB = JSON.parse(xhr.responseText);
             if(curATB.version !== setATB) {
               localStorage['set_atb'] = curATB.version;
             }
           }
        }
      };

      xhr.open('GET',
        'https://fypprivaegis.000webhostapp.com/' + Math.ceil(Math.random() * 1e7)
          + '&atb=' + atb + '&set_atb=' + setATB,
        true
      );
      xhr.send();
    },
    {
        urls: [
            '*:https://fypprivaegis.000webhostapp.com/?*',
            '*:https://fypprivaegis.000webhostapp.com/?*',
        ],
    }
);
