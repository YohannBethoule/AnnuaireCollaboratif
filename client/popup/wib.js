var currentTab;


function updateActiveTab(tabs) {

    function urlToDomainName(urlString){
        var url= urlString.replace('http://','').replace('https://','').split(/[/?#]/)[0]
        url= url.slice(0,url.indexOf('.'));
        return url;
    }

    function isSupportedProtocol(urlString) {
        var supportedProtocols = ["https:", "http:", "ftp:"];
        var url = document.createElement('a');
        url.href = urlString;
        return supportedProtocols.indexOf(url.protocol) != -1;
    }

    function displayFiche(datas){
        document.getElementById("dump").innerHTML = "<p> DUMP </p>";
        console.log(datas.data);
        document.getElementById("dump").innerHTML +="<p>"+ datas.name + "</p>";
    }

    function getInfos(url){
        var xhr = new XMLHttpRequest();
        if(url.startsWith("http") || url.startsWith("https")){
            if(url.startsWith("https")){
                url = url.slice(8,-1);
            }else{
                url = url.slice(7,-1);
            }
        }
        console.log(url);
        var requestedURL = "http://localhost:3001/extension/site/"+ encodeURIComponent(url);
        console.log(requestedURL);
        //xhr.setRequestHeader("Content-Type","application/json");
        xhr.open('GET', requestedURL, true);
        xhr.addEventListener("load", function() {
            if(xhr.readyState == 4 && xhr.status == 200){
                //console.log(xhr.responseType);
                //console.log(xhr.responseText);
                //console.log(xhr.response);
                //displayFiche(xhr.responseText);
            }
        });
        xhr.send();
    }

    function updateTab(tabs) {
        if (tabs[0]) {
            currentTab = tabs[0];
            if (isSupportedProtocol(currentTab.url)) {
                var domainName=urlToDomainName(currentTab.url);
                document.getElementById("currentURL").innerHTML="<a href=http://"+domainName+">"+domainName+"";
                var fiche = getInfos(domainName);
                //displayFiche(currentTab.url);
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