(this["webpackJsonpblog-render-react"]=this["webpackJsonpblog-render-react"]||[]).push([[0],{12:function(e,t,n){e.exports={"blog-main":"singleBlog_blog-main__3AxC2","blog-section":"singleBlog_blog-section__BdyMG","blog-image":"singleBlog_blog-image__2jJ_V","blog-content":"singleBlog_blog-content__2alkq","blog-title":"singleBlog_blog-title__jSa7t","blog-author":"singleBlog_blog-author__1FoTi","aside-link":"singleBlog_aside-link__3sYtl","aside-h2":"singleBlog_aside-h2__3irFk","related-link-list":"singleBlog_related-link-list__3gfv_"}},14:function(e,t,n){e.exports={headerDiv:"Header_headerDiv__2hDxW",headerLogo:"Header_headerLogo__pHUY0",headerNavbar:"Header_headerNavbar__L5A41",headerLink:"Header_headerLink__2SBEi",headerHumberger:"Header_headerHumberger__1_huu"}},15:function(e,t,n){e.exports={"footer-container":"Footer_footer-container__C6OIF","social-icons":"Footer_social-icons__SssMj",facebook:"Footer_facebook__1wMSN",twitter:"Footer_twitter__1Ocid",instagram:"Footer_instagram__3chO0",linkedin:"Footer_linkedin__3xUeG",legal:"Footer_legal__fqJij","no-wrap":"Footer_no-wrap___FMRC"}},16:function(e,t,n){e.exports={"blog-post":"Blogs_blog-post__14feD","blog-container":"Blogs_blog-container__-WVF_","blog-image":"Blogs_blog-image__3fzWQ","blog-header":"Blogs_blog-header__1hSPA","blog-link":"Blogs_blog-link__10nZG"}},26:function(e,t,n){e.exports={errorcontainer:"404Error_errorcontainer__2qSPD","container-img":"404Error_container-img__1Yy7f"}},34:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),s=n.n(c),r=n(24),o=n.n(r);n(34);var i=function(){return Object(a.jsx)("div",{})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},b=n(6),j=n(7),g=n(9),h=n(8),d=n(4),m=n(3),u="https://blog-rendering1.herokuapp.com/blogs/",O=n(16),p=n.n(O),k=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props.blog;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:e.imageUrl,alt:"Blog",className:p.a["blog-image"]}),Object(a.jsx)("h3",{className:p.a["blog-header"],children:e.author})]})}}]),n}(c.Component),x=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={blogs:[],status:""},e.componentDidMount=function(t){fetch(u,{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.setState({blogs:t.data,status:"Successful"})})).catch((function(e){console.log(e)}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:p.a["blog-post"],children:this.state.blogs.map((function(e){return Object(a.jsx)("div",{id:e.id,className:p.a["blog-container"],children:Object(a.jsx)(d.b,{className:p.a["blog-link"],to:"/blogs/".concat(e.id),children:Object(a.jsx)(k,{blog:e})})},e.id)}))})})}}]),n}(c.Component),f=n(28),v=n(12),N=n.n(v),I=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props.blog;return Object(a.jsxs)("main",{className:N.a["blog-main"],children:[Object(a.jsxs)("aside",{className:N.a["aside-link"],children:[Object(a.jsx)("h2",{className:N.a["aside-h2"],children:"Related Links:"}),Object(a.jsx)("div",{children:t.links.map((function(t,n){return Object(a.jsx)("div",{children:Object(a.jsx)(d.b,{to:"/blogs/".concat(t.id),onClick:function(){return e.props.blogById(t.id)},className:N.a["related-link-list"],children:Object(a.jsx)("p",{children:t.title})})},"".concat(t.id," ").concat(n))}))})]}),Object(a.jsxs)("section",{className:N.a["blog-section"],children:[Object(a.jsx)("h1",{className:N.a["blog-title"],children:t.title}),Object(a.jsx)("div",{className:N.a["blog-image"],children:Object(a.jsx)("img",{src:t.imageUrl,alt:t.author})}),Object(a.jsx)("h1",{className:N.a["blog-author"],children:t.author}),Object(a.jsx)("p",{className:N.a["blog-content"],children:t.content})]})]})}}]),n}(c.Component),y=n(26),Z=n.n(y),q=n.p+"static/media/404.2736b473.gif",A=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{style:{marginTop:"100px",marginLeft:"100px"},children:Object(a.jsx)("img",{src:q,className:Z.a["container-image"],alt:"404 Page Not Found"})})}}]),n}(c.Component),S=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={blog:[],status:"",blogId:""},e.componentDidMount=function(t){fetch(u+e.props.match.params.id).then((function(e){return e.json()})).then((function(t){t.data?e.setState({blog:t.data[0],status:"Successful",blogId:e.props.match.params.id}):e.setState({status:"Successful"})})).catch((function(e){console.log(e)}))},e.blogById=function(t){fetch(u+t).then((function(e){return e.json()})).then((function(n){e.setState({blog:n.data[0],status:"Successful",blogId:t})})).catch((function(e){console.log(e)}))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:N.a.container,children:""===this.state.status?Object(a.jsx)("h1",{children:"Loading..."}):"Successful"===this.state.status&&0!==this.state.blog.length?Object(a.jsx)(I,Object(f.a)({blog:this.state.blog,status:this.state.status,blogById:this.blogById},this.props)):Object(a.jsx)(A,{})})}}]),n}(c.Component),z=n(27),J=n(14),Y=n.n(J),T=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:Y.a.headerDiv,children:[Object(a.jsx)("div",{className:Y.a["nav-log"],children:Object(a.jsxs)(d.b,{to:"/",children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:Y.a.headerLogo}),"Blog"]})}),Object(a.jsxs)("p",{className:Y.a.headerNavbar,children:[Object(a.jsx)(d.b,{to:"/",className:Y.a.headerLink,children:"Home"}),Object(a.jsx)(d.b,{to:"/",className:Y.a.headerLink,children:"Contact"}),Object(a.jsx)(d.b,{to:"/",className:Y.a.headerLink,children:"Service"}),Object(a.jsx)(d.b,{to:"/",className:Y.a.headerLink,children:"About us"})]}),Object(a.jsx)(z.a,{className:Y.a.headerHumberger})]})}}]),n}(c.Component),E=n(15),R=n.n(E),V=n(19),M=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:R.a["footer-container"],children:[Object(a.jsxs)("div",{className:R.a["social-icons"],children:[Object(a.jsx)(d.b,{to:"/#",children:Object(a.jsx)(V.d,{className:R.a.twitter})}),Object(a.jsx)(d.b,{to:"/#",children:Object(a.jsx)(V.a,{className:R.a.facebook})}),Object(a.jsx)(d.b,{to:"/#",children:Object(a.jsx)(V.b,{className:R.a.instagram})}),Object(a.jsx)(d.b,{to:"/#",children:Object(a.jsx)(V.c,{className:R.a.linkedin})})]}),Object(a.jsxs)("div",{className:R.a.legal,children:[Object(a.jsx)("p",{className:R.a["no-wrap"],children:"Copyright \xa92020, Blogs. All rights reserved."}),Object(a.jsxs)("p",{className:R.a["no-wrap"],children:[Object(a.jsx)(d.b,{to:"/#",children:"Terms of Service"}),Object(a.jsx)("span",{children:" \xb7 "}),Object(a.jsx)(d.b,{to:"/#",children:"Privacy Policy"})]})]})]})})}}]),n}(c.Component),X=function(e){Object(g.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(T,{}),Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{path:"/react-blog-render",exact:!0,component:x}),Object(a.jsx)(m.a,{path:"/",exact:!0,component:x}),Object(a.jsx)(m.a,{path:"/blogs/:id",exact:!0,component:S}),Object(a.jsx)(m.a,{component:A})]}),Object(a.jsx)(M,{})]})})}}]),n}(c.Component);o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(X,{children:Object(a.jsx)(i,{})})}),document.getElementById("root")),l()}},[[43,1,2]]]);
//# sourceMappingURL=main.ba13e5a9.chunk.js.map