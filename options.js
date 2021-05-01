
var submitButton = document.getElementById('submit');

var addedSiteList = new Array();

submitButton.onclick = function() {
  var addedSite = document.getElementById('siteInput').value
  addedSiteList.push(addedSite)
  cacheSites(addedSiteList)
};


function cacheSites(site) {
  // localStorage.setItem("sites", JSON.stringify(addedSiteList));

  chrome.storage.sync.set({ "sites": addedSiteList }, function(){});


  // var siteList = JSON.parse(localStorage.getItem("sites"));
  chrome.storage.sync.get(/* String or Array */["sites"], function(item){
    console.log(item);
    alert(item.sites);
  });


}
