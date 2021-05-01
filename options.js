
var submitButton = document.getElementById('submit');

var addedSiteList = new Array();

submitButton.onclick = function() {
  var addedSite = document.getElementById('siteInput').value
  addedSiteList.push(addedSite)
  cacheSites(addedSiteList)
};


function cacheSites(site) {
  localStorage.setItem("sites", JSON.stringify(addedSiteList));

  var siteList = JSON.parse(localStorage.getItem("sites"));
  alert(siteList)

}
