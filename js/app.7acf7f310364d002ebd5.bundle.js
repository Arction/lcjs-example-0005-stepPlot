(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,s)=>{const o=s(377),{lightningChart:n,StepOptions:a,UILayoutBuilders:i,UIElementBuilders:r,emptyFill:l,UIOrigins:d,AxisTickStrategies:c,Themes:u}=o,m=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:u[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Survey Report"),x=[],h=e=>x.push(m.addStepSeries({mode:e,automaticColorIndex:0}).setName(a[e]).setVisible(!1));h(a.before),h(a.middle),h(a.after);const y=m.getDefaultAxisX().setMouseInteractions(!1).setTickStrategy(c.Empty).setMouseInteractions(!1),p=[{x:"Jan",y:1},{x:"Feb",y:11},{x:"Mar",y:21},{x:"Apr",y:15},{x:"May",y:57},{x:"Jun",y:77},{x:"Jul",y:47},{x:"Aug",y:24},{x:"Sep",y:76},{x:"Oct",y:88},{x:"Nov",y:99},{x:"Dec",y:3}];let f=0,g=[];x.forEach(((e,t)=>{g=p.map(((e,t)=>({x:t,y:e.y}))),e.add(g)})),g.forEach(((e,t)=>{y.addCustomTick().setValue(t).setGridStrokeLength(0).setTextFormatter((e=>p[t].x)),f+=1})),m.getDefaultAxisY().setTitle("Amount / Month").setInterval({start:0,end:100,stopAxisAfter:!1});const S=m.addUIElement(i.Column);S.addElement(r.TextBox).setText("Step options");const O=S.addElement(i.Row),k=[];let I=!1;const T=e=>{const t=O.addElement(r.CheckBox).setButtonOnFillStyle(l).setButtonOffFillStyle(l);k.push(t),e.attach(t),t.setOn(!1),setTimeout((()=>{t.onSwitch(((e,t)=>{if(!I){if(I=!0,t)for(const t of k)t!==e&&t.setOn(!1);else e.setOn(!0);I=!1}}))}),100)};T(x[0]),T(x[1]),T(x[2]),S.setPosition({x:30,y:80}).setOrigin(d.CenterBottom).setMargin(10),x[1].setVisible(!0)}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);