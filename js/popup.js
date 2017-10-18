var ICON_MAXIMIZE = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwIDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgaWQ9Im1heGltaXplIj48cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQUFBQUFBOyIgZD0iTTEwLDBjNS41LDAsMTAsNC41LDEwLDEwYzAsNS41LTQuNSwxMC0xMCwxMFMwLDE1LjUsMCwxMEMwLDQuNSw0LjUsMCwxMCwweiIvPjxnPjxnPjxwb2x5Z29uIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjE0LDkgMTEsOSAxMSw2IDksNiA5LDkgNiw5IDYsMTEgOSwxMSA5LDE0IDExLDE0IDExLDExIDE0LDExICIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";

var ICON_MINIMIZE = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIwIDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgaWQ9Im1pbmltaXplIj48cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojQUFBQUFBOyIgZD0iTTEwLDBjNS41LDAsMTAsNC41LDEwLDEwYzAsNS41LTQuNSwxMC0xMCwxMFMwLDE1LjUsMCwxMEMwLDQuNSw0LjUsMCwxMCwweiIvPjxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7IiBkPSJNMTQsOXYySDZWOUgxNHoiLz48L2c+PC9zdmc+"

var BTN_NORMAL = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzYxQTVEQSIgZD0iTTE0LDE2SDJjLTEuMSwwLTItMC45LTItMlYyYzAtMS4xLDAuOS0yLDItMmgxMmMxLjEsMCwyLDAuOSwyLDJ2MTJDMTYsMTUuMSwxNS4xLDE2LDE0LDE2eiIvPjxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDcgOSw3IDksNCA3LDQgNyw3IDQsNyA0LDkgNyw5IDcsMTIgOSwxMiA5LDkgMTIsOSAiLz48L3N2Zz4=";

var BTN_HOVER = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzQ0OTVENCIgZD0iTTE0LDE2SDJjLTEuMSwwLTItMC45LTItMlYyYzAtMS4xLDAuOS0yLDItMmgxMmMxLjEsMCwyLDAuOSwyLDJ2MTJDMTYsMTUuMSwxNS4xLDE2LDE0LDE2eiIvPjxwb2x5Z29uIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjEyLDcgOSw3IDksNCA3LDQgNyw3IDQsNyA0LDkgNyw5IDcsMTIgOSwxMiA5LDkgMTIsOSAiLz48L3N2Zz4=";

//encryption
var FAKE_POST_FUNCTION =
"   function fake_post() {" +
"       var form = document.createElement('form');" +
"       form.setAttribute('method', 'post');" +
"       form.setAttribute('action', 'https://fypprivaegis.000webhostapp.com/');" +
"       var params = {{{PARAMS}}};" +
"       for(var key in params) {" +
"           var hiddenField = document.createElement('input');" +
"           hiddenField.setAttribute('type', 'hidden');" +
"           hiddenField.setAttribute('name', key);" +
"           hiddenField.setAttribute('value', params[key]);" +
"           form.appendChild(hiddenField);" +
"       }" +
"       document.body.appendChild(form);" +
"       form.submit();" +
"   }";

window.onload = function() {

    document.getElementById('search_form_input_homepage').focus();

    document.getElementById('search_form_homepage').onsubmit = search;
    document.getElementById('search_form_input_clear').onclick = search_input_clear;

    var prefill_text = 'Search PrivAegis...';

    if (localStorage['meanings'] == undefined) {
      localStorage['meanings'] = 'true';
    }

    if (localStorage['advanced_options'] == undefined){
      localStorage['advanced_options'] = 'true';
    }

    if (localStorage['last_search'] != '') {
        document.getElementById('search_form_input_homepage').value = localStorage['last_search'];
        document.getElementById("search_form_input_clear").style.display = 'inline-block';
        document.getElementById("search_button_homepage").className = 'selected';
        document.getElementById('search_form_input_homepage').select();
    }


    document.getElementById('dis_auto').onclick = ducky_check;
    document.getElementById('dis_pre').onclick = meanings_check;

    document.getElementById('addons').onclick = function(){
        chrome.tabs.create({url: "html/options.html"});
    }

    var images = document.querySelectorAll('li img');
    for(var i = 0; i < images.length; i++) {
      images[i].onmouseover = function() {
          this.src = BTN_HOVER;
      }

      images[i].onmouseout = function() {
          this.src = BTN_NORMAL;
      }
    }

    defaults_check();

    chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
      defaults_check();
    });


    if (localStorage['advanced_options'] !== 'true') {
        document.getElementById('icon_advanced').src = ICON_MAXIMIZE;
        document.getElementById('advanced').style.display = 'none';
        document.getElementById('icon_advanced').className = 'minimized';
    }


    setTimeout(function(){
        document.getElementById("search_form_input_homepage").focus();
        document.getElementById("search_form_input_homepage").onkeydown = function(){
            document.getElementById("search_form_input_clear").style.display = 'inline-block';
            document.getElementById("search_button_homepage").className = 'selected';
            this.style.color = '#000000';
        };
        document.getElementById("search_form_input_homepage").onkeyup = function(){
            if (this.value == '') {
                this.style.color = '#999999';
                search_input_clear();
            }
        };
    }, 300);


    function search(){
        var input = document.getElementById("search_form_input_homepage").value;

        if (localStorage['lastsearch_enabled'] === 'false')
            localStorage['last_search'] = '';
        else
            localStorage['last_search'] = input;

        if (document.getElementById('dis_auto').checked === true) {
            input = "" + input;
        }

        var special = '';
        if(document.getElementById('dis_pre').checked !== true) {
            special = '';
        }

        if (localStorage['safesearch'] === 'false')
            special += '&kp=-1'

        var os = "o";
        if (window.navigator.userAgent.indexOf("Windows") != -1) os = "w";
        if (window.navigator.userAgent.indexOf("Mac") != -1) os = "m";
        if (window.navigator.userAgent.indexOf("Linux") != -1) os = "l";

        special += '&bext=' + os + 'cp';

        if (localStorage['use_post'] === 'true') {
            var fake_post_code = FAKE_POST_FUNCTION.replace(/(\n|\t)/gm,'');

            var params = {
                q: input,
                d:  (special == '') ? 0 : 1
            };

            fake_post_code = fake_post_code.replace('{{{PARAMS}}}', JSON.stringify(params));

            chrome.tabs.create({
                url:  "javascript:" + fake_post_code + "; fake_post();"
            });
        } else {
            chrome.tabs.create({
                url: "https://fypprivaegis.000webhostapp.com/"
            });
        }
    }

    document.getElementById('icon_advanced').onclick = function(){
        if (this.className == 'minimized') {
            this.src = ICON_MINIMIZE;
            document.getElementById('advanced').style.display = 'block';
            this.className = 'maximized';
        } else {
            this.src = ICON_MAXIMIZE;
            document.getElementById('advanced').style.display = 'none';
            this.className = 'minimized';
        }
        localStorage['advanced_options'] = (document.getElementById('advanced').style.display === 'block');
        document.getElementById('search_form_input_homepage').focus();
    }

    function add_bang(bang) {
        var inp = document.getElementById('search_form_input_homepage');

        var bang_regex = /\!\w+/;

        document.getElementById("search_form_input_clear").style.display= 'inline-block';
        document.getElementById("search_button_homepage").className = 'selected';

        if (inp.value === '') {
            inp.style.color = '#000';
            inp.value = bang + ' ';
            inp.focus();
        } else {
            var found_bangs = bang_regex.exec(inp.value);
            if (found_bangs !== null) {
                inp.value = inp.value.replace(found_bangs[0], bang);
                inp.focus();
            } else {
                inp.value += bang;
                search();
            }
        }
    }

    function ducky_check(){
        localStorage['ducky'] = document.getElementById('dis_auto').checked;
    }

    function meanings_check(){
        localStorage['meanings'] = document.getElementById('dis_pre').checked;
    }

    function defaults_check(){
        if (localStorage['ducky'] === 'true') {
            document.getElementById('dis_auto').checked = true;
        }

        if (localStorage['meanings'] === 'true') {
            document.getElementById('dis_pre').checked = true;
        }

    }

    function search_input_clear() {
        document.getElementById('search_form_input_homepage').value = '';
        document.getElementById("search_form_input_clear").style.display= 'none';
        document.getElementById('search_form_input_homepage').focus();
        document.getElementById("search_button_homepage").className = '';
        localStorage['last_search'] = '';
    }
}

