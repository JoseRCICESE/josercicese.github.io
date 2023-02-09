(function(){var t={3605:function(t,e,a){"use strict";var s=a(144),r=a(4635),o=a(1096),n=a(7179),i=a(3058),l=a(4437),c=a(5452),u=a(5294),d=a(9953),m=function(){var t=this,e=t._self._c;return e(o.Z,{attrs:{height:"windowHeight",width:"windowWidth"}},[e(d.Z,{attrs:{dark:"",color:"primary",window:"",height:"60"}},[e(u.Z,[e(l.Z,{attrs:{cols:"12",md:"4"}},[e(n.Z,{attrs:{text:"",primary:""},on:{click:function(e){return t.$router.replace({path:"/"})}}},[t._v("Sistema de gestión de datos de sensado")])],1),e(l.Z,{staticClass:"primary py-4 text-center white--text",attrs:{cols:"12",md:"1"}},[e(n.Z,{attrs:{text:"",primary:""},on:{click:function(e){t.loginAttemp=!0}}},[t._v("Autenticarse")])],1),e(l.Z,{staticClass:"primary py-4 text-center white--text",attrs:{cols:"12",md:"1"}},[e(n.Z,{attrs:{text:"",primary:""},on:{click:function(e){t.registerAttemp=!0}}},[t._v("Registrarse")])],1),e(l.Z,{staticClass:"primary py-4 text-center white--text",attrs:{cols:"12",md:"1"}},[e(n.Z,{attrs:{disabled:!t.loggedIn,text:"",primary:""},on:{click:t.handleLoggedIn}},[t._v(" Manejo de Datos ")])],1),e(l.Z,{staticClass:"primary py-4 text-center white--text",attrs:{cols:"12",md:"2"}},[e(n.Z,{attrs:{text:"",primary:""},on:{click:function(e){return t.$router.replace({path:"about/"})}}},[t._v("Acerca de este sitio")])],1)],1)],1),e(i.Z,{attrs:{height:"100%"}},[e(c.Z,{attrs:{width:"400"},model:{value:t.registerAttemp,callback:function(e){t.registerAttemp=e},expression:"registerAttemp"}},[e("RegisterUser",{on:{register:t.handleRegister}})],1),e(c.Z,{attrs:{width:"300"},model:{value:t.loginAttemp,callback:function(e){t.loginAttemp=e},expression:"loginAttemp"}},[e("LoginComponent",{on:{login:t.handleLogin}})],1),e("router-view"),t.loginSuccess?e(r.Z,{attrs:{elevation:"3",type:"success"},on:{click:function(e){t.loginSuccess=!1}}},[t._v("Se ha autenticado correctamente ")]):t._e(),t.noBalance?e(r.Z,{attrs:{elevation:"3",type:"error"},on:{click:function(e){t.noBalance=!1}}},[t._v("Se ha autenticado correctamente ")]):t._e(),e("FooterComponent")],1)],1)},h=[],f=a(3584),p=function(){var t=this,e=t._self._c;return e(f.Z,{attrs:{color:"primary lighten-1",padless:""}},[e(u.Z,{staticClass:"text-center white--text",attrs:{justify:"center","no-gutters":""}},[t._v("Este sistema no está pensado para su uso fuera del ambiente de pruebas de viabilidad con la participación de los estudiantes de la asignatura Ciencia de Datos para Sensores del Dpto. de Ciencias Computacionales."),e("br"),t._v("Absténgase de emplearlo con cualquier otro fin y conste que las interacciones con el mismo generan registro en propiedad de la institución a pie de página. "),e(l.Z,{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("CICESE")])])],1)],1)},g=[],v={data:()=>({links:["Home","About Us","Team","Services","Blog","Contact Us"]})},Z=v,b=a(1001),_=(0,b.Z)(Z,p,g,!1,null,null,null),y=_.exports,w=a(5223),x=a(6035),k=a(6904),C=a(5234),D=a(5251),F=function(){var t=this,e=t._self._c;return e(i.Z,[e(k.Z,[e(x.Z,[e(l.Z,[e(u.Z,{attrs:{cols:"12",md:"4"}},[e(n.Z,{staticClass:"text-align: left",attrs:{text:"",primary:"",width:"100%"}},[t._v("Introduzca sus datos:")]),e(D.Z,{attrs:{label:"Usuario",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),e(u.Z,{attrs:{cols:"12",md:"4"}},[e(D.Z,{attrs:{type:"password",label:"Contraseña",required:""},model:{value:t.secret,callback:function(e){t.secret=e},expression:"secret"}})],1)],1)],1)],1),e(w.h7,[e(C.Z),e(n.Z,{attrs:{color:"success"},on:{click:t.login}},[t._v(" Entrar ")]),e(n.Z,{attrs:{color:"error"},on:{click:t.incorrectData}},[t._v(" Cancelar ")])],1)],1)},A=[],S={data:()=>({username:"",secret:"",userData:Object}),methods:{async login(){this.userData=await this.$axios.post("login",{username:this.username,secret:this.secret}).then((function(t){return console.log(t),t.data.usuarioDb})).catch((function(t){console.log(t)})),this.$store.state.userData=this.userData,console.log(this.$store.state.userData),"undefined"!==typeof this.userData?this.$emit("login","correct"):this.incorrectData},incorrectData(){this.$emit("login","cancelled")}}},$=S,N=(0,b.Z)($,F,A,!1,null,null,null),T=N.exports,P=function(){var t=this,e=t._self._c;return e(i.Z,[e(k.Z,[e(x.Z,[e(l.Z,[e(n.Z,{staticClass:"text-align: left",attrs:{text:"",primary:"",width:"100%"}},[t._v("Introduzca sus datos:")]),e(u.Z,{attrs:{cols:"12",md:"4"}},[e(D.Z,{attrs:{label:"Nombres",required:""},model:{value:t.names,callback:function(e){t.names=e},expression:"names"}})],1),e(u.Z,{attrs:{cols:"12",md:"4"}},[e(D.Z,{attrs:{label:"Apellidos",required:""},model:{value:t.lastNames,callback:function(e){t.lastNames=e},expression:"lastNames"}})],1),e(u.Z,{attrs:{cols:"12",md:"4"}},[e(D.Z,{attrs:{label:"Nombre de usuario",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),e(u.Z,{attrs:{cols:"12",md:"4"}},[e(D.Z,{attrs:{type:"password",label:"Contraseña",required:""},model:{value:t.secret,callback:function(e){t.secret=e},expression:"secret"}})],1),e(u.Z,{attrs:{cols:"12",md:"4"}},[e(D.Z,{attrs:{label:"Rol",value:"Curador",disabled:""},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}})],1),e(u.Z,{attrs:{cols:"12",md:"4"}},[e(D.Z,{attrs:{label:"Crédito",value:"100.00",prefix:"$",disabled:""},model:{value:t.balance,callback:function(e){t.balance=e},expression:"balance"}})],1)],1)],1)],1),e(w.h7,[e(C.Z),e(n.Z,{attrs:{color:"success"},on:{click:t.registerUser}},[t._v(" Registrar ")]),e(n.Z,{attrs:{color:"error"},on:{click:t.incorrectData}},[t._v(" Cancelar ")])],1)],1)},B=[],E={data:()=>({names:"",lastNames:"",username:"",secret:"",role:"Curador de datos",balance:100,userData:Object}),methods:{async registerUser(){this.userData=await this.$axios.post("users",{username:this.username,secret:this.secret,names:this.names,lastNames:this.lastNames,role:this.role,balance:this.balance}).then((function(t){return console.log(t,"brute response"),t.data.newUser})).catch((function(t){console.log(t)})),this.$store.state.userData=this.userData,console.log(this.$store.state.userData),this.$emit("register","correct")},incorrectData(){this.$emit("register","cancelled")}}},I=E,q=(0,b.Z)(I,P,B,!1,null,null,null),L=q.exports,U={components:{FooterComponent:y,LoginComponent:T,RegisterUser:L},data:()=>({windowHeight:window.innerHeight,windowWidth:window.innerWidth,loginAttemp:!1,registerAttemp:!1,loginSuccess:!1,noBalance:!1,loggedIn:!1}),methods:{handleLogin(t){"correct"==t&&(this.loginSuccess=!0,this.loggedIn=!0),this.loginAttemp=!1},handleRegister(t){"correct"==t&&(this.registerAttemp=!0),this.registerAttemp=!1},handleBalance(t){this.noBalance=t},handleLoggedIn(){"undefined"!=typeof this.$store.state.userData._id&&(this.loggedIn=!0,this.$router.replace({path:"/upload"}))}}},W=U,z=(0,b.Z)(W,m,h,!1,null,null,null),O=z.exports,j=a(2250);s.ZP.use(j.Z);var H=new j.Z({}),R=a(8345),V=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},M=[],K=a(4944),Q=a(4192),G=a(8714),Y=a(6487),J=a(1911),X=a(1133),tt=a(5057),et=a(9200),at=function(){var t=this,e=t._self._c;return e(i.Z,{staticClass:"mx-auto my-3",attrs:{width:"80%",elevation:"6"}},[e("div",{staticClass:"text-center d-flex pb-4"},[e(u.Z,[e(l.Z,{staticClass:"ml-5",attrs:{cols:"8",md:"2"}},[e(et.Z,{attrs:{inset:"",label:"Expandir"},on:{click:t.unfoldFiles},model:{value:t.unfold,callback:function(e){t.unfold=e},expression:"unfold"}})],1),e(l.Z,{attrs:{cols:"10",md:"7"}},[e(n.Z,{staticClass:"mt-4",attrs:{text:"",color:"blue"},on:{click:t.getAllUsers}},[t._v("Contratos activos por usuario"),e(tt.Z,[t._v("mdi-refresh")])],1)],1)],1)],1),t.noBalance?e(r.Z,{attrs:{elevation:"3",type:"error"},on:{click:function(e){t.noBalance=!1}}},[t._v("Necesitas más créditos ")]):t._e(),e(i.Z,{staticClass:"overflow-auto",attrs:{height:t.windowHeight}},[e(X.Z,{attrs:{multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},t._l(t.usersFull,(function(a,s){return e(G.Z,{key:s},[e(J.Z,[e(u.Z,[e(l.Z,{attrs:{cols:"12",md:"2"}},[e(K.Z,{attrs:{color:"primary"}},[t._v(" "+t._s(a.role)+" ")])],1),e(l.Z,{staticClass:"text-left",attrs:{cols:"12",md:"4"}},[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v(" "+t._s(a.names)+" "+t._s(a.lastNames)+" ")])],1)],1)],1),t._l(a.files,(function(a,r){return e(Y.Z,{key:r},[e(u.Z,{staticClass:"background-color: blue"},[e(n.Z,{attrs:{text:"",color:"white"}},[t._v("Información de los datos: ")]),e(C.Z),e(n.Z,{attrs:{text:"",color:"white"},on:{click:function(e){return t.buy(s,r)}}},[t._v("Comprar ")])],1),e(u.Z,[e(l.Z,{attrs:{cols:"12",md:"4"}},[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Nombre de archivo: "+t._s(a.fileName.slice(0,30)))])],1),e(l.Z,{staticClass:"text-center",attrs:{cols:"12",md:"3"}},[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Tamaño de archivo: "+t._s(a.fileSize)+" kilobytes")])],1),e(l.Z,{staticClass:"text-center",attrs:{cols:"12",md:"3"}},[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Formato de archivo: "+t._s(a.dataFormat))])],1)],1),e(u.Z,{attrs:{cols:"12",md:"8"}},[e(n.Z,{staticClass:"ml-3",attrs:{text:"",color:"blue"}},[t._v("Etiquetas:")]),t._l(a.dataTypes,(function(a,s){return e(K.Z,{key:s,staticClass:"mx-2 my-1",attrs:{color:"primary"}},[t._v(" "+t._s(a)+" ")])}))],2),e(u.Z,[e(l.Z,{attrs:{cols:"12",md:"4"}},[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Precio: "+t._s(a.remuneration))])],1),e(l.Z,{staticClass:"text-center",attrs:{cols:"12",md:"2"}},[e(n.Z,{staticClass:"ml-2",attrs:{text:"",color:"blue"}},[t._v("Paciente: "+t._s(a.patientNames)+" "+t._s(a.patientLastNames))])],1)],1),e(Q.Z)],1)}))],2)})),1)],1)],1)},st=[],rt=(a(7658),{name:"HelloWorld",beforeMount(){this.getAllUsers(),this.windowHeight=.7*window.innerHeight},data:()=>({panel:[],panelItems:5,usersFull:[],unfold:!1,contractChosen:Number,noBalance:!1,windowHeight:0,windowWidth:window.innerWidth}),methods:{setWeb3Addr(){return!1},readWallet(){return!1},createWallet(){return!1},deployContract(){return!1},unfoldFiles(){this.unfold?this.panel=[...Array(this.panelItems).keys()].map(((t,e)=>e)):this.panel=[]},async getAllUsers(){this.usersFull=await this.$axios.get("users").then((function(t){return t.data})),console.log(this.usersFull,"all users"),this.panelItems=this.usersFull.length},getPanelContent(){this.panelItems=this.usersFull},async buy(t,e){console.log(t,e);let a=this.$store.state.userData.balance-this.usersFull[t].files[e].remuneration;console.log(a);let s=this.usersFull[t].balance+this.usersFull[t].files[e].remuneration;console.log(s);let r=this.$store.state.userData.files,o=this.usersFull[t].files[e];r.push(this.usersFull[t].files[e]._id);let n=this.$store.state.userData._id,i=this.usersFull[t]._id;a>=0?(await this.$axios.put(`users/${n}`,{balance:a}).then((function(t){console.log(t,"buyer update brute response")})).catch((function(t){console.log(t)})),await this.$axios.post(`data/${this.usersFull[t].files[e]._id}`,{user_id:this.usersFull[t]._id}).then((function(t){console.log(t,"file delete brute response")})).catch((function(t){console.log(t)})),await this.$axios.post("data",{ipfsAddr:o.ipfsAddr,fileName:o.fileName,fileSize:o.fileSize,dataFormat:o.dataFormat,remuneration:o.remuneration,dataTypes:o.dataTypes,patientNames:o.patientNames,patientLastNames:o.patientLastNames,user_id:n}).then((function(t){return console.log(t,"new file for buyer"),t.data})).catch((function(t){console.log(t)})),await this.$axios.put(`users/${i}`,{balance:s}).then((function(t){console.log(t,"seller update brute response")})).catch((function(t){console.log(t)}))):this.noBalance=!0,this.getAllUsers()}}}),ot=rt,nt=(0,b.Z)(ot,at,st,!1,null,null,null),it=nt.exports,lt={name:"HomeView",components:{HelloWorld:it}},ct=lt,ut=(0,b.Z)(ct,V,M,!1,null,null,null),dt=ut.exports,mt=a(5378),ht=a(248),ft=a(1908),pt=a(3944),gt=a(2776),vt=a(8228),Zt=a(2370),bt=function(){var t=this,e=t._self._c;return e(o.Z,[e(i.Z,{staticClass:"mt-3",attrs:{height:"windowHeight",width:t.windowWidth}},[e(i.Z,{staticClass:"float-left ml-5",attrs:{width:"48.5%",height:"60%",elevation:"5",outlined:"",shaped:""}},[e(mt.Z,{attrs:{flat:"",color:"blue"}},[e(tt.Z,{staticClass:"pr-2",attrs:{dark:""}},[t._v("mdi-list-box-outline")]),e(Zt.qW,{staticClass:"text-h6 white--text pl-0"},[t._v(" Listado de archivos ")]),e(i.Z,{staticClass:"ma-auto"}),e(C.Z),e(n.Z,{attrs:{color:"white",icon:""}},[e(tt.Z,{on:{click:t.fillFileList}},[t._v("mdi-refresh")])],1)],1),e(ht.Z,{staticClass:"ma-2"},[e(gt.Z,{staticClass:"overflow-auto",model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[e(ft.Z,[e(pt.km,[e(pt.V9,[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Tipo")])],1)],1),e(pt.km,[e(pt.V9,[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Nombre de archivo")])],1)],1),e(pt.km,[e(pt.V9,[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Tamaño de archivo")])],1)],1),e(pt.km,[e(pt.V9,[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Descargar")])],1)],1)],1),e(ft.Z,[e(Q.Z)],1),t._l(t.files,(function(a,s){return e(ft.Z,{key:s},[e(pt.km,[e(tt.Z,{domProps:{textContent:t._s(a.icon)}})],1),e(pt.km,[e(pt.V9,[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v(t._s(a.name))])],1)],1),e(pt.km,[e(pt.V9,[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v(t._s(a.size)+" kilobytes")])],1)],1),e(pt.km,[e(vt.Z,[e(tt.Z,{on:{click:function(e){return t.getIpfsFile(s)}}},[t._v("mdi-download")])],1)],1)],1)}))],2)],1),e(w.h7,[e(C.Z)],1)],1),e(i.Z,{staticClass:"float-right mr-5",attrs:{width:"48.5%","max-height":"60%","min-height":"45%",elevation:"5",outlined:"",shaped:""}},[e("UploadData",{on:{fileData:t.getFileData}})],1),e(i.Z,{staticClass:"float-end ma-5",attrs:{width:"98%",height:"25%",elevation:"5",outlined:""}},[e("ContractStarter",{attrs:{fileData:t.fileData}})],1)],1)],1)},_t=[],yt=a(271),wt=function(){var t=this,e=t._self._c;return e(i.Z,[e(mt.Z,{attrs:{flat:"",color:"blue"}},[e(tt.Z,{staticClass:"pr-2",attrs:{dark:""}},[t._v("mdi-folder-arrow-up-outline")]),e(Zt.qW,{staticClass:"text-h6 white--text pl-0"},[t._v(" Subir a IPFS ")]),e(i.Z,{staticClass:"ma-auto"}),e(C.Z),e(n.Z,{attrs:{color:"white",icon:""}},[e(tt.Z,[t._v("mdi-power-plug-off")])],1)],1),e(i.Z,{staticClass:"pa-2",attrs:{flat:""}},[e(n.Z,{staticClass:"font-weight-black",attrs:{text:"",color:"blue"}},[t._v("Información del archivo")]),e(l.Z,{attrs:{"no-gutters":""}},[e(u.Z,[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Nombre: "+t._s(t.name)+" ")])],1),e(u.Z,[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Tamaño: "+t._s(t.size))])],1),e(u.Z,[e(n.Z,{attrs:{text:"",color:"blue"}},[t._v("Tipo: "+t._s(t.type))])],1)],1)],1),e(yt.Z,{staticClass:"pa-10 mx-auto",attrs:{color:"blue",accept:"*",label:"Presione para seleccionar un archivo"},on:{change:function(e){return t.captureFile(t.uploadBtn)}},model:{value:t.uploadBtn,callback:function(e){t.uploadBtn=e},expression:"uploadBtn"}}),e(w.h7,[e(C.Z),e(n.Z,{staticClass:"mr-8",attrs:{dark:"",color:"primary",large:""},on:{click:t.onSubmit}},[t._v(" Subir "),e(tt.Z,{attrs:{right:"",dark:""}},[t._v(" mdi-cloud-upload ")])],1)],1)],1)},xt=[],kt=a(3952),Ct=a(8764);const Dt="2KiK6S75slDQfxRFU5dfP7z7TQG",Ft="622237ae0de6536fe6464071ffa0a100",At="Basic "+Ct.lW.from(Dt+":"+Ft).toString("base64"),St=(0,kt.Ue)({host:"ipfs.infura.io",port:5001,protocol:"https",headers:{authorization:At}});var $t=St,Nt={data:()=>({uploadBtn:[],buffer:"",name:"",size:0,type:""}),methods:{async convertToBuffer(t){return Ct.lW.from(t)},captureFile(t){console.log(t),this.name=t.name,this.size=t.size,this.type=t.type;const e=new FileReader;"undefined"!==typeof t?(e.readAsArrayBuffer(t),e.onloadend=async()=>{this.buffer=await this.convertToBuffer(e.result)}):this.buffer=""},async onSubmit(){this.$root.loading=!0;let t=await $t.add(this.buffer);console.log(t),this.$emit("fileData",[this.type,this.name,this.size,t.path])},handleOk(){this.buffer&&this.caption?this.onSubmit():alert("Please fill in the information.")}},mounted(){}},Tt=Nt,Pt=(0,b.Z)(Tt,wt,xt,!1,null,null,null),Bt=Pt.exports,Et=a(6072),It=a(5316),qt=function(){var t=this,e=t._self._c;return e(i.Z,[e(mt.Z,{attrs:{flat:"",color:"blue"}},[e(tt.Z,{staticClass:"pr-2",attrs:{dark:""}},[t._v("mdi-file-sign")]),e(Zt.qW,{staticClass:"text-h6 white--text pl-0"},[t._v(" Carta de consentimiento ")]),e(i.Z,{staticClass:"ma-auto"}),e(C.Z),e(n.Z,{attrs:{outlined:"",color:"white",disabled:!t.consentCheck},on:{click:t.signContract}},[t._v("Firmar"),e(tt.Z,[t._v("mdi-draw-pen")])],1)],1),e(k.Z,{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(x.Z,[e(u.Z,[e(l.Z,{attrs:{cols:"12",md:"2"}},[e(Et.Z,{attrs:{label:"Son mis datos",color:"primary",value:"primary","hide-details":""},on:{click:t.updateNames},model:{value:t.ownData,callback:function(e){t.ownData=e},expression:"ownData"}})],1),e(l.Z,{attrs:{cols:"12",md:"4"}},[e(D.Z,{attrs:{rules:t.nameRules,label:"Nombre(s) del paciente",required:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}})],1),e(l.Z,{attrs:{cols:"12",md:"4"}},[e(D.Z,{attrs:{rules:t.nameRules,label:"Apellido(s) del paciente",required:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}})],1),e(l.Z,{attrs:{cols:"12",md:"2"}},[e(D.Z,{attrs:{label:"Remuneración esperada",value:"00.00",prefix:"$"},model:{value:t.payment,callback:function(e){t.payment=e},expression:"payment"}})],1)],1),e(u.Z,[e(l.Z,[e(It.Z,{attrs:{items:t.dataTypeItems,"search-input":t.search,"hide-selected":"",hint:"Máximo 5 etiquetas",label:"¿Qué tipo de datos contiene?",multiple:"","persistent-hint":"","small-chips":"",clearable:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[e(ft.Z,[e(pt.km,[e(pt.V9,[t._v(' No se encuentra "'),e("strong",[t._v(t._s(t.search))]),t._v('". Presione '),e("kbd",[t._v("Enter")]),t._v(" para agregar esta etiqueta ")])],1)],1)]},proxy:!0}]),model:{value:t.dataType,callback:function(e){t.dataType=e},expression:"dataType"}})],1),e(l.Z,[e(Et.Z,{attrs:{label:"Al marcar esta casilla confirma haber leído y aceptado la carta de consentimiento de uso de datos que puede encontrar en este enlace",color:"success",value:"success","hide-details":""},model:{value:t.consentCheck,callback:function(e){t.consentCheck=e},expression:"consentCheck"}})],1)],1)],1)],1),t.signSuccess?e(r.Z,{attrs:{elevation:"3",type:"success"},on:{click:function(e){t.signSuccess=!1}}},[t._v("Firmado correctamente ")]):t._e()],1)},Lt=[],Ut={props:["fileData"],data:()=>({consentCheck:!1,ownData:!1,valid:!1,firstname:"",lastname:"",nameRules:[t=>!!t||"Se necesita un nombre",t=>t.length>=2||"Demasiado corto"],email:"",emailRules:[t=>!!t||"E-mail is required",t=>/.+@.+/.test(t)||"E-mail must be valid"],dataTypeItems:["Grabaciones de voz","Electrocardiograma","Trazas de movilidad","Historial médico"],dataType:[],search:null,payment:0,signSuccess:!1}),watch:{dataType(t){t.length>5&&this.$nextTick((()=>this.dataType.pop()))}},methods:{async signContract(){console.log(this.fileData);let t=await this.$axios.post("data",{ipfsAddr:this.fileData[3],fileName:this.fileData[1],fileSize:this.fileData[2],dataFormat:this.fileData[0],remuneration:this.payment,dataTypes:this.dataType,patientNames:this.firstname,patientLastNames:this.lastname,user_id:this.$store.state.userData._id}).then((function(t){return console.log(t),t.data})).catch((function(t){console.log(t)}));"undefined"!=typeof t&&(this.signSuccess=!0)},updateNames(){console.log(this.$store.state.userData),this.firstname=this.$store.state.userData.names,this.lastname=this.$store.state.userData.lastNames}}},Wt=Ut,zt=(0,b.Z)(Wt,qt,Lt,!1,null,null,null),Ot=zt.exports,jt={components:{UploadData:Bt,ContractStarter:Ot},data:()=>({files:[],model:1,windowHeight:.7*window.innerHeight,windowWidth:window.innerWidth,fileData:[],userFiles:[]}),methods:{getFileData(t){this.fileData=t,console.log(t,"data received from upload");let e="";e="image"==t[0].slice(0,5)?"mdi-image":"audio"==t[0].slice(0,5)?"mdi-music-box-outline":"video"==t[0].slice(0,5)?"mdi-movie-open-outline":"mdi-file",this.files.push({icon:e,name:t[1],size:t[2],addr:t[3]})},fillFileList(){console.log(this.userFiles);let t=this.userFiles;t.forEach((t=>{let e="";e="image"==t.dataFormat.slice(0,5)?"mdi-image":"audio"==t.dataFormat.slice(0,5)?"mdi-music-box-outline":"video"==t.dataFormat.slice(0,5)?"mdi-movie-open-outline":"mdi-file",this.files.push({icon:e,name:t.fileName,size:t.fileSize,addr:t.ipfsAddr})}))},async getUserFiles(){let t=this.$store.state.userData._id;console.log(t),this.userFiles=await this.$axios.get(`users/${t}`).then((function(t){return console.log(t),t.data.files})).catch((function(t){console.log(t)})),console.log(this.userFiles),this.fillFileList()},async getIpfsFile(t){window.open("https://tesis.infura-ipfs.io/ipfs/"+this.files[t].addr)}},mounted(){this.getUserFiles()}},Ht=jt,Rt=(0,b.Z)(Ht,bt,_t,!1,null,null,null),Vt=Rt.exports;s.ZP.use(R.ZP);const Mt=[{path:"/",name:"home",component:dt},{path:"/upload",name:"upload",component:Vt},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,6545))}],Kt=new R.ZP({routes:Mt});var Qt=Kt,Gt=a(8433),Yt=a(629);s.ZP.use(Yt.ZP);const Jt={userData:{}},Xt={update(t,e){t.userData=e}},te=new Yt.ZP.Store({state:Jt,mutations:Xt}),ee=Gt.Z.create({baseURL:"https://tesisserver.onrender.com/"});s.ZP.config.productionTip=!1,s.ZP.prototype.$axios=ee,new s.ZP({vuetify:H,router:Qt,store:te,render:t=>t(O)}).$mount("#app")},3897:function(){}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,o){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],o=t[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,o<n&&(n=o));if(i){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[s,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,s){return a.f[s](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.6e4b5025.js"}}(),function(){a.miniCssF=function(t){return"css/about.8fc2c8b5.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="interface:";a.l=function(s,r,o,n){if(t[s])t[s].push(r);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==e+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+o),i.src=s),t[s]=[r];var m=function(e,a){i.onerror=i.onload=null,clearTimeout(h);var r=t[s];if(delete t[s],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(t){return t(a)})),e)return e(a)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t=function(t,e,a,s){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)a();else{var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=i,r.parentNode.removeChild(r),s(l)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var r=a[s],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var n=document.getElementsByTagName("style");for(s=0;s<n.length;s++){r=n[s],o=r.getAttribute("data-href");if(o===t||o===e)return r}},s=function(s){return new Promise((function(r,o){var n=a.miniCssF(s),i=a.p+n;if(e(n,i))return r();t(s,i,r,o)}))},r={143:0};a.f.miniCss=function(t,e){var a={443:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=s(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,s){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)s.push(r[2]);else{var o=new Promise((function(a,s){r=t[e]=[a,s]}));s.push(r[2]=o);var n=a.p+a.u(e),i=new Error,l=function(s){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,r[1](i)}};a.l(n,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,o,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var u=l(a)}for(e&&e(s);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},s=self["webpackChunkinterface"]=self["webpackChunkinterface"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3605)}));s=a.O(s)})();
//# sourceMappingURL=app.c88e8b05.js.map