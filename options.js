var submitButton = document.getElementById("submit");
var addedSiteList = new Array();
var addedQueryList = new Array();

var counter = 0;
submitButton.onclick = function () {
  var addedSite = document.getElementById("siteInput").value;
  var addedQuery = document.getElementById("queryInput").value;
  console.log(addedSite);
  console.log(addedQuery);
  if (addedSite.length == 0) {
    return;
  } else {
    addedSiteList.push(addedSite);
    cacheSites(addedSiteList);
    addItem();
  }
  if (addedQuery.length == 0) {
    return;
  } else {
    addedQueryList.push(addedQuery);
    cacheQuery(addedQueryList);
  }
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

function cacheQuery(query) {
  chrome.storage.sync.set({ queries: query }, function () {});
}
