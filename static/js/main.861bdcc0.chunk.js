(this.webpackJsonpCCBCheck=this.webpackJsonpCCBCheck||[]).push([[0],{47:function(e,t,a){e.exports=a(74)},52:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),s=(a(52),a(12)),i=a(13),l=a(15),u=a(14),h=a(93),m=a(95),d=a(96),p=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{position:"sticky"},r.a.createElement(m.a,null,r.a.createElement(d.a,{variant:"h6"},"CC Bathroom Check")))}}]),a}(n.Component),v=a(23),b=a(75),f=a(99),O=a(98),C=a(97),k=a(100),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={switchStatus:Boolean(!n.props.statusSimple)},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"stretch",style:{padding:20}},r.a.createElement(b.a,{style:{padding:15}},this.props.bathroom_name),r.a.createElement(b.a,{style:{padding:15}},this.props.status),r.a.createElement(k.a,{checked:this.state.switchStatus,onChange:function(){console.log("Switch"),e.props.switchHandler(e.props.bathroom_name,e.props.dorm),e.setState({switchStatus:!e.state.switchStatus})}}))}}]),a}(r.a.Component);function E(e){var t="Occupied";switch(e){case 0:t="Occupied";break;case 1:t="Unoccupied"}return t}var g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(C.a,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",style:{padding:20}},this.props.bathroomJSON.map((function(t,a){return r.a.createElement(y,{key:a,bathroom_name:t.name,dorm:e.props.dorm,status:E(t.status),statusSimple:t.status,switchHandler:e.props.switchHandler})})))}}]),a}(r.a.Component),S=a(28),j=a.n(S);function w(e){var t="Err: No Index";switch(console.log(e),e){case 0:t="Loomis";break;case 1:t="Mathias";break;case 2:t="South"}return t}var B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:0,bathroomJSON:[],renderBathrooms:!0,dorm:""},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"getBathrooms",value:function(e){var t=this;j.a.get("https://ccbcb.herokuapp.com/CC/"+e).then((function(e){Array.isArray(e.data)?t.setState({bathroomJSON:e.data,renderBathrooms:!0}):t.setState({renderBathrooms:!1})}))}},{key:"postStatus",value:function(e,t,a){j.a.post("https://ccbcb.herokuapp.com/CC/"+t+"/"+e).then((function(e){console.log("POST Status res: "+e)}))}},{key:"handleChange",value:function(e,t){var a=this;this.setState({value:t,dorm:w(t)},(function(){a.getBathrooms(a.state.dorm)}))}},{key:"componentDidMount",value:function(){var e=this;this.setState({dorm:w(0)}),this.interval=setInterval((function(){e.getBathrooms(e.state.dorm)}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e;this.state.renderBathrooms;return e=this.state.renderBathrooms?r.a.createElement(g,{bathroomJSON:this.state.bathroomJSON,switchHandler:this.postStatus,dorm:this.state.dorm}):r.a.createElement("p",null,"No Bathrooms"),r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(f.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(O.a,{label:"Loomis"}),r.a.createElement(O.a,{label:"Mathias"}),r.a.createElement(O.a,{label:"South"}))),e)}}]),a}(n.Component),N=(a(73),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(p,null),r.a.createElement(B,null)))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.861bdcc0.chunk.js.map