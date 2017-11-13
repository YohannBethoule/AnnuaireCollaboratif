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

    function updateTab(tabs) {
        if (tabs[0]) {
            currentTab = tabs[0];
            if (isSupportedProtocol(currentTab.url)) {
                var domainName=urlToDomainName(currentTab.url);
                document.getElementById("currentURL").innerHTML="<a href=http://"+domainName+">"+domainName+"";
            }
            else{
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