(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,s)=>{const o=s(89),{lightningChart:r,StepOptions:a,UILayoutBuilders:n,UIElementBuilders:i,emptyFill:l,UIOrigins:u,AxisTickStrategies:d,Themes:c}=o,y=r().ChartXY({theme:c[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Survey Report"),x=["January","February","March","April","May","June","July","August","September","October","November","December"],m=[],h=e=>m.push(y.addStepSeries({mode:e,automaticColorIndex:0}).setName(a[e]).setVisible(!1).setCursorResultTableFormatter(((e,t,s,o)=>e.addRow("Survey Report").addRow("Month: "+x[Math.trunc(s)]).addRow("Amount: "+o.toFixed(2)))));h(a.before),h(a.middle),h(a.after);const p=y.getDefaultAxisX().setMouseInteractions(!1).setTickStrategy(d.Empty).setMouseInteractions(!1);y.setAutoCursor((e=>{e.setResultTableAutoTextStyle(!0).setTickMarkerXVisible(!1).setTickMarkerYAutoTextStyle(!0)}));const S=[{x:"Jan",y:1},{x:"Feb",y:11},{x:"Mar",y:21},{x:"Apr",y:15},{x:"May",y:57},{x:"Jun",y:77},{x:"Jul",y:47},{x:"Aug",y:24},{x:"Sep",y:76},{x:"Oct",y:88},{x:"Nov",y:99},{x:"Dec",y:3}];let T=0,f=[];m.forEach(((e,t)=>{f=S.map(((e,t)=>({x:t,y:e.y}))),e.add(f)})),f.forEach(((e,t)=>{p.addCustomTick().setValue(t).setGridStrokeLength(0).setTextFormatter((e=>S[t].x)),T+=1})),y.getDefaultAxisY().setTitle("Amount / Month").setInterval({start:0,end:100,stopAxisAfter:!1});const b=y.addUIElement(n.Column);b.addElement(i.TextBox).setText("Step options");const k=b.addElement(n.Row),A=[];let g=!1;const M=e=>{const t=k.addElement(i.CheckBox).setButtonOnFillStyle(l).setButtonOffFillStyle(l);A.push(t),e.attach(t),t.setOn(!1),setTimeout((()=>{t.onSwitch(((e,t)=>{if(!g){if(g=!0,t)for(const t of A)t!==e&&t.setOn(!1);else e.setOn(!0);g=!1}}))}),100)};M(m[0]),M(m[1]),M(m[2]),b.setPosition({x:30,y:80}).setOrigin(u.CenterBottom).setMargin(10),m[1].setVisible(!0)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);