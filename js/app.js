Vue.config.productionTip = true
var Home = {
	template: `<h2>首页</h2>`
}
var Event = {
	props: ["id"],
	template: `<div>
				<h2>活动{{id}}</h2>
				<router-view></router-view>
			</div>`,
	beforeRouteEnter: function (to, from, next) {
		console.log(to)
		console.log(from)
		next()
	}
}
var Comment = {
	template: `<h3>评论</h3>`
}
//设定路径和组件之间的关系
var routes = [{
		path: "/",
		component: Home,
		name: "homemm"
},
	{
		path: "/home",
		redirect: {
			name: 'homemm'
		}

},
	{
		path: "/events",
		component: Event,
		name:"com"
},
	{
		path: "/events/:id",
		component: Event,
		props: true,
		children: [{
			path: "comments",
			component: Comment
		}]
}]
//新建vuerouter对象，将router关系设置
var router = new VueRouter({
	routes
})
//定义vue实例
var vm = new Vue({
	el: "#app",
	router
})
