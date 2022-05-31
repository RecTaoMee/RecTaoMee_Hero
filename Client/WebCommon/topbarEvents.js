
	//添加收藏
	$('#j_addFav').bind('click',function() {
		var title = document.title,
			url = window.location.href;
		if (window.sidebar) {
            window.sidebar.addPanel(title, url, "");
        } else if (window.external && ('AddFavorite' in window.external)) {
            window.external.AddFavorite(url, title);
        } else {
            alert('请使用 Ctrl+D 添加到收藏夹');
        }
	})	