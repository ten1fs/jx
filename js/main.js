function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = decodeURIComponent(r[2]);
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

window.onload = function () {
    const url = getQueryString('url');
    if (url !== '') {
        const htmlString = `<iframe width="100%" height="100%" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen="true" src="https://api.okjx.cc:3389/jx.php?url=${url}" autoplay="true"></iframe>`;
        document.body.innerHTML = htmlString;
    } else {
        fetch('https://jx-api.vercel.app/api/vbg')
        .then(response => response.json())
        .then(data => {
            const videoUrl = data.data;
            document.getElementById('video').setAttribute('src', videoUrl);
        });
    }
}
