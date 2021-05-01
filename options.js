var submitButton = document.getElementById("submit");
var addedSiteList = new Array();

var counter = 0;
submitButton.onclick = function () {
  var addedSite = document.getElementById("siteInput").value;
  if (addedSite.length == 0) {
    return;
  }
  addedSiteList.push(addedSite);
  cacheSites(addedSiteList);
  addItem();
};

function addItem() {
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("siteInput");
  var li = document.createElement("li");
  li.setAttribute("id", candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}

function cacheSites(site) {
  chrome.storage.sync.set({ sites: site }, function () {});

  chrome.storage.sync.get(/* String or Array */ ["sites"], function (item) {
    alert(item.sites);
  });
}
