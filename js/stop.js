console.log("StopMining By TuziMoe");
chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        return {cancel: true};
    },
    {urls: [
            "*://coinhive.com/lib/*",
            "*://cryptoloot.pro/lib/*",
            "*://cdn.inwemo.com/*",
            "*://coin-have.com/c/*",
            "*://load.jsecoin.com/load/*",
            "*://minero.cc/lib/*",
            "*://ppoi.org/lib/*",
            "*://webmine.cz/*"
            //"*://coinlab.biz/lib/*",个人感觉Coinlab用户通知做的不错
           ]
    },
    [
        "blocking"
    ]
);
