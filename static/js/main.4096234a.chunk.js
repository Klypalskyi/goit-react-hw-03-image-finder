(window["webpackJsonpgoit-react-hw-03-image-finder"]=window["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,a,t){e.exports={app:"App_app__3S5YI"}},2:function(e,a,t){e.exports={photoCard:"PhotoCard_photoCard__19rje",stats:"PhotoCard_stats__1TdpB",statsItem:"PhotoCard_statsItem__22OHI",fullscreenButton:"PhotoCard_fullscreenButton__3y43j"}},21:function(e,a,t){e.exports={searchForm:"SearchForm_searchForm__2oluZ"}},25:function(e,a,t){e.exports=t(47)},4:function(e,a,t){e.exports={gallery:"Gallery_gallery__2V0F1",button:"Gallery_button__1nm_E"}},47:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(15),l=t.n(r),c=t(16),s=t.n(c),i=t(17),m=t(22),d=t(18),u=t(19),p=t(23),h=t(20),g=t(24),f=t(3),_=t.n(f),v=t(21),E=t.n(v),b=function(e){var a=e.search,t=e.onChange,n=e.onSubmit;return o.a.createElement("form",{className:E.a.searchForm,onSubmit:n},o.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images...",value:a,name:"search",onChange:t}))},y=t(4),w=t.n(y),C=t(2),M=t.n(C),k=function(e){var a=e.id,t=e.webformatURL,n=e.largeImageURL,r=e.likes,l=e.views,c=e.comments,s=e.downloads,i=e.openModal;return o.a.createElement("div",{className:M.a.photoCard,id:a},o.a.createElement("img",{src:t,alt:""}),o.a.createElement("div",{className:M.a.stats},o.a.createElement("p",{className:M.a.statsItem},o.a.createElement("i",{className:"material-icons"},"thumb_up"),r),o.a.createElement("p",{className:M.a.statsItem},o.a.createElement("i",{className:"material-icons"},"visibility"),l),o.a.createElement("p",{className:M.a.statsItem},o.a.createElement("i",{className:"material-icons"},"comment"),c),o.a.createElement("p",{className:M.a.statsItem},o.a.createElement("i",{className:"material-icons"},"cloud_download"),s)),o.a.createElement("button",{type:"button",className:M.a.fullscreenButton,onClick:function(){i(n)},name:"modal-button"},o.a.createElement("i",{className:"material-icons"},"zoom_out_map")))},N=function(e){var a=e.images,t=e.onFetchMore,n=e.openModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:w.a.gallery},a.map(function(e){return o.a.createElement(k,Object.assign({key:e.id},e,{openModal:n}))})),o.a.createElement("button",{type:"button",name:"load-more",className:w.a.button,onClick:t},"Load more"))},I=t(5),F=t.n(I),S=function(e){var a=e.pickedImg,t=e.onCloseModal;return o.a.createElement("div",{className:F.a.overlay,onClick:t,role:"presentation"},o.a.createElement("div",{className:F.a.modal},o.a.createElement("img",{src:a,alt:"some from pixabay"})))},j="13839766-460ea5cbfd5c036a6d520e55a",x=function(e){var a=[];return e.map(function(e){var t={id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads};return a.push(t)}),a},O=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(o)))).state={search:"",images:[],isModal:!1},t.handleFetch=function(e){e.preventDefault();var a=t.state.search,n="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(a,"&page=").concat(1,"&per_page=12&key=").concat(j);_.a.get(n).then(function(e){var a=e.data.hits,n=x(a);t.setState({images:n,page:2,scrollPoint:0})})},t.handleFetchMore=function(e){var a=e.target,n=t.state,o=n.search,r=n.page+1,l="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(o,"&page=").concat(r,"&per_page=12&key=").concat(j);_.a.get(l).then(function(e){var n=e.data.hits,o=x(n),l=a.offsetTop;t.setState(function(e){return{images:Object(m.a)(e.images).concat(o),page:r,scrollPoint:l}})})},t.handleChange=function(e){var a=e.target,n=a.name,o=a.value;t.setState(Object(i.a)({},n,o))},t.handleModal=function(e){t.setState({isModal:!0,pickedImg:e}),window.addEventListener("keyup",function(e){"Escape"===e.key&&t.setState({isModal:!1})})},t.handleCloseModal=function(e){"img"!==e.target.localName&&t.setState({isModal:!1})},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=a.images,n=this.state.images;if(t.length!==n.length&&0!==t.length){var o=this.state.scrollPoint;window.scrollTo({top:o,behavior:"smooth"})}}},{key:"render",value:function(){var e=this.state,a=e.search,t=e.images,n=e.isModal,r=e.pickedImg;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{search:a,onChange:this.handleChange,onSubmit:this.handleFetch}),t.length>0?o.a.createElement(N,{images:t,onFetchMore:this.handleFetchMore,openModal:this.handleModal}):null,n&&o.a.createElement(S,{pickedImg:r,onCloseModal:this.handleCloseModal}))}}]),a}(n.Component),L=function(){return o.a.createElement("div",{className:s.a.app},o.a.createElement(O,null))};l.a.render(o.a.createElement(L,null),document.getElementById("root"))},5:function(e,a,t){e.exports={overlay:"Modal_overlay__D9tIn",modal:"Modal_modal__2Vvrv"}}},[[25,1,2]]]);
//# sourceMappingURL=main.4096234a.chunk.js.map