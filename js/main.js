	chrome.tabs.getSelected(null, function (tab) {
        $('#code').qrcode(tab.url);
    });
	
