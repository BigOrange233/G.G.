
var currentSite = window.location.href;
// alert(currentSite)

isValidSite(currentSite)



function isValidSite(currentSite) {

  chrome.storage.sync.get(/* String or Array */["sites"], function(item){
    var sites = item.sites
    // alert(sites)
  

    // var i;
    // for(i=0; i < sites.length; i++) {
    //   alert(sites[i]);
    // }
    if(sites.includes(currentSite) === false) {
      alert("not the same")
      window.location.replace("http://thequalitybydesign.com")
    }
  });

}

