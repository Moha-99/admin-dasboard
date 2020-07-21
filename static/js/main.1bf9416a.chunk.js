(this["webpackJsonpreact-stdby"]=this["webpackJsonpreact-stdby"]||[]).push([[0],{33:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),l=a.n(c),s=(a(38),a(9)),u=a(11),o=a.n(u),m=a(18),i=function(){return{type:"SET_LOADING"}},d=a(10),E=a(14),p=Object(s.b)(null,{deleteUser:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(),t.next=4,fetch("/users/".concat(e),{method:"DELETE"});case 4:a({type:"DELETE_USER",payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"USERS_ERROR",payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:"SET_CURRENT",payload:e}}})((function(e){var t=e.user,a=e.deleteUser,r=e.setCurrent;return n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,t.username),n.a.createElement("td",null,t.email),n.a.createElement("td",null,n.a.createElement(E.b,{to:"/user/edit",onClick:function(){return r(t)},className:"btn btn-dark"},"Edit")," ",n.a.createElement("button",{className:"btn btn-danger",onClick:function(){a(t.id),d.b.warning("You deleted a user")}},"Delete"))))})),b=function(){return n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("div",{className:"spinner-border",style:{width:"3rem",height:"3rem"},role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))},f=Object(s.b)((function(e){return{user:e.user}}),{getUsers:function(){return function(){var e=Object(m.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(),e.next=4,fetch("/users");case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,t({type:"GET_USERS",payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:"USERS_ERROR",payload:e.t0.response.data});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.user,a=t.users,c=t.loading,l=e.getUsers;return Object(r.useEffect)((function(){l()}),[]),c||null===a?n.a.createElement(b,null):n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-10"},n.a.createElement("h3",null,"Users")),n.a.createElement("div",{className:"col-md-2"},n.a.createElement(E.b,{to:"/user/add",className:"btn btn-info"},"Add User")))),n.a.createElement("div",{className:"card-body"},n.a.createElement("table",{className:"table table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Email"),n.a.createElement("th",null))),c||0!==a.length?a.map((function(e){return n.a.createElement(p,{user:e,key:e.id})})):n.a.createElement("th",{className:"text-center"},"No users to show"))))))))})),v=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,n.a.createElement("i",{className:"fa fa-pencil-alt"}),"Users"," ",n.a.createElement("small",null,"Manage Site Users"))))},h=a(2),y=a(15),N=a(22),O=Object(s.b)(null,{addUser:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(),t.next=4,fetch("/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return r=t.sent,t.next=7,r.json();case 7:n=t.sent,a({type:"ADD_USER",payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"USERS_ERROR",payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addUser,a=Object(N.a)(e,["addUser"]),c=Object(r.useState)(""),l=Object(y.a)(c,2),s=l[0],u=l[1],o=Object(r.useState)(""),m=Object(y.a)(o,2),i=m[0],E=m[1];return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card"},n.a.createElement("h3",{className:"card-header"},n.a.createElement("i",{className:"fa fa-user-plus"})," Add User"),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 offset-md-4"},n.a.createElement("form",{onSubmit:function(){""!==s&&""!==i?(t({username:s,email:i}),a.history.push("/"),d.b.success("You added a new user")):d.b.error("Please fill in all fields")}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"User Name"),n.a.createElement("input",{type:"text",name:"username",value:s,onChange:function(e){return u(e.target.value)},className:"form-control",required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email address"),n.a.createElement("input",{type:"email",name:"email",value:i,onChange:function(e){return E(e.target.value)},className:"form-control",required:!0})),n.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Submit")))))))})),j=Object(s.b)((function(e){return{current:e.user.current}}),{updateUser:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i(),t.next=4,fetch("/users/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return r=t.sent,t.next=7,r.json();case 7:n=t.sent,a({type:"UPDATE_USER",payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a({type:"USERS_ERROR",payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.current,a=e.updateUser,c=Object(N.a)(e,["current","updateUser"]),l=Object(r.useState)(""),s=Object(y.a)(l,2),u=s[0],o=s[1],m=Object(r.useState)(""),i=Object(y.a)(m,2),E=i[0],p=i[1];Object(r.useEffect)((function(){t&&(o(t.username),p(t.email))}),[t]);return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"card"},n.a.createElement("h3",{className:"card-header"},n.a.createElement("i",{className:"fa fa-user-plus"})," Add User"),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 offset-md-4"},n.a.createElement("form",{onSubmit:function(){if(""!==u&&""!==E){var e={id:t.id,username:u,email:E};a(e),c.history.push("/"),d.b.success("You updated the user")}else d.b.error("Please fill in all fields")}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"User Name"),n.a.createElement("input",{type:"text",name:"username",value:u,onChange:function(e){return o(e.target.value)},className:"form-control",required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email address"),n.a.createElement("input",{type:"email",name:"email",value:E,onChange:function(e){return p(e.target.value)},className:"form-control",required:!0})),n.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Submit")))))))})),S=a(13),U=a(30),R=a(31),g=a(32),x=a(3),T={users:null,current:null,loading:!1,error:null},w=Object(S.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS":return Object(x.a)(Object(x.a)({},e),{},{users:t.payload,loading:!1});case"ADD_USER":return Object(x.a)(Object(x.a)({},e),{},{users:[].concat(Object(g.a)(e.users),[t.payload]),loading:!1});case"DELETE_USER":return Object(x.a)(Object(x.a)({},e),{},{users:e.users.filter((function(e){return e.id!==t.payload})),loading:!1});case"UPDATE_USER":return Object(x.a)(Object(x.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"SET_CURRENT":return Object(x.a)(Object(x.a)({},e),{},{current:t.payload});case"CLEAR_CURRENT":return Object(x.a)(Object(x.a)({},e),{},{current:null});case"SET_LOADING":return Object(x.a)(Object(x.a)({},e),{},{loading:!0});case"USERS_ERROR":return console.error(t.payload),Object(x.a)(Object(x.a)({},e),{},{error:t.payload});default:return e}}}),_=[R.a],k=Object(S.createStore)(w,{},Object(U.composeWithDevTools)(S.applyMiddleware.apply(void 0,_)));a(45),a(46);var C=function(){return n.a.createElement(s.a,{store:k},n.a.createElement(E.a,null,n.a.createElement(h.c,null,n.a.createElement(r.Fragment,null,n.a.createElement(v,null),n.a.createElement(d.a,{autoClose:3e3,hideProgressBar:!0}),n.a.createElement(h.a,{exact:!0,path:"/",component:f}),n.a.createElement(h.a,{exact:!0,path:"/user/add",component:O}),n.a.createElement(h.a,{exact:!0,path:"/user/edit",component:j})))))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1bf9416a.chunk.js.map