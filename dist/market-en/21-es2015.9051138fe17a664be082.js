(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{uqgd:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class s{}var o=e("YImT"),u=e("1R5E"),i=e("fS5t"),r=e("pMnS"),a=e("FJoE"),c=e("TSSN"),b=e("s7LF"),d=e("0fkH"),p=e("SVse"),m=e("iInd"),h=e("2Vo4"),f=e("dkQB"),g=e("8IcG"),w=e("OC8m"),C=e("2NM/");class v extends C.a{constructor(n,l,e,t,s){super(),this.activatedRoute=n,this.router=l,this.translate=e,this.notificationService=t,this.verificationsService=s,this.icKeyNote="/assets/img/ic-key-note-light-gray.svg",this.isSuccessful=new h.a(!1),this.failed=new h.a(!1),this.initForm()}submit({password:n}){this.submitBtnDissabled.next(!0),this.verificationsService.restore(this.email,this.token,n).subscribe(()=>{this.notificationService.open("Password.Successful"),this.submitBtnDissabled.next(!1),this.router.navigate(["/sign-in"])},()=>this.submitBtnDissabled.next(!1))}initForm(){var n;this.form=new b.k({}),this.model={password:{password:"",confirmPassword:""}},this.fields=(n=this.translate,[{key:"password",validators:{fieldMatch:{expression:n=>{const l=n.value;return l.confirmPassword===l.password||!l.password},message:()=>n.instant("Validation.Common.PasswordsDontMatch"),errorPath:"confirmPassword"}},fieldGroup:[{key:"password",type:"input",className:"auth-field",templateOptions:{type:"password",label:"New Password",placeholder:"Enter new password",required:!0,hideRequiredMarker:!0,minLength:f.i,maxLength:f.h,pattern:f.j},validation:{messages:{pattern:()=>n.instant("Validation.Common.Password"),minlength:()=>n.instant("Validation.Common.PassLength"),maxlength:()=>n.instant("Validation.Common.PassLength")}}},{key:"confirmPassword",type:"input",className:"auth-field",templateOptions:{type:"password",label:"Confirm new password",placeholder:"Confirm new password",required:!0,hideRequiredMarker:!0}}]}]),this.email=this.activatedRoute.snapshot.queryParamMap.get("email"),this.token=this.activatedRoute.snapshot.queryParamMap.get("token"),this.verifyToken()}verifyToken(){this.token&&this.email?this.verificationsService.verifyToken(this.email,this.token).subscribe(()=>{},()=>this.failed.next(!0)):this.failed.next(!0)}}var x=t.qb({encapsulation:0,styles:[a.a,[".btn[_ngcontent-%COMP%]{height:50px;border-radius:25px;padding-left:30px;padding-right:30px;font-family:Montserrat,sans-serif;font-size:14px;font-weight:900;letter-spacing:2.66px;text-align:center;text-transform:uppercase;transition:all ease-in .3s}.btn-primary[_ngcontent-%COMP%]{background-color:#ee4036;border-color:#ee4036;color:#fff}.btn-primary[_ngcontent-%COMP%]:hover, .btn-secondary[_ngcontent-%COMP%]{background-color:#393e41;border-color:#393e41}.btn-secondary[_ngcontent-%COMP%]:hover{background-color:#ee4036;border-color:#ee4036}.btn-white[_ngcontent-%COMP%]{color:#a0a0a0;border:3px solid #a0a0a0}.btn-white[_ngcontent-%COMP%]:hover{border-width:3px}.btn-icon[_ngcontent-%COMP%]{width:20px;height:20px;padding:0}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.hidden[_ngcontent-%COMP%], [hidden][_ngcontent-%COMP%]{display:none!important}a[_ngcontent-%COMP%]{line-height:1.43;color:#393e41;transition:color ease-in-out .2s}a[_ngcontent-%COMP%]:hover{color:#ee4036}.text-ellipsis[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.delimiter[_ngcontent-%COMP%]{height:1px;background-color:#ececec;margin:30px -15px}.card[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:15px;box-shadow:0 5px 50px -25px rgba(0,0,0,.25)}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.mt-40[_ngcontent-%COMP%]{margin-top:40px}.mt-50[_ngcontent-%COMP%]{margin-top:50px}.mt-60[_ngcontent-%COMP%]{margin-top:60px}.p-rl-10[_ngcontent-%COMP%]{padding:0 10px}.p-rl-25[_ngcontent-%COMP%]{padding:0 25px}.reset-instructions[_ngcontent-%COMP%]{margin-bottom:30px;font-size:16px;line-height:1.5;text-align:center;font-weight:500;color:#393e41}"]],data:{}});function k(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,17,"div",[["class","col-lg-12"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,3,"div",[["toolbar",""]],null,null,null,null,null)),(n()(),t.sb(2,0,null,null,2,"h2",[["class","h2 text-center"]],null,null,null,null,null)),(n()(),t.Mb(3,null,["",""])),t.Gb(131072,c.j,[c.k,t.h]),(n()(),t.sb(5,0,null,null,1,"p",[["class","reset-instructions"]],null,null,null,null,null)),(n()(),t.Mb(6,null,["Enter a new password for ",""])),(n()(),t.sb(7,0,null,null,10,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var s=!0,o=n.component;return"submit"===l&&(s=!1!==t.Eb(n,9).onSubmit(e)&&s),"reset"===l&&(s=!1!==t.Eb(n,9).onReset()&&s),"ngSubmit"===l&&(s=!1!==o.submit(o.model)&&s),s},null,null)),t.rb(8,16384,null,0,b.D,[],null,null),t.rb(9,540672,null,0,b.l,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Jb(2048,null,b.d,null,[b.l]),t.rb(11,16384,null,0,b.q,[[4,b.d]],null,null),(n()(),t.sb(12,0,null,null,5,"formly-form",[],null,null,null,o.c,o.a)),t.Jb(512,null,d.h,d.h,[d.e,t.j,t.q]),t.rb(14,966656,null,0,d.g,[d.h,d.e,[8,null],[2,b.l]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"]},null),(n()(),t.sb(15,0,null,0,2,"button",[["class","btn btn-secondary w-100"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),t.Gb(131072,p.b,[t.h]),(n()(),t.Mb(-1,null,[" Save "]))],function(n,l){var e=l.component;n(l,9,0,e.form),n(l,14,0,e.form,e.model,e.fields)},function(n,l){var e=l.component;n(l,3,0,t.Nb(l,3,0,t.Eb(l,4).transform("Restore.CreateNew"))),n(l,6,0,e.email),n(l,7,0,t.Eb(l,11).ngClassUntouched,t.Eb(l,11).ngClassTouched,t.Eb(l,11).ngClassPristine,t.Eb(l,11).ngClassDirty,t.Eb(l,11).ngClassValid,t.Eb(l,11).ngClassInvalid,t.Eb(l,11).ngClassPending),n(l,15,0,!e.form.valid||t.Nb(l,15,0,t.Eb(l,16).transform(e.submitBtnDissabled)))})}function y(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,12,"div",[["class","message-with-note col-lg-12 h-100"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,1,"div",[["class","key-note__wr"]],null,null,null,null,null)),(n()(),t.sb(2,0,null,null,0,"img",[["alt","key note"],["class","key-note"]],[[8,"src",4]],null,null,null,null)),(n()(),t.sb(3,0,null,null,1,"h2",[["class","h2 text-center"]],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Password changed"])),(n()(),t.sb(5,0,null,null,1,"p",[["class","text"]],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Your Pannotation password has been successfully reset."])),(n()(),t.sb(7,0,null,null,5,"p",[["class","below-auth text-center"]],null,null,null,null,null)),(n()(),t.sb(8,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var s=!0;return"click"===l&&(s=!1!==t.Eb(n,9).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&s),s},null,null)),t.rb(9,671744,null,0,m.p,[m.m,m.a,p.j],{routerLink:[0,"routerLink"]},null),t.Fb(10,1),(n()(),t.Mb(-1,null,["Sign in"])),(n()(),t.Mb(-1,null,[" to your account"]))],function(n,l){var e=n(l,10,0,"/sign-in");n(l,9,0,e)},function(n,l){n(l,2,0,l.component.icKeyNote),n(l,8,0,t.Eb(l,9).target,t.Eb(l,9).href)})}function M(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,11,"div",[["class","message-with-note col-lg-12 h-100"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,1,"div",[["class","key-note__wr"]],null,null,null,null,null)),(n()(),t.sb(2,0,null,null,0,"img",[["alt","key note"],["class","key-note"]],[[8,"src",4]],null,null,null,null)),(n()(),t.sb(3,0,null,null,2,"p",[["class","text"]],null,null,null,null,null)),(n()(),t.Mb(4,null,["",""])),t.Gb(131072,c.j,[c.k,t.h]),(n()(),t.sb(6,0,null,null,5,"p",[["class","below-auth text-center"]],null,null,null,null,null)),(n()(),t.sb(7,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var s=!0;return"click"===l&&(s=!1!==t.Eb(n,8).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&s),s},null,null)),t.rb(8,671744,null,0,m.p,[m.m,m.a,p.j],{routerLink:[0,"routerLink"]},null),t.Fb(9,1),(n()(),t.Mb(-1,null,["Sign in"])),(n()(),t.Mb(-1,null,[" to your account"]))],function(n,l){var e=n(l,9,0,"/sign-in");n(l,8,0,e)},function(n,l){n(l,2,0,l.component.icKeyNote),n(l,4,0,t.Nb(l,4,0,t.Eb(l,5).transform("Restore.Expired"))),n(l,7,0,t.Eb(l,8).target,t.Eb(l,8).href)})}function P(n){return t.Ob(2,[(n()(),t.sb(0,0,null,null,14,"div",[["class","authentication-wrapper w-100 h-100"]],null,null,null,null,null)),(n()(),t.sb(1,0,null,null,13,"div",[["class","authentication-container"]],[[2,"wider",null]],null,null,null,null)),t.Gb(131072,p.b,[t.h]),(n()(),t.sb(3,0,null,null,11,"div",[["class","w-100"],["content",""]],null,null,null,null,null)),(n()(),t.sb(4,0,null,null,10,"div",[["class","row h-100"]],null,null,null,null,null)),(n()(),t.hb(16777216,null,null,3,null,k)),t.rb(6,16384,null,0,p.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null),t.Gb(131072,p.b,[t.h]),t.Gb(131072,p.b,[t.h]),(n()(),t.hb(16777216,null,null,2,null,y)),t.rb(10,16384,null,0,p.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null),t.Gb(131072,p.b,[t.h]),(n()(),t.hb(16777216,null,null,2,null,M)),t.rb(13,16384,null,0,p.m,[t.N,t.K],{ngIf:[0,"ngIf"]},null),t.Gb(131072,p.b,[t.h])],function(n,l){var e=l.component;n(l,6,0,!t.Nb(l,6,0,t.Eb(l,7).transform(e.isSuccessful))&&!t.Nb(l,6,0,t.Eb(l,8).transform(e.failed))),n(l,10,0,t.Nb(l,10,0,t.Eb(l,11).transform(e.isSuccessful))),n(l,13,0,t.Nb(l,13,0,t.Eb(l,14).transform(e.failed)))},function(n,l){var e=l.component;n(l,1,0,t.Nb(l,1,0,t.Eb(l,2).transform(e.isSuccessful)))})}function O(n){return t.Ob(0,[(n()(),t.sb(0,0,null,null,1,"app-restore-password",[],null,null,null,P,x)),t.rb(1,49152,null,0,v,[m.a,m.m,c.k,w.a,g.a],null,null)],null,null)}var E=t.ob("app-restore-password",v,O,{},{},[]),_=e("IheW"),S=e("7nlb"),N=e("MibS"),q=e("fdx1"),K=e("fXz7");e.d(l,"RestorePasswordModuleNgFactory",function(){return I});var I=t.pb(s,[],function(n){return t.Bb([t.Cb(512,t.j,t.ab,[[8,[o.e,o.f,u.a,i.b,i.a,i.d,i.e,i.f,i.c,i.g,r.a,E]],[3,t.j],t.w]),t.Cb(4608,p.o,p.n,[t.t,[2,p.D]]),t.Cb(4608,b.g,b.g,[]),t.Cb(4608,b.A,b.A,[]),t.Cb(4608,d.h,d.h,[d.e,t.j,t.q]),t.Cb(4608,c.g,c.f,[]),t.Cb(4608,c.c,c.e,[]),t.Cb(4608,c.i,c.d,[]),t.Cb(4608,c.b,c.a,[]),t.Cb(4608,c.k,c.k,[c.l,c.g,c.c,c.i,c.b,c.m,c.n]),t.Cb(4608,g.a,g.a,["API_URL_TOKEN",_.c]),t.Cb(1073742336,p.c,p.c,[]),t.Cb(1073742336,b.z,b.z,[]),t.Cb(1073742336,b.v,b.v,[]),t.Cb(512,d.e,d.e,[]),t.Cb(1024,d.a,function(n){return[{wrappers:[{name:"addons",component:S.b}],extensions:[{name:"addons",extension:{postPopulate:S.c}}]},{types:[{name:"input",component:N.c,wrappers:["form-field"]},{name:"checkbox",component:N.b,wrappers:["form-field"]},{name:"radio",component:N.e,wrappers:["form-field"]},{name:"select",component:N.f,wrappers:["form-field"]},{name:"textarea",component:N.g,wrappers:["form-field"]},{name:"multicheckbox",component:N.d,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:N.h}]},d.j(n),{validationMessages:[{name:"required",message:"This field is required"}]}]},[d.e]),t.Cb(1073742336,d.i,d.i,[d.e,[2,d.a]]),t.Cb(1073742336,q.a,q.a,[]),t.Cb(1073742336,K.a,K.a,[]),t.Cb(1073742336,S.a,S.a,[]),t.Cb(1073742336,N.a,N.a,[]),t.Cb(1073742336,c.h,c.h,[]),t.Cb(1073742336,m.q,m.q,[[2,m.v],[2,m.m]]),t.Cb(1073742336,s,s,[]),t.Cb(256,c.n,void 0,[]),t.Cb(256,c.m,void 0,[]),t.Cb(1024,m.k,function(){return[[{path:"",component:v}]]},[])])})}}]);