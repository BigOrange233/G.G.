var task = document.getElementById('submittask');
var submitButton = document.getElementById('submit');
var querys = document.getElementById('submitquery');
var addedSiteList = new Array();
var addedQueryList = new Array();

var counter= 0;
var taskscount= 0;

task.onclick = function() {
  if(taskscount < 1){
    addItemtask()
    taskscount++
  }else{
    button.disabled = true
  }
};

querys.onclick = function(){
  var addedquery = document.getElementById('queryinput').value
  addedQueryList.push(addedquery)
  cacheQuery(addedQueryList)
  addItemQuery()
};

submitButton.onclick = function() {
  var addedSite = document.getElementById('siteInput').value
  addedSiteList.push(addedSite)
  cacheSites(addedSiteList)
  addItem()
};



function addItemtask(){
  var ul = document.getElementById("tasklist");
  var candidate = document.getElementById("taskinput");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}


function addItem(){
  var ul = document.getElementById("dynamic-list");
  var candidate = document.getElementById("siteInput");
  var li = document.createElement("li");
  li.setAttribute('id',candidate.value);
  li.appendChild(document.createTextNode(candidate.value));
  ul.appendChild(li);
}

function addItemQuery(){
  var ul = document.getElementById("querylist");
  var candidate = document.getElementById("queryinput");
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
  chrome.storage.sync.set({ "sites": addedSiteList }, function(){});

  chrome.storage.sync.get(/* String or Array */["sites"], function(item){
    console.log(item);
  });
}

function cacheQuery(query) {
  chrome.storage.sync.set({ queries: query }, function () {});
}
