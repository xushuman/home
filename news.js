Vue.config.productionTip = true

var Home = {
    template: `<div>
       <div style='width:200px;height:200px;background:blue'>文章列表</div>
       <div style='width:200px;float:right;height:200px;background:blue;margin-top:-200px;'>视频列表</div>
    </div>`
}
var New = {
    template: `<div style="text-align:center">
<p>新闻条目</p> 
<p>新闻条目</p> 
<p>新闻条目</p> 
</div>`
}
var Vido = {
    template: `<div>
<nav>广告栏</nav>
<p> 视频内容</p>
</div>`
}

var routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/new",
        component: New
    },
    {
        path: "/vido",
        component: Vido
    }
]

var router = new VueRouter({
    routes
})

var app = new Vue({
    el: "#app",
    router
})
