(this["webpackJsonpmusic-react"]=this["webpackJsonpmusic-react"]||[]).push([[4],{314:function(n,t,i){"use strict";i.d(t,"a",(function(){return a}));var e,c=i(20),a=i(21).a.div(e||(e=Object(c.a)(["\n  height: 29px;\n  background-color: #c20c0c;\n  border-bottom: 1px solid #a40011;\n  .wrap-v1 {\n    height: 100%;\n  }\n  .nav-link {\n    display: flex;\n    height: 100%;\n    padding-left: 180px;\n    li {\n      height: 100%;\n      margin: 0 20px;\n      padding-top: 2px;\n      a {\n        width: 100%;\n        padding: 3px 13px;\n        color: #fff;\n        text-decoration: none;\n        border-radius: 10px;\n        &:hover {\n          background-color: rgba(0, 0, 0, 0.3);\n        }\n      }\n      .active {\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n    }\n  }\n"])))},315:function(n,t,i){"use strict";var e,c=i(30),a=i(0),s=i(19),r=i(20),l=i(21).a.div(e||(e=Object(r.a)(["\n  display: flex;\n  width: 200px;\n  height: 50px;\n  margin-bottom: 15px;\n  line-height: 24px;\n  .playlist-left {\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n  .playlist-right {\n    margin-left: 10px;\n    .name {\n      width: 140px;\n      a {\n        color: #000;\n        font-size: 14px;\n      }\n    }\n    .creator {\n      .nickname {\n        margin-left: 5px;\n      }\n    }\n  }\n"]))),p=i(4);t.a=Object(a.memo)((function(n){var t=n.info,i=Object(s.g)();function e(n){i.push("/playlist?id="+n)}return Object(p.jsxs)(l,{children:[Object(p.jsx)("div",{className:"playlist-left",onClick:function(n){e(t.id)},children:Object(p.jsx)("img",{src:Object(c.d)(t.coverImgUrl,50),alt:""})}),Object(p.jsxs)("div",{className:"playlist-right",children:[Object(p.jsx)("div",{className:"name text-nowrap",children:Object(p.jsx)("a",{onClick:function(n){e(t.id)},children:t.name})}),Object(p.jsxs)("div",{className:"creator",children:[Object(p.jsx)("span",{children:"by"}),Object(p.jsx)("span",{className:"nickname",children:t.creator&&t.creator.nickname})]})]})]})}))},316:function(n,t,i){"use strict";var e=i(0),c=i(31),a=i(74),s=i(314),r=i(4);t.a=Object(e.memo)((function(){return Object(r.jsx)(s.a,{children:Object(r.jsx)("div",{className:"wrap-v1",children:Object(r.jsx)("ul",{className:"nav-link",children:a.c.map((function(n){return Object(r.jsx)("li",{children:Object(r.jsx)(c.b,{to:n.path,exact:!0,children:n.title})},n.title)}))})})})}))},323:function(n,t,i){"use strict";i.r(t);var e,c=i(32),a=i(0),s=i(316),r=i(66),l=i(20),p=i(21).a.div(e||(e=Object(l.a)(["\n  width: 980px;\n  margin: 0 auto;\n  display: flex;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  .left {\n    width: 709px;\n    .play-list-wrap {\n      margin-top: 40px;\n    }\n    .top {\n      display: flex;\n    }\n    padding: 47px 30px 40px 39px;\n    .img-wrap {\n      width: 190px;\n      height: 190px;\n      img {\n        width: 100%;\n        height: 100%;\n      }\n    }\n    .playlist-info {\n      flex: 1;\n      margin-left: 20px;\n\n      .title {\n        font-size: 20px;\n        display: flex;\n        align-items: center;\n        margin-bottom: 10px;\n        i {\n          display: inline-block;\n          width: 54px;\n          height: 24px;\n          background-position: 0 -243px;\n          margin-right: 10px;\n        }\n      }\n      .info {\n        display: flex;\n        align-items: center;\n        a {\n          margin-right: 15px;\n          color: #0c73c2;\n        }\n        img {\n          width: 35px;\n          height: 35px;\n          margin-right: 10px;\n        }\n      }\n      .add-icon {\n        display: inline-block;\n        width: 31px;\n        height: 31px;\n        margin-left: -3px;\n        padding-right: 0;\n        background-position: 0 -1588px;\n        text-indent: -9999px;\n      }\n      .btns {\n        margin: 20px 0;\n        display: flex;\n        .play {\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          background-position: 0 -387px;\n          text-align: center;\n          width: 61px;\n          height: 31px;\n          color: #fff;\n          i {\n            display: inline-block;\n            width: 20px;\n            height: 18px;\n            margin: -2px 2px 0;\n            background-position: 0 -1622px;\n          }\n        }\n        .add-icon {\n          display: inline-block;\n          width: 31px;\n          height: 31px;\n          margin-left: -3px;\n          padding-right: 0;\n          background-position: 0 -1588px;\n          text-indent: -9999px;\n        }\n        .item {\n          display: inline-block;\n          height: 31px;\n          margin-right: 6px;\n          padding-right: 5px;\n          background-position: right -1020px;\n          display: flex;\n          align-items: center;\n        }\n        .comment-icon {\n          background-position: 0 -1465px;\n        }\n      }\n      .tags {\n      }\n    }\n  }\n  .right {\n    width: 270px;\n    border-left: 1px solid #ccc;\n    padding: 20px 40px 40px 30px;\n    .related-playList {\n      height: 23px;\n      margin-bottom: 20px;\n      border-bottom: 1px solid #ccc;\n      color: #333;\n      font-weight: 700;\n    }\n  }\n  .description {\n    max-height: 100px;\n    overflow-y: auto;\n    padding-right: 4px;\n    ::-webkit-scrollbar {\n      width: 8px;\n    }\n    ::-webkit-scrollbar-thumb {\n      background-color: rgba(0, 0, 0, 0.2);\n      border-radius: 5px;\n    }\n  }\n"]))),d=i(313),o=i(30),x=i(145),h=i(25),j=i(35),b=i(146),g=i(315),m=i(4);t.default=Object(a.memo)((function(n){var t=new URLSearchParams(n.location.search).get("id"),i=Object(a.useState)({creator:{},tags:[]}),e=Object(c.a)(i,2),l=e[0],O=e[1],f=Object(a.useState)([]),u=Object(c.a)(f,2),v=u[0],y=u[1],k=Object(a.useState)([]),w=Object(c.a)(k,2),N=w[0],S=w[1],U=Object(h.d)();return Object(a.useEffect)((function(){Object(r.c)(t).then((function(n){O(n.playlist);var t=n.playlist.trackIds.map((function(n){return n.id}));Object(r.d)(t).then((function(n){n.songs&&S(n.songs)}))})),Object(r.e)(t).then((function(n){y(n.playlists)}))}),[t]),Object(m.jsxs)("div",{children:[Object(m.jsx)(s.a,{}),Object(m.jsxs)(p,{children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsxs)("div",{className:"top",children:[Object(m.jsx)("div",{className:"img-wrap",children:Object(m.jsx)("img",{src:Object(o.d)(l.coverImgUrl,180),alt:""})}),Object(m.jsxs)("div",{className:"playlist-info",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)("i",{className:"sprite_icon2"}),Object(m.jsx)("span",{children:l.name})]}),Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("a",{children:[Object(m.jsx)("img",{src:Object(o.d)(l.creator.avatarUrl,40),alt:""}),Object(m.jsx)("span",{children:l.creator.nickname})]}),Object(m.jsx)("span",{className:"time",children:"2019-12-26 \u521b\u5efa"})]}),Object(m.jsxs)("div",{className:"btns",children:[Object(m.jsxs)("a",{href:"",className:"sprite_button play",onClick:function(n){n.preventDefault(),N.length&&(U(Object(j.d)(N)),U(Object(j.e)(N[0].id)))},children:[Object(m.jsx)("i",{className:"sprite_button"}),Object(m.jsx)("span",{children:"\u64ad\u653e"})]}),Object(m.jsx)("span",{className:"add-icon sprite_button",children:"+"})]}),Object(m.jsxs)("div",{className:"tags",children:[Object(m.jsx)("span",{children:"\u6807\u7b7e: "}),l.tags.map((function(n){return Object(m.jsx)(d.a,{children:n},n)}))]}),Object(m.jsx)("div",{className:"description",children:Object(m.jsxs)("span",{children:["\u4ecb\u7ecd: ",l.description]})})]})]}),Object(m.jsx)("div",{className:"play-list-wrap",children:Object(m.jsx)(x.a,{songs:N})})]}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)("div",{className:"related-playList",children:"\u63a8\u8350\u6b4c\u5355"}),v.map((function(n){return Object(m.jsx)(g.a,{info:n},n.id)})),Object(m.jsx)(b.a,{})]})]})]})}))}}]);
//# sourceMappingURL=4.9a35013e.chunk.js.map