(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2LqQd",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__1ZdTm"}},12:function(e,t,a){e.exports={ErrorNotification:"ErrorNotification_ErrorNotification__26I1P",ErrorMessage:"ErrorNotification_ErrorMessage__1Hc4X"}},15:function(e,t,a){e.exports={container:"Container_container__3MASg"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2f_ou"}},17:function(e,t,a){e.exports={Button:"Button_Button__3tnU7"}},19:function(e,t,a){e.exports={Loader:"Loader_Loader__3C-BH"}},26:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__17Luh",SearchForm:"Searchbar_SearchForm__3Svks",SearchFormButton:"Searchbar_SearchFormButton__39--5",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3VGOT",SearchFormInput:"Searchbar_SearchFormInput__1LYn7"}},51:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),o=a(4),s=a.n(o),i=(a(26),a(14)),u=a(3),l=a(15),m=a.n(l);function j(e){var t=e.children;return Object(r.jsx)("div",{className:m.a.container,children:t})}var b=a(5),d=a.n(b);function h(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(u.a)(a,2),o=c[0],s=c[1];return Object(r.jsx)("header",{className:d.a.Searchbar,children:Object(r.jsxs)("form",{className:d.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(o),s("")},children:[Object(r.jsx)("button",{className:d.a.SearchFormButton,type:"submit",children:Object(r.jsx)("span",{className:d.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,value:o,onChange:function(e){s(e.currentTarget.value.toLowerCase())},placeholder:"Search images and photos"})]})})}var f=a(11),g=a.n(f);function O(e){var t=e.src,a=e.largeImageURL,n=e.alt,c=e.onOpenModal;return Object(r.jsx)("li",{className:g.a.ImageGalleryItem,children:Object(r.jsx)("img",{src:t,"data-source":a,alt:n,width:"200",onClick:c,className:g.a.ImageGalleryItemImage})})}var p=a(16),_=a.n(p);function S(e){var t=e.images,a=e.onOpenModal;return Object(r.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,c=e.largeImageURL,o=e.tags;return Object(r.jsx)(O,{src:n,largeImageURL:c,onOpenModal:a,alt:o},t)}))})}var v=a(17),x=a.n(v);function I(e){var t=e.onLoadMore;return Object(r.jsx)("button",{type:"button",onClick:t,className:x.a.Button,children:"Load more"})}var y=a(18),N=a.n(y),w=a(19),L=a.n(w);function E(){return Object(r.jsx)("div",{className:L.a.Loader,children:Object(r.jsx)(N.a,{type:"TailSpin",color:"#00BFFF",height:90,width:90})})}var M=a(9),F=a.n(M),B=document.querySelector("#modal-root");function k(e){var t=e.largeImageURL,a=e.alt,c=e.onClose;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&c()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[c]);return Object(o.createPortal)(Object(r.jsx)("div",{className:F.a.Overlay,onClick:function(e){e.currentTarget===e.target&&c()},children:Object(r.jsx)("div",{className:F.a.Modal,children:Object(r.jsx)("img",{className:F.a.ModalImage,src:t,alt:a})})}),B)}var G=a(12),C=a.n(G),U=a.p+"static/media/error.824d72e0.png";function q(e){var t=e.message;return Object(r.jsxs)("div",{className:C.a.ErrorNotification,children:[Object(r.jsxs)("p",{className:C.a.ErrorMessage,children:[" ",t," "]}),Object(r.jsx)("img",{src:U,alt:"error",width:"500"})]})}var R=a(13),T=a.n(R),H=a(20),J="18468929-778868d20e0ea2a779d7d4913",P="https://pixabay.com/api";function z(){return(z=Object(H.a)(T.a.mark((function e(t,a){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(P,"/?q=").concat(t,"&page=").concat(a,"&key=").concat(J,"&image_type=photo&orientation=horizontal&per_page=12"));case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A={fetchImages:function(e,t){return z.apply(this,arguments)}},D=a(7);a(49);function Q(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),l=s[0],m=s[1],b=Object(n.useState)(1),d=Object(u.a)(b,2),f=d[0],g=d[1],O=Object(n.useState)(""),p=Object(u.a)(O,2),_=p[0],v=p[1],x=Object(n.useState)(""),y=Object(u.a)(x,2),N=y[0],w=y[1],L=Object(n.useState)(!1),M=Object(u.a)(L,2),F=M[0],B=M[1],G=Object(n.useState)(!1),C=Object(u.a)(G,2),U=C[0],R=C[1],T=Object(n.useState)(0),H=Object(u.a)(T,2),J=H[0],P=H[1],z=Object(n.useState)(null),Q=Object(u.a)(z,2),V=Q[0],X=Q[1];Object(n.useEffect)((function(){if(a){B(!0),A.fetchImages(a,f).then((function(e){var t=e.hits,r=e.total;" "!==a?0!==r?(1===f&&Object(D.b)("\u2728 ".concat(r," images was found.")),m((function(e){return[].concat(Object(i.a)(e),Object(i.a)(t))})),P(r-l.length)):D.b.dark("\ud83d\ude1e Nothing was found. Enter another query."):D.b.info("\ud83d\udd25 Enter valid query.")})).catch((function(e){X("Something is wrong. ".concat(e))})).finally((function(){B(!1)}))}}),[f,a]);var Y=function(){setTimeout((function(){window.scrollBy({top:document.documentElement.clientHeight-150,behavior:"smooth"})}),1e3)},Z=function(){R(!U)};return Object(r.jsxs)(j,{children:[Object(r.jsx)(h,{onSubmit:function(e){c(e),m([]),g(1),P(0),X(null)}}),Object(r.jsx)(S,{query:a,page:f,images:l,onOpenModal:function(e){var t=e.target.dataset.source,a=e.target.alt;v(t),w(a),Z()}}),F&&Object(r.jsx)(E,{}),J>11&&Object(r.jsx)(I,{onLoadMore:function(){g((function(e){return e+1})),Y()}}),U&&Object(r.jsx)(k,{largeImageURL:_,alt:N,onClose:Z}),V&&Object(r.jsx)(q,{message:V}),Object(r.jsx)(D.a,{})]})}a(50);s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1Npel",Modal:"Modal_Modal__2hSgS"}}},[[51,1,2]]]);
//# sourceMappingURL=main.286f74d4.chunk.js.map