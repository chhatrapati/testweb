(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{GRp1:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class o{}var u=e("YImT"),i=e("1R5E"),a=e("fS5t"),r=e("pMnS"),s=e("FJoE"),c=e("s7LF"),b=e("0fkH"),m=e("TSSN"),d=e("iInd"),p=e("SVse"),g=e("2Vo4"),f=e("B61Y"),h=e("8IcG");class C{constructor(n,l){this.verificationsService=n,this.translate=l,this.icKeyNote="/assets/img/ic-key-note-light-gray.svg",this.isSuccessful=new g.a(!1),this.initForm()}initForm(){var n;this.form=new c.k({}),this.model={email:""},this.fields=(n=this.translate,[{key:"email",type:"input",className:"auth-field",templateOptions:{type:"email",label:"Email",placeholder:"Enter your email",required:!0,minLength:1,maxLength:129,hideRequiredMarker:!0},validators:{validation:f.a},validation:{messages:{minlength:()=>n.instant("Validation.Common.EmailLength"),maxlength:()=>n.instant("Validation.Common.EmailLength"),email:()=>n.instant("Validation.Common.Email")}}}])}submit(n){this.verificationsService.reset(n.email).subscribe(()=>this.isSuccessful.next(!0))}}var v=t.qb({encapsulation:0,styles:[s.a,[".btn[_ngcontent-%COMP%]{height:50px;border-radius:25px;padding-left:30px;padding-right:30px;font-family:Montserrat,sans-serif;font-size:14px;font-weight:900;letter-spacing:2.66px;text-align:center;text-transform:uppercase;transition:all ease-in .3s}.btn-primary[_ngcontent-%COMP%]{background-color:#ee4036;border-color:#ee4036;color:#fff}.btn-primary[_ngcontent-%COMP%]:hover, .btn-secondary[_ngcontent-%COMP%]{background-color:#393e41;border-color:#393e41}.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#ee4036;border-color:#ee4036}.btn-white[_ngcontent-%COMP%]{color:#a0a0a0;border:3px solid #a0a0a0}.btn-white[_ngcontent-%COMP%]:hover{border-width:3px}.btn-icon[_ngcontent-%COMP%]{width:20px;height:20px;padding:0}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.hidden[_ngcontent-%COMP%], [hidden][_ngcontent-%COMP%]{display:none!important}a[_ngcontent-%COMP%]{line-height:1.43;color:#393e41;transition:color ease-in-out .2s}a[_ngcontent-%COMP%]:hover{color:#ee4036}.text-ellipsis[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.delimiter[_ngcontent-%COMP%]{height:1px;background-color:#ececec;margin:30px -15px}.card[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:15px;box-shadow:0 5px 50px -25px rgba(0,0,0,.25)}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.mt-40[_ngcontent-%COMP%]{margin-top:40px}.mt-50[_ngcontent-%COMP%]{margin-top:50px}.mt-60[_ngcontent-%COMP%]{margin-top:60px}.p-rl-10[_ngcontent-%COMP%]{padding:0 10px}.p-rl-25[_ngcontent-%COMP%]{padding:0 25px}.reset-instructions[_ngcontent-%COMP%]{margin-bottom:30px;font-size:16px;line-height:1.5;text-align:center;font-weight:500;color:#393e41}.btn-secondary[_ngcontent-%COMP%]{margin-top:20px}.below-auth[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:10px}"]],data:{}});function x(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,20,"div",[["class","col-lg-12"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,2,"div",[["toolbar",""]],null,null,null,null,null)),(n()(),t.sb(2,0,null,null,1,"p",[["class","reset-instructions"]],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Enter your email address and we\u2019ll send you a link to reset your password"])),(n()(),t.sb(4,0,null,null,10,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var o=!0,u=n.component;return"submit"===l&&(o=!1!==t.Eb(n,6).onSubmit(e)&&o),"reset"===l&&(o=!1!==t.Eb(n,6).onReset()&&o),"ngSubmit"===l&&(o=!1!==u.submit(u.model)&&o),o},null,null)),t.rb(5,16384,null,0,c.D,[],null,null),t.rb(6,540672,null,0,c.l,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Jb(2048,null,c.d,null,[c.l]),t.rb(8,16384,null,0,c.q,[[4,c.d]],null,null),(n()(),t.sb(9,0,null,null,5,"formly-form",[],null,null,null,u.c,u.a)),t.Jb(512,null,b.h,b.h,[b.e,t.j,t.q]),t.rb(11,966656,null,0,b.g,[b.h,b.e,[8,null],[2,c.l]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"]},null),(n()(),t.sb(12,0,null,0,2,"button",[["class","btn btn-secondary w-100"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t.Mb(13,null,[" "," "])),t.Gb(131072,m.j,[m.k,t.h]),(n()(),t.sb(15,0,null,null,5,"p",[["class","below-auth text-center"]],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Return "])),(n()(),t.sb(17,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t.Eb(n,18).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t.rb(18,671744,null,0,d.p,[d.m,d.a,p.j],{routerLink:[0,"routerLink"]},null),t.Fb(19,1),(n()(),t.Mb(-1,null,["Sign in"]))],function(n,l){var e=l.component;n(l,6,0,e.form),n(l,11,0,e.form,e.model,e.fields);var t=n(l,19,0,"/sign-in");n(l,18,0,t)},function(n,l){var e=l.component;n(l,4,0,t.Eb(l,8).ngClassUntouched,t.Eb(l,8).ngClassTouched,t.Eb(l,8).ngClassPristine,t.Eb(l,8).ngClassDirty,t.Eb(l,8).ngClassValid,t.Eb(l,8).ngClassInvalid,t.Eb(l,8).ngClassPending),n(l,12,0,!e.form.valid),n(l,13,0,t.Nb(l,13,0,t.Eb(l,14).transform("Reset.SendBtn"))),n(l,17,0,t.Eb(l,18).target,t.Eb(l,18).href)})}function w(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,12,"div",[["class","message-with-note col-lg-12 h-100"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,1,"div",[["class","key-note__wr"]],null,null,null,null,null)),(n()(),t.sb(2,0,null,null,0,"img",[["alt","key note"],["class","key-note"]],[[8,"src",4]],null,null,null,null)),(n()(),t.sb(3,0,null,null,1,"h2",[["class","h2 text-center"]],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Check your email"])),(n()(),t.sb(5,0,null,null,1,"p",[["class","text"]],null,null,null,null,null)),(n()(),t.Mb(6,null,["We sent an email to ",", which contains a link to reset your Pannotation password."])),(n()(),t.sb(7,0,null,null,5,"p",[["class","below-auth text-center"]],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Back to "])),(n()(),t.sb(9,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t.Eb(n,10).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o},null,null)),t.rb(10,671744,null,0,d.p,[d.m,d.a,p.j],{routerLink:[0,"routerLink"]},null),t.Fb(11,1),(n()(),t.Mb(-1,null,["Sign in"]))],function(n,l){var e=n(l,11,0,"/sign-in");n(l,10,0,e)},function(n,l){var e=l.component;n(l,2,0,e.icKeyNote),n(l,6,0,e.form.get("email").value),n(l,9,0,t.Eb(l,10).target,t.Eb(l,10).href)})}function M(n){return t.Ob(2,[(n()(),t.sb(0,0,null,null,10,"div",[["class","authentication-wrapper w-100 h-100"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,9,"div",[["class","authentication-container"]],[[2,"wider",null]],null,null,null,null)),t.Gb(131072,p.b,[t.h]),(n()(),t.sb(3,0,null,null,7,"div",[["class","w-100"],["content",""]],null,null,null,null,null)),(n()(),t.sb(4,0,null,null,6,"div",[["class","row h-100"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,2,null,x)),t.rb(6,16384,null,0,p.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null),t.Gb(131072,p.b,[t.h]),(n()(),t.hb(16777216,null,null,2,null,w)),t.rb(9,16384,null,0,p.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null),t.Gb(131072,p.b,[t.h])],function(n,l){var e=l.component;n(l,6,0,!t.Nb(l,6,0,t.Eb(l,7).transform(e.isSuccessful))),n(l,9,0,t.Nb(l,9,0,t.Eb(l,10).transform(e.isSuccessful)))},function(n,l){var e=l.component;n(l,1,0,t.Nb(l,1,0,t.Eb(l,2).transform(e.isSuccessful)))})}function y(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,1,"app-reset-password",[],null,null,null,M,v)),t.rb(1,49152,null,0,C,[h.a,m.k],null,null)],null,null)}var k=t.ob("app-reset-password",C,y,{},{},[]),O=e("IheW"),P=e("7nlb"),_=e("MibS"),E=e("fdx1"),S=e("fXz7");e.d(l,"ResetPasswordModuleNgFactory",function(){return N});var N=t.pb(o,[],function(n){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[u.e,u.f,i.a,a.b,a.a,a.d,a.e,a.f,a.c,a.g,r.a,k]],[3,t.j],t.w]),t.Cb(4608,p.o,p.n,[t.t,[2,p.D]]),t.Cb(4608,c.g,c.g,[]),t.Cb(4608,c.A,c.A,[]),t.Cb(4608,b.h,b.h,[b.e,t.j,t.q]),t.Cb(4608,m.g,m.f,[]),t.Cb(4608,m.c,m.e,[]),t.Cb(4608,m.i,m.d,[]),t.Cb(4608,m.b,m.a,[]),t.Cb(4608,m.k,m.k,[m.l,m.g,m.c,m.i,m.b,m.m,m.n]),t.Cb(4608,h.a,h.a,["API_URL_TOKEN",O.c]),t.Cb(1073742336,p.c,p.c,[]),t.Cb(1073742336,c.z,c.z,[]),t.Cb(1073742336,c.v,c.v,[]),t.Cb(512,b.e,b.e,[]),t.Cb(1024,b.a,function(n){return[{wrappers:[{name:"addons",component:P.b}],extensions:[{name:"addons",extension:{postPopulate:P.c}}]},{types:[{name:"input",component:_.c,wrappers:["form-field"]},{name:"checkbox",component:_.b,wrappers:["form-field"]},{name:"radio",component:_.e,wrappers:["form-field"]},{name:"select",component:_.f,wrappers:["form-field"]},{name:"textarea",component:_.g,wrappers:["form-field"]},{name:"multicheckbox",component:_.d,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:_.h}]},b.j(n),{validationMessages:[{name:"required",message:"This field is required"}],validators:[{name:"email",validation:c.y.email}]}]},[b.e]),t.Cb(1073742336,b.i,b.i,[b.e,[2,b.a]]),t.Cb(1073742336,E.a,E.a,[]),t.Cb(1073742336,S.a,S.a,[]),t.Cb(1073742336,P.a,P.a,[]),t.Cb(1073742336,_.a,_.a,[]),t.Cb(1073742336,m.h,m.h,[]),t.Cb(1073742336,d.q,d.q,[[2,d.v],[2,d.m]]),t.Cb(1073742336,o,o,[]),t.Cb(256,m.n,void 0,[]),t.Cb(256,m.m,void 0,[]),t.Cb(1024,d.k,function(){return[[{path:"",component:C}]]},[])])})}}]);