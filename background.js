
// Chrome's downloads will be cleared out every 15 seconds.
var interval;
var settings;
var reloadInterval;
var reInit = (1.5 * 60 * 60 * 1000);
// The initialization routine is called only once.

onload = setTimeout(loadEverything, 1000);

chrome.storage.onChanged.addListener(function (changes, namespace) {
	console.log("storage changed");
	loadEverything();
});

function loadEverything() {
	console.log("load everything");
	setupContextMenus();
}

function setupContextMenus() {
	chrome.contextMenus.removeAll();

	chrome.contextMenus.create({
		title: "Change Options",
		"contexts": ["browser_action"],
		onclick: function (info, tab) {
			chrome.tabs.create({ url: 'options.html' });
		}
	});
}






function openOrFocusOptionsPage() {
	var optionsUrl = chrome.extension.getURL('options.html');
	chrome.tabs.query({}, function (extensionTabs) {
		var found = false;
		for (var i = 0; i < extensionTabs.length; i++) {
			if (optionsUrl == extensionTabs[i].url) {
				found = true;
				console.log("tab id: " + extensionTabs[i].id);
				chrome.tabs.update(extensionTabs[i].id, { "selected": true });
			}
		}
		if (found == false) {
			chrome.tabs.create({ url: "options.html" });
		}
	});
}
chrome.extension.onConnect.addListener(function (port) {
	var tab = port.sender.tab;
	// This will get called by the content script we execute in
	// the tab as a result of the user pressing the browser action.
	port.onMessage.addListener(function (info) {
		var max_length = 1024;
		if (info.selection.length > max_length) info.selection = info.selection.substring(0, max_length);
		openOrFocusOptionsPage();
	});
});

chrome.browserAction.onClicked.addListener(function (tab) {
	openOrFocusOptionsPage();
});

