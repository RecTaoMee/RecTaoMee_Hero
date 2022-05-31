// 添加到收藏夹
function addBookmark(title,url) {
    if(window.sidebar) {
        window.sidebar.addPanel(title, url,"");
    }else if(window.external && ('AddFavorite' in window.external)) {
        window.external.AddFavorite(url, title);
    }else {
        alert('请使用 Ctrl+D 添加到收藏夹');
    }
}

function getUrlParams() {
    var args = new Object();
    var query = location.search.substring(1);
    var pairs = query.split("&");

    for(var i = 0; i < pairs.length; i++) {
        var pos = pairs[i].indexOf('=');
        if(pos == -1) {
            continue;
        }

        var argname = pairs[i].substring(0,pos);
        var value = pairs[i].substring(pos + 1);
        args[argname] = unescape(value);
    }
    if(window.session) {
        args['sid'] = window.session;
    }
    return args;
}
function getSessionID() {
    var params = getUrlParams() ;
    var sid = params['sid'] ;
    return sid;
}
function getSign() {
    var params = getUrlParams() ;
    var sign = params['sign'] ;
    return sign;
}

function getHostname(){
    if(self != top){
        var tmp = document.createElement('a');
        tmp.href = document.referrer;
        return tmp.hostname;
    }else{
        return location.hostname;
    }
}