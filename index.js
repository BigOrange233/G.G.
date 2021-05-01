
var currentSite = window.location.href;

if(currentSite.includes("https://www.google.com/")) {
  isValidQuery(currentSite)
}
else {
  isValidSite(currentSite) 
}




function isValidSite(currentSite) {

  chrome.storage.sync.get(/* String or Array */["sites"], function(item){
    var sites = item.sites
    if(sites.includes(currentSite) === false) {
      window.location.replace("options.html")
    }
  });

}

function isValidQuery(currentSite) {
  chrome.storage.sync.get(/* String or Array */["queries"], function(item){
    var queries = item.queries
    var i=0;
    var inQueryString = false;
    for(i; i<queries.length; i++) {
      if(currentSite.indexOf(queries[i]) !== -1) {
        inQueryString = true;
        alert(queries[i])
      }
    }

    if(inQueryString === false) {
      window.location.replace("options.html")
    }

  });
}
