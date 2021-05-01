
var currentSite = window.location.href;

isValidSite(currentSite)



function isValidSite(site) {
  chrome.storage.sync.get(/* String or Array */["sites"], function(item){
    console.log("Hello world");
    alert(item.sites);
  });
}

