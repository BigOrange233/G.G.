
var currentSite = window.location.href;

if(String(currentSite) == "http://thequalitybydesign.com") {
  alert("this is the site")
}
else if(currentSite.includes("https://www.google.com/")) {
  isValidQuery(currentSite)
}
else {
  isValidSite(currentSite) 
}

function isValidSite(currentSite) {

  chrome.storage.sync.get(/* String or Array */["sites"], function(item){
    var sites = item.sites
    if(sites.includes(currentSite) === false) {
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
      alert(queries[i])

      // if(String(currentSite).indexOf(queries[i]) !== -1) {
      //   inQueryString = true;
      // }
    }

    // if(inQueryString === false) {
    //   window.location.replace("http://thequalitybydesign.com")
    // }

  });
}
