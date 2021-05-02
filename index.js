
var currentSite = window.location.href;
// alert(currentSite)

isValidSite(currentSite)


chrome.contextMenus.create({
  title: 'test',
  onclick: function(e){
      alert("asdasdasdas")
  }

}, function(){})

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

