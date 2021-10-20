(this["webpackJsonpmusic-react"]=this["webpackJsonpmusic-react"]||[]).push([[5],{314:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var i,c=t(20),a=t(21).a.div(i||(i=Object(c.a)(["\n  height: 29px;\n  background-color: #c20c0c;\n  border-bottom: 1px solid #a40011;\n  .wrap-v1 {\n    height: 100%;\n  }\n  .nav-link {\n    display: flex;\n    height: 100%;\n    padding-left: 180px;\n    li {\n      height: 100%;\n      margin: 0 20px;\n      padding-top: 2px;\n      a {\n        width: 100%;\n        padding: 3px 13px;\n        color: #fff;\n        text-decoration: none;\n        border-radius: 10px;\n        &:hover {\n          background-color: rgba(0, 0, 0, 0.3);\n        }\n      }\n      .active {\n        background-color: rgba(0, 0, 0, 0.3);\n      }\n    }\n  }\n"])))},315:function(n,e,t){"use strict";var i,c=t(30),a=t(0),s=t(19),r=t(20),l=t(21).a.div(i||(i=Object(r.a)(["\n  display: flex;\n  width: 200px;\n  height: 50px;\n  margin-bottom: 15px;\n  line-height: 24px;\n  .playlist-left {\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n  }\n  .playlist-right {\n    margin-left: 10px;\n    .name {\n      width: 140px;\n      a {\n        color: #000;\n        font-size: 14px;\n      }\n    }\n    .creator {\n      .nickname {\n        margin-left: 5px;\n      }\n    }\n  }\n"]))),o=t(4);e.a=Object(a.memo)((function(n){var e=n.info,t=Object(s.g)();function i(n){t.push("/playlist?id="+n)}return Object(o.jsxs)(l,{children:[Object(o.jsx)("div",{className:"playlist-left",onClick:function(n){i(e.id)},children:Object(o.jsx)("img",{src:Object(c.d)(e.coverImgUrl,50),alt:""})}),Object(o.jsxs)("div",{className:"playlist-right",children:[Object(o.jsx)("div",{className:"name text-nowrap",children:Object(o.jsx)("a",{onClick:function(n){i(e.id)},children:e.name})}),Object(o.jsxs)("div",{className:"creator",children:[Object(o.jsx)("span",{children:"by"}),Object(o.jsx)("span",{className:"nickname",children:e.creator&&e.creator.nickname})]})]})]})}))},316:function(n,e,t){"use strict";var i=t(0),c=t(31),a=t(74),s=t(314),r=t(4);e.a=Object(i.memo)((function(){return Object(r.jsx)(s.a,{children:Object(r.jsx)("div",{className:"wrap-v1",children:Object(r.jsx)("ul",{className:"nav-link",children:a.c.map((function(n){return Object(r.jsx)("li",{children:Object(r.jsx)(c.b,{to:n.path,exact:!0,children:n.title})},n.title)}))})})})}))},321:function(n,e,t){"use strict";t.r(e);var i,c=t(32),a=t(0),s=t(25),r=t(316),l=t(20),o=t(21),d=t.p+"static/media/sprite_cover.741609ed.png",p=o.a.div(i||(i=Object(l.a)(["\n  display: flex;\n  width: 980px;\n  border: 1px solid #ccc;\n  border-bottom: 0;\n  border-top: 0;\n  margin: 0 auto;\n  .music-info {\n    display: flex;\n  }\n  .left {\n    width: 709px;\n    padding: 47px 30px 40px 39px;\n\n    .cover {\n      width: 206px;\n\n      .img-wrap {\n        position: relative;\n        width: 206px;\n        height: 205px;\n        background: url(",") no-repeat -140px -580px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        img {\n          position: absolute;\n          z-index: -1;\n          width: 130px;\n          height: 130px;\n        }\n      }\n    }\n    .music-content {\n      margin-left: 25px;\n      .header {\n        padding-left: 40px;\n        margin-bottom: 15px;\n        .music-name {\n          font-size: 24px;\n          color: #333;\n        }\n        .music-desc {\n          color: #bababa;\n          font-size: 14px;\n        }\n      }\n      .singer,\n      .album {\n        margin: 10px 0;\n        color: #999;\n        span {\n          margin-right: 4px;\n        }\n        a {\n          color: #0c73c2;\n        }\n      }\n      .btns {\n        margin-bottom: 20px;\n        display: flex;\n        .play {\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          background-position: 0 -387px;\n          text-align: center;\n          width: 61px;\n          height: 31px;\n          color: #fff;\n          i {\n            display: inline-block;\n            width: 20px;\n            height: 18px;\n            margin: -2px 2px 0;\n            background-position: 0 -1622px;\n          }\n        }\n        .add-icon {\n          display: inline-block;\n          width: 31px;\n          height: 31px;\n          margin-left: -3px;\n          padding-right: 0;\n          background-position: 0 -1588px;\n          text-indent: -9999px;\n        }\n        .item {\n          display: inline-block;\n          height: 31px;\n          margin-right: 6px;\n          padding-right: 5px;\n          background-position: right -1020px;\n          display: flex;\n          align-items: center;\n        }\n        .comment-icon {\n          background-position: 0 -1465px;\n        }\n      }\n      .lyric-content {\n        .open {\n          cursor: pointer;\n          color: #0c73c2;\n          &:hover {\n            text-decoration: underline;\n          }\n        }\n      }\n    }\n  }\n  .right {\n    padding: 20px 40px 40px 30px;\n    width: 270px;\n    border-left: 1px solid #ccc;\n    .related-playList {\n      height: 23px;\n      margin-bottom: 20px;\n      border-bottom: 1px solid #ccc;\n      color: #333;\n      font-weight: 700;\n    }\n  }\n"])),d),x=t(168),j=t(169),b=t(30),h=t(170),m=t(35),g=t(146),u=t(66),O=t(315),f=t(31),v=t(4);e.default=Object(a.memo)((function(n){var e=new URLSearchParams(n.location.search).get("id"),t=Object(a.useState)({}),i=Object(c.a)(t,2),l=i[0],o=i[1],d=Object(a.useState)([]),y=Object(c.a)(d,2),N=y[0],k=y[1],w=Object(a.useState)([]),S=Object(c.a)(w,2),z=S[0],C=S[1],_=Object(a.useState)(!1),L=Object(c.a)(_,2),U=L[0],J=L[1],D=Object(s.d)();return Object(a.useEffect)((function(){Object(x.a)(e).then((function(e){e.songs[0]?o(e.songs[0]):(alert("\u5bf9\u4e0d\u8d77\u60a8\u8bbf\u95ee\u7684\u7f51\u5740\u6709\u95ee\u9898!"),n.history.replace("/"))})),Object(j.a)(e).then((function(n){if(!n.nolyric&&n.lrc){var e=Object(h.a)(n.lrc.lyric);k(e)}else k([])})),Object(u.f)(e).then((function(n){C(n.playlists)}))}),[e,n.history]),Object.keys(l).length&&Object(v.jsxs)("div",{children:[Object(v.jsx)(r.a,{}),Object(v.jsxs)(p,{children:[Object(v.jsx)("div",{className:"left",children:Object(v.jsxs)("div",{className:"music-info",children:[Object(v.jsx)("div",{className:"cover",children:Object(v.jsx)("div",{className:"img-wrap",children:Object(v.jsx)("img",{src:Object(b.d)(l.al.picUrl,130),alt:""})})}),Object(v.jsxs)("div",{className:"music-content",children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("div",{className:"music-name",children:l.name}),Object(v.jsx)("div",{className:"music-desc",children:l.alia[0]})]}),Object(v.jsxs)("div",{className:"singer",children:[Object(v.jsx)("span",{children:"\u6b4c\u624b:"}),Object(v.jsx)(f.b,{to:"/artist?id="+l.ar[0].id,children:l.ar[0].name})]}),Object(v.jsxs)("div",{className:"album",children:[Object(v.jsx)("span",{children:"\u6240\u5c5e\u4e13\u8f91:"}),Object(v.jsx)("a",{children:l.al.name})]}),Object(v.jsxs)("div",{className:"btns",children:[Object(v.jsxs)("a",{className:"sprite_button play",onClick:function(n){n.preventDefault(),D(Object(m.e)(e))},children:[Object(v.jsx)("i",{className:"sprite_button"}),Object(v.jsx)("span",{children:"\u64ad\u653e"})]}),Object(v.jsx)("span",{className:"add-icon sprite_button",children:"+"})]}),Object(v.jsx)("div",{className:"lyric-content",children:N.length?Object(v.jsxs)("ul",{children:[N.slice(0,15).map((function(n){return Object(v.jsx)("li",{children:n.content},n.time)})),U&&N.slice(15).map((function(n){return Object(v.jsx)("li",{children:n.content},n.time)})),Object(v.jsxs)("i",{children:[Object(v.jsx)("span",{className:"open",onClick:function(n){return J(!U)},children:U?"\u6536\u8d77":"\u5c55\u5f00"}),Object(v.jsx)("span",{children:U?"\ud83d\udc46":"\ud83d\udc47"})]})]}):Object(v.jsx)("p",{children:"~\u65e0\u6b4c\u8bcd~"})})]})]})}),Object(v.jsxs)("div",{className:"right",children:[Object(v.jsx)("div",{className:"related-playList",children:"\u5305\u542b\u8fd9\u9996\u6b4c\u7684\u6b4c\u5355"}),z.map((function(n){return Object(v.jsx)(O.a,{info:n},n.id)})),Object(v.jsx)(g.a,{})]})]})]})}))}}]);
//# sourceMappingURL=5.6b50053c.chunk.js.map