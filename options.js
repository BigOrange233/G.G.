var task = document.getElementById('submittask');
var submitButton = document.getElementById('submit');

var addedSiteList = new Array();

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


