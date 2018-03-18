var currentTab;


function updateActiveTab(tabs) {

    function urlToDomainName(urlString){
        return urlString.replace('http://','').replace('https://','').split(/[/?#]/)[0];
    }

    function isSupportedProtocol(urlString) {
        var supportedProtocols = ["https:", "http:", "ftp:"];
        var url = document.createElement('a');
        url.href = urlString;
        return supportedProtocols.indexOf(url.protocol) != -1;
    }

    function displayFiche(url){
        console.log("azzegge");

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
        var requestedURL = "http://localhost:3001/extension/page/"+ encodeURIComponent(url);
        console.log(requestedURL);
        xhr.open('GET', requestedURL);
        xhr.send();
        xhr.addEventListener('readystatechange', function() {
            if(xhr.readyState == XMLHttpRequest.DONE){
                //return JSON.parse(xhr.responseText);
                document.getElementById("dump").innerHTML = "<p> DUMP <br> "+ JSON.parse(xhr.responseText) + "</p>";
            }
        });
        /*$.ajax({
            url: "http://localhost:3001/extension/page/"+ encodeURIComponent(url),
            method: 'GET'
        })
        .done(function(data){
            data = JSON.parse(data);
            document.getElementById("dump").innerHTML = "<p> DUMP <br> "+ data + "</p>";
        });*/
    }

    function updateTab(tabs) {
        if (tabs[0]) {
            currentTab = tabs[0];
            if (isSupportedProtocol(currentTab.url)) {
                var domainName=urlToDomainName(currentTab.url);
                document.getElementById("currentURL").innerHTML="<a href=http://"+domainName+">"+domainName+"";
                var fiche = getInfos(url);
                //displayFiche(currentTab.url);
            }
            else {
                return "<p> Le format web n'est pas supporté par l'extension. </p>"
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