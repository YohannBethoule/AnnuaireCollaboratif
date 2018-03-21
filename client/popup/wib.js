var currentTab;


function updateActiveTab(tabs) {

    function urlToDomainName(urlString){
        var url= urlString.replace('http://','').replace('https://','').replace('www.', '').split(/[.?#]/)[0];
        return url;
    }

    function isSupportedProtocol(urlString) {
        var supportedProtocols = ["https:", "http:", "ftp:"];
        var url = document.createElement('a');
        url.href = urlString;
        return supportedProtocols.indexOf(url.protocol) != -1;
    }

    function display(datas){
        console.log(datas);
        if(datas==null){
            document.getElementById("currentURL").innerHTML = "Ce site n'existe pas dans notre base de données"
        }else{
            document.getElementById("currentURL").innerHTML= datas.domain_name;
            document.getElementById("dump").innerHTML +="<p>"+ datas.note + "/5 </p>";
        }
    }



    function getInfos(url){
        var xhr = new XMLHttpRequest();
        if(url.startsWith("http") || url.startsWith("https")){
            if(url.startsWith("https")){
                url = url.slice(12,-1);
            }else{
                url = url.slice(11,-1);
            }
        }
        var domain_name = urlToDomainName(url);
        console.log(domain_name);
        var requestedURL = "http://localhost:3001/extension/site/"+ encodeURIComponent(domain_name);
        console.log(requestedURL);
        //xhr.setRequestHeader("Content-Type","application/json");
        xhr.open('GET', requestedURL, true);
        xhr.addEventListener("load", function() {
            if(xhr.readyState == 4 && xhr.status == 200) {
                //console.log(xhr.responseType);
                if(!xhr.response) {
                    display(null);
                } else display(JSON.parse(xhr.responseText));
            }
        });
        xhr.send();
    }

    function updateTab(tabs) {
        if (tabs[0]) {
            currentTab = tabs[0];
            if (isSupportedProtocol(currentTab.url)) {
                var domainName=urlToDomainName(currentTab.url);

                getInfos(domainName);
            }
            else {
                document.getElementById("currentURL").innerHTML = "<p> Le format web n'est pas supporté par l'extension. </p>"
            }
        }
    }

    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then(updateTab);
}

browser.tabs.onUpdated.addListener(updateActiveTab);

browser.tabs.onActivated.addListener(updateActiveTab);

browser.windows.onFocusChanged.addListener(updateActiveTab);

// update when the extension loads initially
updateActiveTab();