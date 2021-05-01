// let page = document.getElementById('buttonDiv');
// const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
// function constructOptions(kButtonColors) {
//   for (let item of kButtonColors) {
//     let button = document.createElement('button');
//     button.style.backgroundColor = item;
//     button.addEventListener('click', function() {
//       chrome.storage.sync.set({color: item}, function() {
//         console.log('color is ' + item);
//       })
//     });
//     page.appendChild(button);
//   }
// }
// constructOptions(kButtonColors);

var submitButton = document.getElementById('submit');

var blockedSiteList = new Array("Andrew");

submitButton.onclick = function() {
  var addedSite = document.getElementById('siteInput').value
  blockedSiteList.push(addedSite)
  alert(blockedSiteList)
  alert(addedSite)
};


function cacheSites(site) {
  chrome.runtime.onInstalled.addListener(function() {

    
  });
}
