(self.webpackChunk=self.webpackChunk||[]).push([[143],{138:(e,t,s)=>{const o=s(809),{lightningChart:a,StepOptions:r,UILayoutBuilders:n,UIElementBuilders:i,UIButtonPictures:u,UIOrigins:d,AxisTickStrategies:l,Themes:c}=o,y=a().ChartXY({}).setTitle("Survey Report"),x=["January","February","March","April","May","June","July","August","September","October","November","December"],m=[],h=e=>m.push(y.addStepSeries({mode:e}).setName(r[e]).dispose().setCursorResultTableFormatter(((e,t,s,o)=>e.addRow("Survey Report").addRow("Month: "+x[Math.trunc(s)]).addRow("Amount: "+o.toFixed(2)))));h(r.before),h(r.middle),h(r.after);const p=y.getDefaultAxisX().setMouseInteractions(!1).setTickStrategy(l.Empty);y.setAutoCursor((e=>{e.setResultTableAutoTextStyle(!0).disposeTickMarkerX().setTickMarkerYAutoTextStyle(!0)}));const T=[{x:"Jan",y:1},{x:"Feb",y:11},{x:"Mar",y:21},{x:"Apr",y:15},{x:"May",y:57},{x:"Jun",y:77},{x:"Jul",y:47},{x:"Aug",y:24},{x:"Sep",y:76},{x:"Oct",y:88},{x:"Nov",y:99},{x:"Dec",y:3}];let f=0,S=[];m.forEach(((e,t)=>{S=T.map(((e,t)=>({x:t,y:e.y}))),e.add(S)})),S.forEach(((e,t)=>{p.addCustomTick(i.AxisTick).setValue(t).setGridStrokeLength(0).setTextFormatter((e=>T[t].x)),f+=1})),y.getDefaultAxisY().setTitle("Amount / Month").setInterval(0,100);const g=y.addUIElement(n.Column);g.addElement(i.TextBox).setText("Step options");const k=g.addElement(n.Row),A=[];let b=!1;const O=i.CheckBox.setPictureOff(u.Rectangle).setPictureOn(u.Diamond).addStyler((e=>{A.push(e),e.setOn(!1).setPadding({left:10,bottom:5}),setTimeout((()=>{e.onSwitch(((e,t)=>{if(!b){if(b=!0,t)for(const t of A)t!==e&&t.setOn(!1);else e.setOn(!0);b=!1}}))}),100)}));m[0].attach(k.addElement(O)),m[1].attach(k.addElement(O)),m[2].attach(k.addElement(O)),g.setPosition({x:30,y:80}).setOrigin(d.CenterBottom).setMargin(10),m[1].restore()}},e=>{e.O(0,[736],(()=>(138,e(e.s=138)))),e.O()}]);