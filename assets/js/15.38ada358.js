(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{571:function(t,e,a){"use strict";a.r(e);var l=a(7),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache"}},[t._v("#")]),t._v(" Cache")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"left"}})])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("http cache")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("http缓存")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("client cache")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("客户端缓存")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("disk cache")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("磁盘缓存")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从内存读取数据，kill进程后被清除。多应用于使用频率高的文件（脚本、字体、图片）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("memory cache")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("内存缓存")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("从磁盘中读取数据，kill进程仍旧存在。多应用于使用频率低的文件（html、css)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("304")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("客户端应用缓存文件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})])])]),t._v(" "),a("h2",{attrs:{id:"response-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-headers"}},[t._v("#")]),t._v(" Response Headers")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Expires")]),t._v(" HTTP1.0内容，服务器使用Expires头告诉web client 可以使用副本到指定时间")]),t._v(" "),a("li",[a("code",[t._v("Cache-Control")]),t._v(" 使用"),a("code",[t._v("max-age")]),t._v("指定资源缓多久，解决expires没有固定时间点，客户端和服务端时间可能端误差。一般会和expores两个头一起带上（强缓存）")]),t._v(" "),a("li",[a("code",[t._v("Last-Modified / If-Modified-Since")]),t._v(" 前者是server告诉clinet资源最后修改时间，后者是请求头带上的，上次服务器给client该资源的最后修改时间。比对时间，早于返回304，晚于返回200")]),t._v(" "),a("li",[a("code",[t._v("Etag / If-None_match")]),t._v("由文件修改时间判断文件存在误差（注释等无关紧要等内容修改）。Etag 是server通过特定算法生成等文件唯一表示，请求头通过后者带给server, 比对是否响应新内容。返回304")])]),t._v(" "),a("h2",{attrs:{id:"brower-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brower-cache"}},[t._v("#")]),t._v(" Brower cache")]),t._v(" "),a("ul",[a("li",[t._v("storage 通常有5m空间")])]),t._v(" "),a("h2",{attrs:{id:"service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[t._v("#")]),t._v(" Service")]),t._v(" "),a("ul",[a("li",[t._v("不仅仅是cache, 也是通过workdr进一步优化")]),t._v(" "),a("li",[t._v("基于h5等 web worker， 工作原理：后台线程，不会阻碍js线程执行； 代理请求来缓存文件")]),t._v(" "),a("li",[t._v("网站是否启用，查看 开发工具 Application - service worker")]),t._v(" "),a("li",[t._v("service worker 缓存的文件在 "),a("code",[t._v("Network")]),t._v(" size 显示为 "),a("code",[t._v("from ServiceWorker")])]),t._v(" "),a("li",[t._v("在 Application - cahce 中查看缓存具体内容")]),t._v(" "),a("li",[t._v("断点调试不是在main线程，需要使用对应线程")]),t._v(" "),a("li",[t._v("涉及拦截请求，需要HTTPS协议保障安全。本地调试localhost是可以的")]),t._v(" "),a("li",[t._v("生命周期 installing -> Activeted -> Idle <-> Termintated/Fetch Message")]),t._v(" "),a("li",[t._v("Tools: 原生的sw.js开发比较繁琐和复杂。 google推出的 WorkBox")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://blog.csdn.net/mevicky/article/details/86605882",target:"_blank",rel:"noopener noreferrer"}},[t._v("引用文章"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"object-freeze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-freeze"}},[t._v("#")]),t._v(" Object.freeze")]),t._v(" "),a("p",[t._v("冻结对象，不能对其属性增删修改已有的属性值和原型")])])}),[],!1,null,null,null);e.default=i.exports}}]);