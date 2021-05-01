
var submitButton = document.getElementById('submit');
var deleteButton = document.getElementById('deletebutton');
var addedSiteList = new Array();

var counter= 0;
submitButton.onclick = function() {
  var addedSite = document.getElementById('siteInput').value
  addedSiteList.push(addedSite)
  cacheSites(addedSiteList)
  addItem()
};





function addItem(){
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("siteInput");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}

function removeItem(){
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("siteInput");
  var item = document.getElementById(candidate.value);
  ul.removeChild(item);
}

function cacheSites(site) {
  // localStorage.setItem("sites", JSON.stringify(addedSiteList));

  chrome.storage.sync.set({ "sites": addedSiteList }, function(){});


  // var siteList = JSON.parse(localStorage.getItem("sites"));
  chrome.storage.sync.get(/* String or Array */["sites"], function(item){
    console.log(item);
    alert(item.sites);
  });


}


