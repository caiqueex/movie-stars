"use strict";(self.webpackChunkmovie_stars=self.webpackChunkmovie_stars||[]).push([[661],{1661:(rt,R,l)=>{l.r(R),l.d(R,{MovieDetailsModule:()=>st});var u=l(9808),P=l(520),_=l(1083),D=l(2124),m=l(1314),h=l(7429),e=l(5e3),T=l(508),x=l(226),f=l(7579),k=l(9770),Y=l(727),j=l(9646),v=l(9300),C=l(5698),z=l(8675),y=l(925),c=l(1777),M=l(22),O=l(1159),V=l(6360);function G(o,a){}class b{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0}}const Z={dialogContainer:(0,c.X$)("dialogContainer",[(0,c.SB)("void, exit",(0,c.oB)({opacity:0,transform:"scale(0.7)"})),(0,c.SB)("enter",(0,c.oB)({transform:"none"})),(0,c.eR)("* => enter",(0,c.jt)("150ms cubic-bezier(0, 0, 0.2, 1)",(0,c.oB)({transform:"none",opacity:1}))),(0,c.eR)("* => void, * => exit",(0,c.jt)("75ms cubic-bezier(0.4, 0.0, 0.2, 1)",(0,c.oB)({opacity:0})))])};let H=(()=>{class o extends h.en{constructor(t,i,n,s,r,d,g,p){super(),this._elementRef=t,this._focusTrapFactory=i,this._changeDetectorRef=n,this._config=r,this._interactivityChecker=d,this._ngZone=g,this._focusMonitor=p,this._animationStateChanged=new e.vpe,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=A=>(this._portalOutlet.hasAttached(),this._portalOutlet.attachDomPortal(A)),this._ariaLabelledBy=r.ariaLabelledBy||null,this._document=s}_initializeWithAttachedContent(){this._setupFocusTrap(),this._capturePreviouslyFocusedElement()}attachComponentPortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachComponentPortal(t)}attachTemplatePortal(t){return this._portalOutlet.hasAttached(),this._portalOutlet.attachTemplatePortal(t)}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,i){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{t.addEventListener("blur",()=>t.removeAttribute("tabindex")),t.addEventListener("mousedown",()=>t.removeAttribute("tabindex"))})),t.focus(i)}_focusByCssSelector(t,i){let n=this._elementRef.nativeElement.querySelector(t);n&&this._forceFocus(n,i)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(i=>{i||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._elementFocusedBeforeDialogWasOpened;if(this._config.restoreFocus&&t&&"function"==typeof t.focus){const i=(0,y.ht)(),n=this._elementRef.nativeElement;(!i||i===this._document.body||i===n||n.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_setupFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement)}_capturePreviouslyFocusedElement(){this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,y.ht)())}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,i=(0,y.ht)();return t===i||t.contains(i)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(M.qV),e.Y36(e.sBO),e.Y36(u.K0,8),e.Y36(b),e.Y36(M.ic),e.Y36(e.R0b),e.Y36(M.tE))},o.\u0275dir=e.lG2({type:o,viewQuery:function(t,i){if(1&t&&e.Gf(h.Pl,7),2&t){let n;e.iGM(n=e.CRH())&&(i._portalOutlet=n.first)}},features:[e.qOj]}),o})(),N=(()=>{class o extends H{constructor(){super(...arguments),this._state="enter"}_onAnimationDone({toState:t,totalTime:i}){"enter"===t?(this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:i})):"exit"===t&&(this._restoreFocus(),this._animationStateChanged.next({state:"closed",totalTime:i}))}_onAnimationStart({toState:t,totalTime:i}){"enter"===t?this._animationStateChanged.next({state:"opening",totalTime:i}):("exit"===t||"void"===t)&&this._animationStateChanged.next({state:"closing",totalTime:i})}_startExitAnimation(){this._state="exit",this._changeDetectorRef.markForCheck()}}return o.\u0275fac=function(){let a;return function(i){return(a||(a=e.n5z(o)))(i||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1","aria-modal","true",1,"mat-dialog-container"],hostVars:6,hostBindings:function(t,i){1&t&&e.WFA("@dialogContainer.start",function(s){return i._onAnimationStart(s)})("@dialogContainer.done",function(s){return i._onAnimationDone(s)}),2&t&&(e.Ikx("id",i._id),e.uIk("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledBy)("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),e.d8E("@dialogContainer",i._state))},features:[e.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){1&t&&e.YNc(0,G,0,0,"ng-template",0)},directives:[h.Pl],styles:[".mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n"],encapsulation:2,data:{animation:[Z.dialogContainer]}}),o})(),U=0;class w{constructor(a,t,i="mat-dialog-"+U++){this._overlayRef=a,this._containerInstance=t,this.id=i,this.disableClose=this._containerInstance._config.disableClose,this._afterOpened=new f.x,this._afterClosed=new f.x,this._beforeClosed=new f.x,this._state=0,t._id=i,t._animationStateChanged.pipe((0,v.h)(n=>"opened"===n.state),(0,C.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe((0,v.h)(n=>"closed"===n.state),(0,C.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._afterClosed.next(this._result),this._afterClosed.complete(),this.componentInstance=null,this._overlayRef.dispose()}),a.keydownEvents().pipe((0,v.h)(n=>n.keyCode===O.hY&&!this.disableClose&&!(0,O.Vb)(n))).subscribe(n=>{n.preventDefault(),S(this,"keyboard")}),a.backdropClick().subscribe(()=>{this.disableClose?this._containerInstance._recaptureFocus():S(this,"mouse")})}close(a){this._result=a,this._containerInstance._animationStateChanged.pipe((0,v.h)(t=>"closing"===t.state),(0,C.q)(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._afterClosed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._overlayRef.backdropClick()}keydownEvents(){return this._overlayRef.keydownEvents()}updatePosition(a){let t=this._getPositionStrategy();return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._overlayRef.updatePosition(),this}updateSize(a="",t=""){return this._overlayRef.updateSize({width:a,height:t}),this._overlayRef.updatePosition(),this}addPanelClass(a){return this._overlayRef.addPanelClass(a),this}removePanelClass(a){return this._overlayRef.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._overlayRef.dispose()}_getPositionStrategy(){return this._overlayRef.getConfig().positionStrategy}}function S(o,a,t){return void 0!==o._containerInstance&&(o._containerInstance._closeInteractionType=a),o.close(t)}const F=new e.OlP("MatDialogData"),W=new e.OlP("mat-dialog-default-options"),B=new e.OlP("mat-dialog-scroll-strategy"),Q={provide:B,deps:[m.aV],useFactory:function J(o){return()=>o.scrollStrategies.block()}};let $=(()=>{class o{constructor(t,i,n,s,r,d,g,p,A,lt){this._overlay=t,this._injector=i,this._defaultOptions=n,this._parentDialog=s,this._overlayContainer=r,this._dialogRefConstructor=g,this._dialogContainerType=p,this._dialogDataToken=A,this._animationMode=lt,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new f.x,this._afterOpenedAtThisLevel=new f.x,this._ariaHiddenElements=new Map,this._dialogAnimatingOpen=!1,this.afterAllClosed=(0,k.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,z.O)(void 0))),this._scrollStrategy=d}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}open(t,i){if(i=function X(o,a){return Object.assign(Object.assign({},a),o)}(i,this._defaultOptions||new b),i.id&&this.getDialogById(i.id),this._dialogAnimatingOpen)return this._lastDialogRef;const n=this._createOverlay(i),s=this._attachDialogContainer(n,i);if("NoopAnimations"!==this._animationMode){const d=s._animationStateChanged.subscribe(g=>{"opening"===g.state&&(this._dialogAnimatingOpen=!0),"opened"===g.state&&(this._dialogAnimatingOpen=!1,d.unsubscribe())});this._animationStateSubscriptions||(this._animationStateSubscriptions=new Y.w0),this._animationStateSubscriptions.add(d)}const r=this._attachDialogContent(t,s,n,i);return this._lastDialogRef=r,this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(r),r.afterClosed().subscribe(()=>this._removeOpenDialog(r)),this.afterOpened.next(r),s._initializeWithAttachedContent(),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(i=>i.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._animationStateSubscriptions&&this._animationStateSubscriptions.unsubscribe()}_createOverlay(t){const i=this._getOverlayConfig(t);return this._overlay.create(i)}_getOverlayConfig(t){const i=new m.X_({positionStrategy:this._overlay.position().global(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(i.backdropClass=t.backdropClass),i}_attachDialogContainer(t,i){const s=e.zs3.create({parent:i&&i.viewContainerRef&&i.viewContainerRef.injector||this._injector,providers:[{provide:b,useValue:i}]}),r=new h.C5(this._dialogContainerType,i.viewContainerRef,s,i.componentFactoryResolver);return t.attach(r).instance}_attachDialogContent(t,i,n,s){const r=new this._dialogRefConstructor(n,i,s.id);if(t instanceof e.Rgc)i.attachTemplatePortal(new h.UE(t,null,{$implicit:s.data,dialogRef:r}));else{const d=this._createInjector(s,r,i),g=i.attachComponentPortal(new h.C5(t,s.viewContainerRef,d));r.componentInstance=g.instance}return r.updateSize(s.width,s.height).updatePosition(s.position),r}_createInjector(t,i,n){const s=t&&t.viewContainerRef&&t.viewContainerRef.injector,r=[{provide:this._dialogContainerType,useValue:n},{provide:this._dialogDataToken,useValue:t.data},{provide:this._dialogRefConstructor,useValue:i}];return t.direction&&(!s||!s.get(x.Is,null,e.XFs.Optional))&&r.push({provide:x.Is,useValue:{value:t.direction,change:(0,j.of)()}}),e.zs3.create({parent:s||this._injector,providers:r})}_removeOpenDialog(t){const i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((n,s)=>{n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const i=t.parentElement.children;for(let n=i.length-1;n>-1;n--){let s=i[n];s!==t&&"SCRIPT"!==s.nodeName&&"STYLE"!==s.nodeName&&!s.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_closeDialogs(t){let i=t.length;for(;i--;)t[i].close()}}return o.\u0275fac=function(t){e.$Z()},o.\u0275dir=e.lG2({type:o}),o})(),I=(()=>{class o extends ${constructor(t,i,n,s,r,d,g,p){super(t,i,s,d,g,r,w,N,F,p)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(m.aV),e.LFG(e.zs3),e.LFG(u.Ye,8),e.LFG(W,8),e.LFG(B),e.LFG(o,12),e.LFG(m.Xj),e.LFG(V.Qb,8))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),K=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[I,Q],imports:[[m.U8,h.eL,T.BQ],T.BQ]}),o})(),q=(()=>{class o{constructor(t,i){this.modalData=t,this.dialogRef=i}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(F),e.Y36(w))},o.\u0275cmp=e.Xpm({type:o,selectors:[["trailer-modal"]],decls:2,vars:1,consts:[["width","100%","height","420","frameborder","0","allowfullscreen","",3,"src"]],template:function(t,i){1&t&&(e.TgZ(0,"div"),e._UZ(1,"iframe",0),e.qZA()),2&t&&(e.xp6(1),e.Q6J("src",i.modalData.ytVideo,e.uOi))},styles:[".yt-modal[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{background-color:red!important}"]}),o})();var L=l(5067),tt=l(2313),E=l(7044);function et(o,a){if(1&o&&e._UZ(0,"div",3),2&o){const t=e.oxw();e.Q6J("lazyLoad",t.movieDetails.backdrop_path)}}function it(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",12),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).openDialog()}),e._UZ(1,"i",13),e.TgZ(2,"span",14),e._uU(3,"Trailer"),e.qZA()()}}function ot(o,a){if(1&o&&(e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"img",6),e.qZA(),e.TgZ(3,"div",7)(4,"span",8),e._uU(5),e.qZA(),e.TgZ(6,"span",9),e._uU(7),e.ALo(8,"date"),e.qZA(),e.YNc(9,it,4,0,"div",10),e.TgZ(10,"span",11),e._uU(11),e.qZA()()()),2&o){const t=e.oxw();e.xp6(2),e.Q6J("lazyLoad",t.movieDetails.poster_path),e.xp6(3),e.Oqu(t.movieDetails.title),e.xp6(2),e.lnq("",e.xi3(8,7,t.movieDetails.release_date,"dd/MM/YYYY")," (PT) \u2022 ",t.formatGenresByComma(t.movieDetails.genres)," \u2022 ",t.formatRuntime(t.movieDetails.runtime),""),e.xp6(2),e.Q6J("ngIf",t.movieVideos&&t.movieVideos.length),e.xp6(2),e.Oqu(t.movieDetails.overview)}}const at=[{path:"",component:(()=>{class o{constructor(t,i,n,s){this.route=t,this.movieStarsService=i,this.dialog=n,this.domSanitizer=s}ngOnInit(){this.route.params.subscribe(t=>{t.id&&this.movieStarsService.getMovieDetails(t.id).subscribe(i=>{this.movieDetails=(0,D.Pi)(i,!0),this.getMovieYTVideo(i.id)})})}getMovieYTVideo(t){this.movieStarsService.getMovieVideo(t).subscribe(i=>{this.movieVideos=i.map(n=>(n.site=`https://www.youtube.com/watch?v=${n.key}`,n))})}openDialog(){const t=this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.movieVideos[0].key}?autoplay=1`);this.dialog.open(q,{data:{ytVideo:t},panelClass:"yt-modal",width:"80rem"}).afterClosed().subscribe(n=>{console.log(n)})}formatGenresByComma(t){return(0,D.xS)(t)}formatRuntime(t){return(0,D.Mo)(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(_.gz),e.Y36(L.Y),e.Y36(I),e.Y36(tt.H7))},o.\u0275cmp=e.Xpm({type:o,selectors:[["movie-details"]],decls:3,vars:2,consts:[[1,"movie-bg","movie-bg-container","col-12","row","w-100","h-100","m-0","p-0"],["class","p-5 row col-12 cover-img h-50 m-0 img-container","errorImage","./assets/images/no-image.png","defaultImage","./assets/images/no-image.png",3,"lazyLoad",4,"ngIf"],["class","p-5 row col-12 position-absolute movie-content",4,"ngIf"],["errorImage","./assets/images/no-image.png","defaultImage","./assets/images/no-image.png",1,"p-5","row","col-12","cover-img","h-50","m-0","img-container",3,"lazyLoad"],[1,"p-5","row","col-12","position-absolute","movie-content"],[1,"col-md-3","col-12","justify-content-center","align-items-center","d-flex","movie-bg-container"],["errorImage","./assets/images/no-image.png","defaultImage","./assets/images/no-image.png",1,"w-75","img-ctm",3,"lazyLoad"],[1,"col-md-9","col-12","justify-content-center","align-self-center","mt-lg-0","mt-4"],[1,"page-title","display-6","c-white","row"],[1,"c-white","row","fs-10"],["class","mt-2 trailer-container",3,"click",4,"ngIf"],[1,"c-white","row","mt-lg-5","pt-lg-5","mt-3","lt-3"],[1,"mt-2","trailer-container",3,"click"],[1,"fas","fa-play","c-white","row"],[1,"c-white","mt-2","ml-2","ml-20px"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.YNc(1,et,1,1,"div",1),e.qZA(),e.YNc(2,ot,12,10,"div",2)),2&t&&(e.xp6(1),e.Q6J("ngIf",i.movieDetails),e.xp6(1),e.Q6J("ngIf",i.movieDetails))},directives:[u.O5,E.z1],pipes:[u.uU],styles:[".cover-img[_ngcontent-%COMP%]{background-position:right -200px top;background-size:cover;background-repeat:no-repeat;filter:blur(4px);-webkit-filter:blur(4px);box-shadow:inset 0 0 0 1000px #00000080;width:100%;height:500px;object-fit:cover}.movie-content[_ngcontent-%COMP%]{top:150px}.trailer-container[_ngcontent-%COMP%]{cursor:pointer}.movie-bg[_ngcontent-%COMP%]{background-color:#000}.movie-bg-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .img-container[_ngcontent-%COMP%]{transition:opacity 2s;opacity:0}.movie-bg-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .img-container.ng-lazyloaded[_ngcontent-%COMP%]{opacity:1!important}"]}),o})()}];let nt=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[_.Bz.forChild(at)],_.Bz]}),o})(),st=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[L.Y,P.JF],imports:[[u.ez,nt,K,E.mZ]]}),o})()}}]);