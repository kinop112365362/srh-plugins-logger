(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{115:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var l=t(0),n=t.n(l),s=t(108),r=t(111),i=t(56),c=t.n(i);function m({sidebar:e}){return 0===e.items.length?null:n.a.createElement("div",{className:Object(s.a)(c.a.sidebar,"thin-scrollbar")},n.a.createElement("h3",{className:c.a.sidebarItemTitle},e.title),n.a.createElement("ul",{className:c.a.sidebarItemList},e.items.map((e=>n.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},n.a.createElement(r.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))))))}},69:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(112),r=t(111),i=t(115),c=t(110);a.default=function(e){const{tags:a,sidebar:t}=e,l={};Object.keys(a).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e);l[a]=l[a]||[],l[a].push(e)}));const m=Object.entries(l).sort((([e],[a])=>e===a?0:e>a?1:-1)).map((([e,t])=>n.a.createElement("div",{key:e},n.a.createElement("h3",null,e),t.map((e=>n.a.createElement(r.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")"))),n.a.createElement("hr",null)))).filter((e=>null!=e));return n.a.createElement(s.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_list"}},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--3"},n.a.createElement(i.a,{sidebar:t})),n.a.createElement("main",{className:"col col--7"},n.a.createElement("h1",null,n.a.createElement(c.a,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),n.a.createElement("div",{className:"margin-vert--lg"},m)))))}}}]);