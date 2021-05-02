
var currentSite = window.location.href;

if(window.location.href == "http://thequalitybydesign.com") {
  // alert("this is the site");
  window.stop();
}
else if(currentSite.includes("https://www.google.com/")) {
  isValidQuery(currentSite)
}
else {
  isValidSite(currentSite) 
}

function isValidSite(currentSite) {

  chrome.storage.sync.get(/* String or Array */["sites"], function(item){
    var validSite = false
    var sites = item.sites
    var i=0
    for(i; i<sites.length; i++) {
      if(String(currentSite).indexOf(sites[i]) !== -1) {
        validSite = true;
      }
    }

    if(validSite === false) {
      window.location.replace("http://thequalitybydesign.com")
    }
  });

}

function isValidQuery(currentSite) {
  chrome.storage.sync.get(/* String or Array */["queries"], function(item){
    var queries = item.queries
    var i=0;
    var inQueryString = false;
    for(i; i<queries.length; i++) {
      if(String(currentSite).indexOf(queries[i]) !== -1) {
        inQueryString = true;
      }
    }

    if(inQueryString === false) {
      window.location.replace("http://thequalitybydesign.com")
    }

  });
}
