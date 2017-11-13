!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("child_process"),require("os")):"function"==typeof define&&define.amd?define(["child_process","os"],n):"object"==typeof exports?exports.neataptic=n(require("child_process"),require("os")):t.neataptic=n(t.child_process,t.os)}(this,function(t,n){return function(t){function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=10)}([function(t,n,e){var o={activation:e(8),mutation:e(11),selection:e(12),crossover:e(13),cost:e(14),gating:e(15),connection:e(16),rate:e(17)};t.exports=o},function(t,n){var e={warnings:!1};t.exports=e},function(t,n,e){function o(t){this.bias="input"===t?0:.2*Math.random()-.1,this.squash=i.activation.LOGISTIC,this.type=t||"hidden",this.activation=0,this.state=0,this.old=0,this.mask=1,this.previousDeltaBias=0,this.totalDeltaBias=0,this.connections={in:[],out:[],gated:[],self:new s(this,this,0)},this.error={responsibility:0,projected:0,gated:0}}t.exports=o;var i=e(0),s=e(3),r=e(1);o.prototype={activate:function(t){if(void 0!==t)return this.activation=t,this.activation;this.old=this.state,this.state=this.connections.self.gain*this.connections.self.weight*this.state+this.bias;var n;for(n=0;n<this.connections.in.length;n++){var e=this.connections.in[n];this.state+=e.from.activation*e.weight*e.gain}this.activation=this.squash(this.state)*this.mask,this.derivative=this.squash(this.state,!0);var o=[],i=[];for(n=0;n<this.connections.gated.length;n++){let t=this.connections.gated[n],e=t.to,s=o.indexOf(e);s>-1?i[s]+=t.weight*t.from.activation:(o.push(e),i.push(t.weight*t.from.activation+(e.connections.self.gater===this?e.old:0))),t.gain=this.activation}for(n=0;n<this.connections.in.length;n++){let t=this.connections.in[n];t.elegibility=this.connections.self.gain*this.connections.self.weight*t.elegibility+t.from.activation*t.gain;for(var s=0;s<o.length;s++){let n=o[s],e=i[s],r=t.xtrace.nodes.indexOf(n);r>-1?t.xtrace.values[r]=n.connections.self.gain*n.connections.self.weight*t.xtrace.values[r]+this.derivative*t.elegibility*e:(t.xtrace.nodes.push(n),t.xtrace.values.push(this.derivative*t.elegibility*e))}}return this.activation},noTraceActivate:function(t){if(void 0!==t)return this.activation=t,this.activation;this.state=this.connections.self.gain*this.connections.self.weight*this.state+this.bias;var n;for(n=0;n<this.connections.in.length;n++){var e=this.connections.in[n];this.state+=e.from.activation*e.weight*e.gain}for(this.activation=this.squash(this.state),n=0;n<this.connections.gated.length;n++)this.connections.gated[n].gain=this.activation;return this.activation},propagate:function(t,n,e,o){n=n||0,t=t||.3;var i=0;if("output"===this.type)this.error.responsibility=this.error.projected=o-this.activation;else{var s;for(s=0;s<this.connections.out.length;s++){let t=this.connections.out[s];i+=t.to.error.responsibility*t.weight*t.gain}for(this.error.projected=this.derivative*i,i=0,s=0;s<this.connections.gated.length;s++){let t=this.connections.gated[s],n=t.to,e=n.connections.self.gater===this?n.old:0;e+=t.weight*t.from.activation,i+=n.error.responsibility*e}this.error.gated=this.derivative*i,this.error.responsibility=this.error.projected+this.error.gated}if("constant"!==this.type){for(s=0;s<this.connections.in.length;s++){let o=this.connections.in[s],i=this.error.projected*o.elegibility;for(var r=0;r<o.xtrace.nodes.length;r++){let t=o.xtrace.nodes[r],n=o.xtrace.values[r];i+=t.error.responsibility*n}let a=t*i*this.mask;o.totalDeltaWeight+=a,e&&(o.totalDeltaWeight+=n*o.previousDeltaWeight,o.weight+=o.totalDeltaWeight,o.previousDeltaWeight=o.totalDeltaWeight,o.totalDeltaWeight=0)}var a=t*this.error.responsibility;this.totalDeltaBias+=a,e&&(this.totalDeltaBias+=n*this.previousDeltaBias,this.bias+=this.totalDeltaBias,this.previousDeltaBias=this.totalDeltaBias,this.totalDeltaBias=0)}},connect:function(t,n){var e=[];if(void 0!==t.bias)if(t===this)0!==this.connections.self.weight?r.warnings&&console.warn("This connection already exists!"):this.connections.self.weight=n||1,e.push(this.connections.self);else{if(this.isProjectingTo(t))throw new Error("Already projecting a connection to this node!");{let o=new s(this,t,n);t.connections.in.push(o),this.connections.out.push(o),e.push(o)}}else for(var o=0;o<t.nodes.length;o++){let i=new s(this,t.nodes[o],n);t.nodes[o].connections.in.push(i),this.connections.out.push(i),t.connections.in.push(i),e.push(i)}return e},disconnect:function(t,n){if(this!==t){for(var e=0;e<this.connections.out.length;e++){let n=this.connections.out[e];if(n.to===t){this.connections.out.splice(e,1);let t=n.to.connections.in.indexOf(n);n.to.connections.in.splice(t,1),null!==n.gater&&n.gater.ungate(n);break}}n&&t.disconnect(this)}else this.connections.self.weight=0},gate:function(t){Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++){var e=t[n];this.connections.gated.push(e),e.gater=this}},ungate:function(t){Array.isArray(t)||(t=[t]);for(var n=t.length-1;n>=0;n--){var e=t[n],o=this.connections.gated.indexOf(e);this.connections.gated.splice(o,1),e.gater=null,e.gain=1}},clear:function(){for(var t=0;t<this.connections.in.length;t++){var n=this.connections.in[t];n.elegibility=0,n.xtrace={nodes:[],values:[]}}for(t=0;t<this.connections.gated.length;t++){this.connections.gated[t].gain=0}this.error.responsibility=this.error.projected=this.error.gated=0,this.old=this.state=this.activation=0},mutate:function(t){if(void 0===t)throw new Error("No mutate method given!");if(!(t.name in i.mutation))throw new Error("This method does not exist!");switch(t){case i.mutation.MOD_ACTIVATION:var n=t.allowed[(t.allowed.indexOf(this.squash)+Math.floor(Math.random()*(t.allowed.length-1))+1)%t.allowed.length];this.squash=n;break;case i.mutation.MOD_BIAS:var e=Math.random()*(t.max-t.min)+t.min;this.bias+=e}},isProjectingTo:function(t){if(t===this&&0!==this.connections.self.weight)return!0;for(var n=0;n<this.connections.out.length;n++){if(this.connections.out[n].to===t)return!0}return!1},isProjectedBy:function(t){if(t===this&&0!==this.connections.self.weight)return!0;for(var n=0;n<this.connections.in.length;n++){if(this.connections.in[n].from===t)return!0}return!1},toJSON:function(){return{bias:this.bias,type:this.type,squash:this.squash.name,mask:this.mask}}},o.fromJSON=function(t){var n=new o;return n.bias=t.bias,n.type=t.type,n.mask=t.mask,n.squash=i.activation[t.squash],n}},function(t,n){function e(t,n,e){this.from=t,this.to=n,this.gain=1,this.weight=void 0===e?.2*Math.random()-.1:e,this.gater=null,this.elegibility=0,this.previousDeltaWeight=0,this.totalDeltaWeight=0,this.xtrace={nodes:[],values:[]}}t.exports=e,e.prototype={toJSON:function(){return{weight:this.weight}}},e.innovationID=function(t,n){return.5*(t+n)*(t+n+1)+n}},function(t,n,e){function o(t,n){if(void 0===t||void 0===n)throw new Error("No input or output size given");this.input=t,this.output=n,this.nodes=[],this.connections=[],this.gates=[],this.selfconns=[],this.dropout=0;var e;for(e=0;e<this.input+this.output;e++){var o=e<this.input?"input":"output";this.nodes.push(new c(o))}for(e=0;e<this.input;e++)for(var i=this.input;i<this.output+this.input;i++){var s=Math.random()*this.input*Math.sqrt(2/this.input);this.connect(this.nodes[e],this.nodes[i],s)}}t.exports=o;var i=e(5),s=e(0),r=e(3),a=e(1),h=e(9),c=e(2),u=s.mutation;o.prototype={activate:function(t,n){for(var e=[],o=0;o<this.nodes.length;o++)if("input"===this.nodes[o].type)this.nodes[o].activate(t[o]);else if("output"===this.nodes[o].type){var i=this.nodes[o].activate();e.push(i)}else n&&(this.nodes[o].mask=Math.random()<this.dropout?0:1),this.nodes[o].activate();return e},noTraceActivate:function(t){for(var n=[],e=0;e<this.nodes.length;e++)if("input"===this.nodes[e].type)this.nodes[e].noTraceActivate(t[e]);else if("output"===this.nodes[e].type){var o=this.nodes[e].noTraceActivate();n.push(o)}else this.nodes[e].noTraceActivate();return n},propagate:function(t,n,e,o){if(void 0===o||o.length!==this.output)throw new Error("Output target length should match network output length");var i,s=o.length;for(i=this.nodes.length-1;i>=this.nodes.length-this.output;i--)this.nodes[i].propagate(t,n,e,o[--s]);for(i=this.nodes.length-this.output-1;i>=this.input;i--)this.nodes[i].propagate(t,n,e)},clear:function(){for(var t=0;t<this.nodes.length;t++)this.nodes[t].clear()},connect:function(t,n,e){for(var o=t.connect(n,e),i=0;i<o.length;i++){var s=o[i];t!==n?this.connections.push(s):this.selfconns.push(s)}return o},disconnect:function(t,n){for(var e=t===n?this.selfconns:this.connections,o=0;o<e.length;o++){var i=e[o];if(i.from===t&&i.to===n){null!==i.gater&&this.ungate(i),e.splice(o,1);break}}t.disconnect(n)},gate:function(t,n){if(-1===this.nodes.indexOf(t))throw new Error("This node is not part of the network!");null==n.gater?(t.gate(n),this.gates.push(n)):a.warnings&&console.warn("This connection is already gated!")},ungate:function(t){var n=this.gates.indexOf(t);if(-1===n)throw new Error("This connection is not gated!");this.gates.splice(n,1),t.gater.ungate(t)},remove:function(t){var n=this.nodes.indexOf(t);if(-1===n)throw new Error("This node does not exist in the network!");var e=[];this.disconnect(t,t);for(var o=[],i=t.connections.in.length-1;i>=0;i--){let n=t.connections.in[i];u.SUB_NODE.keep_gates&&null!==n.gater&&n.gater!==t&&e.push(n.gater),o.push(n.from),this.disconnect(n.from,t)}var s=[];for(i=t.connections.out.length-1;i>=0;i--){let n=t.connections.out[i];u.SUB_NODE.keep_gates&&null!==n.gater&&n.gater!==t&&e.push(n.gater),s.push(n.to),this.disconnect(t,n.to)}var r=[];for(i=0;i<o.length;i++){let t=o[i];for(var a=0;a<s.length;a++){let n=s[a];if(!t.isProjectingTo(n)){var h=this.connect(t,n);r.push(h[0])}}}for(i=0;i<e.length&&0!==r.length;i++){let t=e[i],n=Math.floor(Math.random()*r.length);this.gate(t,r[n]),r.splice(n,1)}for(i=t.connections.gated.length-1;i>=0;i--){let n=t.connections.gated[i];this.ungate(n)}this.disconnect(t,t),this.nodes.splice(n,1)},mutate:function(t){if(void 0===t)throw new Error("No (correct) mutate method given!");var n,e;switch(t){case u.ADD_NODE:var o=(l=this.connections[Math.floor(Math.random()*this.connections.length)]).gater;this.disconnect(l.from,l.to);var i=this.nodes.indexOf(l.to);(v=new c("hidden")).mutate(u.MOD_ACTIVATION);var s=Math.min(i,this.nodes.length-this.output);this.nodes.splice(s,0,v);var r=this.connect(l.from,v)[0],h=this.connect(v,l.to)[0];null!=o&&this.gate(o,Math.random()>=.5?r:h);break;case u.SUB_NODE:if(this.nodes.length===this.input+this.output){a.warnings&&console.warn("No more nodes left to remove!");break}d=Math.floor(Math.random()*(this.nodes.length-this.output-this.input)+this.input);this.remove(this.nodes[d]);break;case u.ADD_CONN:O=[];for(n=0;n<this.nodes.length-this.output;n++){let t=this.nodes[n];for(e=Math.max(n+1,this.input);e<this.nodes.length;e++){let n=this.nodes[e];t.isProjectingTo(n)||O.push([t,n])}}if(0===O.length){a.warnings&&console.warn("No more connections to be made!");break}A=O[Math.floor(Math.random()*O.length)];this.connect(A[0],A[1]);break;case u.SUB_CONN:g=[];for(n=0;n<this.connections.length;n++){let t=this.connections[n];t.from.connections.out.length>1&&t.to.connections.in.length>1&&this.nodes.indexOf(t.to)>this.nodes.indexOf(t.from)&&g.push(t)}if(0===g.length){a.warnings&&console.warn("No connections to remove!");break}T=g[Math.floor(Math.random()*g.length)];this.disconnect(T.from,T.to);break;case u.MOD_WEIGHT:var l=(p=this.connections.concat(this.selfconns))[Math.floor(Math.random()*p.length)],f=Math.random()*(t.max-t.min)+t.min;l.weight+=f;break;case u.MOD_BIAS:d=Math.floor(Math.random()*(this.nodes.length-this.input)+this.input);(v=this.nodes[d]).mutate(t);break;case u.MOD_ACTIVATION:if(!t.mutateOutput&&this.input+this.output===this.nodes.length){a.warnings&&console.warn("No nodes that allow mutation of activation function");break}d=Math.floor(Math.random()*(this.nodes.length-(t.mutateOutput?0:this.output)-this.input)+this.input);(v=this.nodes[d]).mutate(t);break;case u.ADD_SELF_CONN:g=[];for(n=this.input;n<this.nodes.length;n++){let t=this.nodes[n];0===t.connections.self.weight&&g.push(t)}if(0===g.length){a.warnings&&console.warn("No more self-connections to add!");break}v=g[Math.floor(Math.random()*g.length)];this.connect(v,v);break;case u.SUB_SELF_CONN:if(0===this.selfconns.length){a.warnings&&console.warn("No more self-connections to remove!");break}m=this.selfconns[Math.floor(Math.random()*this.selfconns.length)];this.disconnect(m.from,m.to);break;case u.ADD_GATE:var p=this.connections.concat(this.selfconns),g=[];for(n=0;n<p.length;n++){let t=p[n];null===t.gater&&g.push(t)}if(0===g.length){a.warnings&&console.warn("No more connections to gate!");break}var d=Math.floor(Math.random()*(this.nodes.length-this.input)+this.input),v=this.nodes[d],m=g[Math.floor(Math.random()*g.length)];this.gate(v,m);break;case u.SUB_GATE:if(0===this.gates.length){a.warnings&&console.warn("No more connections to ungate!");break}var d=Math.floor(Math.random()*this.gates.length),w=this.gates[d];this.ungate(w);break;case u.ADD_BACK_CONN:var O=[];for(n=this.input;n<this.nodes.length;n++){let t=this.nodes[n];for(e=this.input;e<n;e++){let n=this.nodes[e];t.isProjectingTo(n)||O.push([t,n])}}if(0===O.length){a.warnings&&console.warn("No more connections to be made!");break}var A=O[Math.floor(Math.random()*O.length)];this.connect(A[0],A[1]);break;case u.SUB_BACK_CONN:g=[];for(n=0;n<this.connections.length;n++){let t=this.connections[n];t.from.connections.out.length>1&&t.to.connections.in.length>1&&this.nodes.indexOf(t.from)>this.nodes.indexOf(t.to)&&g.push(t)}if(0===g.length){a.warnings&&console.warn("No connections to remove!");break}var T=g[Math.floor(Math.random()*g.length)];this.disconnect(T.from,T.to);break;case u.SWAP_NODES:if(t.mutateOutput&&this.nodes.length-this.input<2||!t.mutateOutput&&this.nodes.length-this.input-this.output<2){a.warnings&&console.warn("No nodes that allow swapping of bias and activation function");break}var d=Math.floor(Math.random()*(this.nodes.length-(t.mutateOutput?0:this.output)-this.input)+this.input),_=this.nodes[d];d=Math.floor(Math.random()*(this.nodes.length-(t.mutateOutput?0:this.output)-this.input)+this.input);var N=this.nodes[d],L=_.bias,E=_.squash;_.bias=N.bias,_.squash=N.squash,N.bias=L,N.squash=E}},train:function(t,n){if(t[0].input.length!==this.input||t[0].output.length!==this.output)throw new Error("Dataset input/output size should be same as network input/output size!");void 0===(n=n||{}).rate&&a.warnings&&console.warn("Using default learning rate, please define a rate!"),void 0===n.iterations&&a.warnings&&console.warn("No target iterations given, running until error is reached!");var e=n.error||.05,o=n.cost||s.cost.MSE,i=n.rate||.3,r=n.dropout||0,h=n.momentum||0,c=n.batchSize||1,u=n.ratePolicy||s.rate.FIXED(),l=Date.now();if(c>t.length)throw new Error("Batch size must be smaller or equal to dataset length!");if(void 0===n.iterations&&void 0===n.error)throw new Error("At least one of the following options must be specified: error, iterations");if(void 0===n.error?e=-1:void 0===n.iterations&&(n.iterations=0),this.dropout=r,n.crossValidate){let e=Math.ceil((1-n.crossValidate.testSize)*t.length);var f=t.slice(0,e),p=t.slice(e)}for(var g,d,v,m=i,w=0,O=1;O>e&&(0===n.iterations||w<n.iterations)&&!(n.crossValidate&&O<=n.crossValidate.testError);){if(w++,m=u(i,w),n.crossValidate?(this._trainSet(f,c,m,h,o),n.clear&&this.clear(),O=this.test(p,o).error,n.clear&&this.clear()):(O=this._trainSet(t,c,m,h,o),n.clear&&this.clear()),n.shuffle)for(g=t.length;g;d=Math.floor(Math.random()*g),v=t[--g],t[g]=t[d],t[d]=v);n.log&&w%n.log==0&&console.log("iteration",w,"error",O,"rate",m),n.schedule&&w%n.schedule.iterations==0&&n.schedule.function({error:O,iteration:w})}if(n.clear&&this.clear(),r)for(g=0;g<this.nodes.length;g++)"hidden"!==this.nodes[g].type&&"constant"!==this.nodes[g].type||(this.nodes[g].mask=1-this.dropout);return{error:O,iterations:w,time:Date.now()-l}},_trainSet:function(t,n,e,o,i){for(var s=0,r=0;r<t.length;r++){var a=t[r].input,h=t[r].output,c=!((r+1)%n!=0&&r+1!==t.length),u=this.activate(a,!0);this.propagate(e,o,c,h),s+=i(h,u)}return s/t.length},test:function(t,n=s.cost.MSE){var e;if(this.dropout)for(e=0;e<this.nodes.length;e++)"hidden"!==this.nodes[e].type&&"constant"!==this.nodes[e].type||(this.nodes[e].mask=1-this.dropout);var o=0,i=Date.now();for(e=0;e<t.length;e++){let i=t[e].input;o+=n(t[e].output,this.noTraceActivate(i))}return{error:o/=t.length,time:Date.now()-i}},graph:function(t,n){var e,o=0,i=0,s={nodes:[],links:[],constraints:[{type:"alignment",axis:"x",offsets:[]},{type:"alignment",axis:"y",offsets:[]}]};for(e=0;e<this.nodes.length;e++){var r=this.nodes[e];"input"===r.type?(1===this.input?s.constraints[0].offsets.push({node:e,offset:0}):s.constraints[0].offsets.push({node:e,offset:.8*t/(this.input-1)*o++}),s.constraints[1].offsets.push({node:e,offset:0})):"output"===r.type&&(1===this.output?s.constraints[0].offsets.push({node:e,offset:0}):s.constraints[0].offsets.push({node:e,offset:.8*t/(this.output-1)*i++}),s.constraints[1].offsets.push({node:e,offset:-.8*n})),s.nodes.push({id:e,name:"hidden"===r.type?r.squash.name:r.type.toUpperCase(),activation:r.activation,bias:r.bias})}var a=this.connections.concat(this.selfconns);for(e=0;e<a.length;e++){var h=a[e];if(null==h.gater)s.links.push({source:this.nodes.indexOf(h.from),target:this.nodes.indexOf(h.to),weight:h.weight});else{var c=s.nodes.length;s.nodes.push({id:c,activation:h.gater.activation,name:"GATE"}),s.links.push({source:this.nodes.indexOf(h.from),target:c,weight:.5*h.weight}),s.links.push({source:c,target:this.nodes.indexOf(h.to),weight:.5*h.weight}),s.links.push({source:this.nodes.indexOf(h.gater),target:c,weight:h.gater.activation,gate:!0})}}return s},toJSON:function(){var t,n={nodes:[],connections:[],input:this.input,output:this.output,dropout:this.dropout};for(t=0;t<this.nodes.length;t++)this.nodes[t].index=t;for(t=0;t<this.nodes.length;t++){let e=this.nodes[t],o=e.toJSON();if(o.index=t,n.nodes.push(o),0!==e.connections.self.weight){let o=e.connections.self.toJSON();o.from=t,o.to=t,o.gater=null!=e.connections.self.gater?e.connections.self.gater.index:null,n.connections.push(o)}}for(t=0;t<this.connections.length;t++){let e=this.connections[t],o=e.toJSON();o.from=e.from.index,o.to=e.to.index,o.gater=null!=e.gater?e.gater.index:null,n.connections.push(o)}return n},set:function(t){for(var n=0;n<this.nodes.length;n++)this.nodes[n].bias=t.bias||this.nodes[n].bias,this.nodes[n].squash=t.squash||this.nodes[n].squash},evolve:async function(t,n){if(t[0].input.length!==this.input||t[0].output.length!==this.output)throw new Error("Dataset input/output size should be same as network input/output size!");var o=void 0!==(n=n||{}).error?n.error:.05,r=void 0!==n.growth?n.growth:1e-4,a=n.cost||s.cost.MSE,c=n.amount||1,u=n.threads;void 0===u&&(u="undefined"==typeof window?e(25).cpus().length:navigator.hardwareConcurrency);var l=Date.now();if(void 0===n.iterations&&void 0===n.error)throw new Error("At least one of the following options must be specified: error, iterations");void 0===n.error?o=-1:void 0===n.iterations&&(n.iterations=0);var f;if(1===u)f=function(n){for(var e=0,o=0;o<c;o++)e-=n.test(t,a).error;return e-=(n.nodes.length-n.input-n.output+n.connections.length+n.gates.length)*r,(e=isNaN(e)?-1/0:e)/c};else{var p=i.serializeDataSet(t),g=[];if("undefined"==typeof window)for(O=0;O<u;O++)g.push(new i.workers.node.TestWorker(p,a));else for(O=0;O<u;O++)g.push(new i.workers.browser.TestWorker(p,a));f=function(t){return new Promise((n,e)=>{for(var o=t.slice(),i=0,s=function(t){if(o.length){var e=o.shift();t.evaluate(e).then(function(n){e.score=-n,e.score-=(e.nodes.length-e.input-e.output+e.connections.length+e.gates.length)*r,e.score=isNaN(parseFloat(n))?-1/0:e.score,s(t)})}else++i===u&&n()},a=0;a<g.length;a++)s(g[a])})},n.fitnessPopulation=!0}n.network=this;for(var d,v=new h(this.input,this.output,f,n),m=-1/0,w=-1/0;m<-o&&(0===n.iterations||v.generation<n.iterations);){let t=await v.evolve(),e=t.score;m=e+(t.nodes.length-t.input-t.output+t.connections.length+t.gates.length)*r,e>w&&(w=e,d=t),n.log&&v.generation%n.log==0&&console.log("iteration",v.generation,"fitness",e,"error",-m),n.schedule&&v.generation%n.schedule.iterations==0&&n.schedule.function({fitness:e,error:-m,iteration:v.generation})}if(u>1)for(var O=0;O<g.length;O++)g[O].terminate();return void 0!==d&&(this.nodes=d.nodes,this.connections=d.connections,this.selfconns=d.selfconns,this.gates=d.gates,n.clear&&this.clear()),{error:-m,iterations:v.generation,time:Date.now()-l}},standalone:function(){var t,n=[],e=[],o=[],i=[],s=[];for(t=0;t<this.input;t++){var r=this.nodes[t];e.push(r.activation),o.push(r.state)}for(i.push("for(var i = 0; i < input.length; i++) A[i] = input[i];"),t=0;t<this.nodes.length;t++)this.nodes[t].index=t;for(t=this.input;t<this.nodes.length;t++){let r=this.nodes[t];e.push(r.activation),o.push(r.state);var a=n.indexOf(r.squash.name);-1===a&&(a=n.length,n.push(r.squash.name),s.push(r.squash.toString()));for(var h=[],c=0;c<r.connections.in.length;c++){var u=r.connections.in[c],l=`A[${u.from.index}] * ${u.weight}`;null!=u.gater&&(l+=` * A[${u.gater.index}]`),h.push(l)}if(r.connections.self.weight){let n=r.connections.self,e=`S[${t}] * ${n.weight}`;null!=n.gater&&(e+=` * A[${n.gater.index}]`),h.push(e)}var f=`S[${t}] = ${h.join(" + ")} + ${r.bias};`,p=`A[${t}] = F[${a}](S[${t}])${r.mask?"":" * "+r.mask};`;i.push(f),i.push(p)}var g=[];for(t=this.nodes.length-this.output;t<this.nodes.length;t++)g.push(`A[${t}]`);g=`return [${g.join(",")}];`,i.push(g);var d="";return d+=`var F = [${s.toString()}];\r\n`,d+=`var A = [${e.toString()}];\r\n`,d+=`var S = [${o.toString()}];\r\n`,d+=`function activate(input){\r\n${i.join("\r\n")}\r\n}`},serialize:function(){var t=[],n=[],e=[],o=["LOGISTIC","TANH","IDENTITY","STEP","RELU","SOFTSIGN","SINUSOID","GAUSSIAN","BENT_IDENTITY","BIPOLAR","BIPOLAR_SIGMOID","HARD_TANH","ABSOLUTE","INVERSE","SELU"];e.push(this.input),e.push(this.output);var i;for(i=0;i<this.nodes.length;i++){let e=this.nodes[i];e.index=i,t.push(e.activation),n.push(e.state)}for(i=this.input;i<this.nodes.length;i++){let t=this.nodes[i];e.push(t.index),e.push(t.bias),e.push(o.indexOf(t.squash.name)),e.push(t.connections.self.weight),e.push(null==t.connections.self.gater?-1:t.connections.self.gater.index);for(var s=0;s<t.connections.in.length;s++){let n=t.connections.in[s];e.push(n.from.index),e.push(n.weight),e.push(null==n.gater?-1:n.gater.index)}e.push(-2)}return[t,n,e]}},o.fromJSON=function(t){var n=new o(t.input,t.output);n.dropout=t.dropout,n.nodes=[],n.connections=[];var e;for(e=0;e<t.nodes.length;e++)n.nodes.push(c.fromJSON(t.nodes[e]));for(e=0;e<t.connections.length;e++){var i=t.connections[e],s=n.connect(n.nodes[i.from],n.nodes[i.to])[0];s.weight=i.weight,null!=i.gater&&n.gate(n.nodes[i.gater],s)}return n},o.merge=function(t,n){if(t=o.fromJSON(t.toJSON()),n=o.fromJSON(n.toJSON()),t.output!==n.input)throw new Error("Output size of network1 should be the same as the input size of network2!");var e;for(e=0;e<n.connections.length;e++){let o=n.connections[e];if("input"===o.from.type){let e=n.nodes.indexOf(o.from);o.from=t.nodes[t.nodes.length-1-e]}}for(e=n.input-1;e>=0;e--)n.nodes.splice(e,1);for(e=t.nodes.length-t.output;e<t.nodes.length;e++)t.nodes[e].type="hidden";return t.connections=t.connections.concat(n.connections),t.nodes=t.nodes.concat(n.nodes),t},o.crossOver=function(t,n,e){if(t.input!==n.input||t.output!==n.output)throw new Error("Networks don't have the same input/output size!");var i=new o(t.input,t.output);i.connections=[],i.nodes=[];var s,a=t.score||0,h=n.score||0;if(e||a===h){let e=Math.max(t.nodes.length,n.nodes.length),o=Math.min(t.nodes.length,n.nodes.length);s=Math.floor(Math.random()*(e-o+1)+o)}else s=a>h?t.nodes.length:n.nodes.length;var u,l=t.output;for(u=0;u<t.nodes.length;u++)t.nodes[u].index=u;for(u=0;u<n.nodes.length;u++)n.nodes[u].index=u;for(u=0;u<s;u++){var f;if(u<s-l){let e=Math.random();f=e>=.5?t.nodes[u]:n.nodes[u];let o=e<.5?t.nodes[u]:n.nodes[u];void 0!==f&&"output"!==f.type||(f=o)}else f=Math.random()>=.5?t.nodes[t.nodes.length+u-s]:n.nodes[n.nodes.length+u-s];var p=new c;p.bias=f.bias,p.squash=f.squash,p.type=f.type,i.nodes.push(p)}var g={},d={};for(u=0;u<t.connections.length;u++){let n=t.connections[u],e={weight:n.weight,from:n.from.index,to:n.to.index,gater:null!=n.gater?n.gater.index:-1};g[r.innovationID(e.from,e.to)]=e}for(u=0;u<t.selfconns.length;u++){let n=t.selfconns[u],e={weight:n.weight,from:n.from.index,to:n.to.index,gater:null!=n.gater?n.gater.index:-1};g[r.innovationID(e.from,e.to)]=e}for(u=0;u<n.connections.length;u++){let t=n.connections[u],e={weight:t.weight,from:t.from.index,to:t.to.index,gater:null!=t.gater?t.gater.index:-1};d[r.innovationID(e.from,e.to)]=e}for(u=0;u<n.selfconns.length;u++){let t=n.selfconns[u],e={weight:t.weight,from:t.from.index,to:t.to.index,gater:null!=t.gater?t.gater.index:-1};d[r.innovationID(e.from,e.to)]=e}var v=[],m=Object.keys(g),w=Object.keys(d);for(u=m.length-1;u>=0;u--)if(void 0!==d[m[u]]){let t=Math.random()>=.5?g[m[u]]:d[m[u]];v.push(t),d[m[u]]=void 0}else(a>=h||e)&&v.push(g[m[u]]);if(h>=a||e)for(u=0;u<w.length;u++)void 0!==d[w[u]]&&v.push(d[w[u]]);for(u=0;u<v.length;u++){let t=v[u];if(t.to<s&&t.from<s){let n=i.nodes[t.from],e=i.nodes[t.to],o=i.connect(n,e)[0];o.weight=t.weight,-1!==t.gater&&t.gater<s&&i.gate(i.nodes[t.gater],o)}}return i}},function(t,n,e){var o={workers:e(19),serializeDataSet:function(t){for(var n=[t[0].input.length,t[0].output.length],e=0;e<t.length;e++){var o;for(o=0;o<n[0];o++)n.push(t[e].input[o]);for(o=0;o<n[1];o++)n.push(t[e].output[o])}return n},activateSerializedNetwork:function(t,n,e,o,i){for(var s=0;s<o[0];s++)n[s]=t[s];for(s=2;s<o.length;s++){let t=o[s++],r=o[s++],a=o[s++],h=o[s++],c=o[s++];for(e[t]=(-1===c?1:n[c])*h*e[t]+r;-2!==o[s];)e[t]+=n[o[s++]]*o[s++]*(-1===o[s++]?1:n[o[s-1]]);n[t]=i[a](e[t])}var r=[];for(s=n.length-o[1];s<n.length;s++)r.push(n[s]);return r},deserializeDataSet:function(t){for(var n=[],e=t[0]+t[1],o=0;o<(t.length-2)/e;o++){let s=[];for(var i=2+o*e;i<2+o*e+t[0];i++)s.push(t[i]);let r=[];for(i=2+o*e+t[0];i<2+o*e+e;i++)r.push(t[i]);n.push(s),n.push(r)}return n},activations:[function(t){return 1/(1+Math.exp(-t))},function(t){return Math.tanh(t)},function(t){return t},function(t){return t>0?1:0},function(t){return t>0?t:0},function(t){return t/(1+Math.abs(t))},function(t){return Math.sin(t)},function(t){return Math.exp(-Math.pow(t,2))},function(t){return(Math.sqrt(Math.pow(t,2)+1)-1)/2+t},function(t){return t>0?1:-1},function(t){return 2/(1+Math.exp(-t))-1},function(t){return Math.max(-1,Math.min(1,t))},function(t){return Math.abs(t)},function(t){return 1-t},function(t){var n=1.6732632423543772;return 1.0507009873554805*(t>0?t:n*Math.exp(t)-n)}]};o.testSerializedSet=function(t,n,e,i,s,r){for(var a=0,h=0;h<t.length;h+=2){let c=o.activateSerializedNetwork(t[h],e,i,s,r);a+=n(t[h+1],c)}return a/(t.length/2)};for(var i in o)t.exports[i]=o[i]},function(t,n,e){function o(t){this.nodes=[],this.connections={in:[],out:[],self:[]};for(var n=0;n<t;n++)this.nodes.push(new a)}t.exports=o;var i=e(0),s=e(1),r=e(7),a=e(2);o.prototype={activate:function(t){var n=[];if(void 0!==t&&t.length!==this.nodes.length)throw new Error("Array with values should be same as the amount of nodes!");for(var e=0;e<this.nodes.length;e++){var o;o=void 0===t?this.nodes[e].activate():this.nodes[e].activate(t[e]),n.push(o)}return n},propagate:function(t,n,e){if(void 0!==e&&e.length!==this.nodes.length)throw new Error("Array with values should be same as the amount of nodes!");for(var o=this.nodes.length-1;o>=0;o--)void 0===e?this.nodes[o].propagate(t,n,!0):this.nodes[o].propagate(t,n,!0,e[o])},connect:function(t,n,e){var h,c,u=[];if(t instanceof o){if(void 0===n&&(this!==t?(s.warnings&&console.warn("No group connection specified, using ALL_TO_ALL"),n=i.connection.ALL_TO_ALL):(s.warnings&&console.warn("No group connection specified, using ONE_TO_ONE"),n=i.connection.ONE_TO_ONE)),n===i.connection.ALL_TO_ALL||n===i.connection.ALL_TO_ELSE)for(h=0;h<this.nodes.length;h++)for(c=0;c<t.nodes.length;c++){if(n===i.connection.ALL_TO_ELSE&&this.nodes[h]===t.nodes[c])continue;let o=this.nodes[h].connect(t.nodes[c],e);this.connections.out.push(o[0]),t.connections.in.push(o[0]),u.push(o[0])}else if(n===i.connection.ONE_TO_ONE){if(this.nodes.length!==t.nodes.length)throw new Error("From and To group must be the same size!");for(h=0;h<this.nodes.length;h++){let n=this.nodes[h].connect(t.nodes[h],e);this.connections.self.push(n[0]),u.push(n[0])}}}else if(t instanceof r)u=t.input(this,n,e);else if(t instanceof a)for(h=0;h<this.nodes.length;h++){let n=this.nodes[h].connect(t,e);this.connections.out.push(n[0]),u.push(n[0])}return u},gate:function(t,n){if(void 0===n)throw new Error("Please specify Gating.INPUT, Gating.OUTPUT");Array.isArray(t)||(t=[t]);var e,o,s=[],r=[];for(e=0;e<t.length;e++){var a=t[e];s.includes(a.from)||s.push(a.from),r.includes(a.to)||r.push(a.to)}switch(n){case i.gating.INPUT:for(e=0;e<r.length;e++){let n=r[e],i=this.nodes[e%this.nodes.length];for(o=0;o<n.connections.in.length;o++){let e=n.connections.in[o];t.includes(e)&&i.gate(e)}}break;case i.gating.OUTPUT:for(e=0;e<s.length;e++){let n=s[e],i=this.nodes[e%this.nodes.length];for(o=0;o<n.connections.out.length;o++){let e=n.connections.out[o];t.includes(e)&&i.gate(e)}}break;case i.gating.SELF:for(e=0;e<s.length;e++){let n=s[e],o=this.nodes[e%this.nodes.length];t.includes(n.connections.self)&&o.gate(n.connections.self)}}},set:function(t){for(var n=0;n<this.nodes.length;n++)void 0!==t.bias&&(this.nodes[n].bias=t.bias),this.nodes[n].squash=t.squash||this.nodes[n].squash,this.nodes[n].type=t.type||this.nodes[n].type},disconnect:function(t,n){n=n||!1;var e,i,s;if(t instanceof o)for(e=0;e<this.nodes.length;e++)for(i=0;i<t.nodes.length;i++){for(this.nodes[e].disconnect(t.nodes[i],n),s=this.connections.out.length-1;s>=0;s--){let n=this.connections.out[s];if(n.from===this.nodes[e]&&n.to===t.nodes[i]){this.connections.out.splice(s,1);break}}if(n)for(s=this.connections.in.length-1;s>=0;s--){let n=this.connections.in[s];if(n.from===t.nodes[i]&&n.to===this.nodes[e]){this.connections.in.splice(s,1);break}}}else if(t instanceof a)for(e=0;e<this.nodes.length;e++){for(this.nodes[e].disconnect(t,n),i=this.connections.out.length-1;i>=0;i--){let n=this.connections.out[i];if(n.from===this.nodes[e]&&n.to===t){this.connections.out.splice(i,1);break}}if(n)for(i=this.connections.in.length-1;i>=0;i--){var r=this.connections.in[i];if(r.from===t&&r.to===this.nodes[e]){this.connections.in.splice(i,1);break}}}},clear:function(){for(var t=0;t<this.nodes.length;t++)this.nodes[t].clear()}}},function(t,n,e){function o(){this.output=null,this.nodes=[],this.connections={in:[],out:[],self:[]}}t.exports=o;var i=e(0),s=e(6),r=e(2);o.prototype={activate:function(t){var n=[];if(void 0!==t&&t.length!==this.nodes.length)throw new Error("Array with values should be same as the amount of nodes!");for(var e=0;e<this.nodes.length;e++){var o;o=void 0===t?this.nodes[e].activate():this.nodes[e].activate(t[e]),n.push(o)}return n},propagate:function(t,n,e){if(void 0!==e&&e.length!==this.nodes.length)throw new Error("Array with values should be same as the amount of nodes!");for(var o=this.nodes.length-1;o>=0;o--)void 0===e?this.nodes[o].propagate(t,n,!0):this.nodes[o].propagate(t,n,!0,e[o])},connect:function(t,n,e){var i;return t instanceof s||t instanceof r?i=this.output.connect(t,n,e):t instanceof o&&(i=t.input(this,n,e)),i},gate:function(t,n){this.output.gate(t,n)},set:function(t){for(var n=0;n<this.nodes.length;n++){var e=this.nodes[n];e instanceof r?(void 0!==t.bias&&(e.bias=t.bias),e.squash=t.squash||e.squash,e.type=t.type||e.type):e instanceof s&&e.set(t)}},disconnect:function(t,n){n=n||!1;var e,o,i;if(t instanceof s)for(e=0;e<this.nodes.length;e++)for(o=0;o<t.nodes.length;o++){for(this.nodes[e].disconnect(t.nodes[o],n),i=this.connections.out.length-1;i>=0;i--){let n=this.connections.out[i];if(n.from===this.nodes[e]&&n.to===t.nodes[o]){this.connections.out.splice(i,1);break}}if(n)for(i=this.connections.in.length-1;i>=0;i--){let n=this.connections.in[i];if(n.from===t.nodes[o]&&n.to===this.nodes[e]){this.connections.in.splice(i,1);break}}}else if(t instanceof r)for(e=0;e<this.nodes.length;e++){for(this.nodes[e].disconnect(t,n),o=this.connections.out.length-1;o>=0;o--){let n=this.connections.out[o];if(n.from===this.nodes[e]&&n.to===t){this.connections.out.splice(o,1);break}}if(n)for(i=this.connections.in.length-1;i>=0;i--){let n=this.connections.in[i];if(n.from===t&&n.to===this.nodes[e]){this.connections.in.splice(i,1);break}}}},clear:function(){for(var t=0;t<this.nodes.length;t++)this.nodes[t].clear()}},o.Dense=function(t){var n=new o,e=new s(t);return n.nodes.push(e),n.output=e,n.input=function(t,n,s){return t instanceof o&&(t=t.output),n=n||i.connection.ALL_TO_ALL,t.connect(e,n,s)},n},o.LSTM=function(t){var n=new o,e=new s(t),r=new s(t),a=new s(t),h=new s(t),c=new s(t);e.set({bias:1}),r.set({bias:1}),h.set({bias:1}),a.connect(e,i.connection.ALL_TO_ALL),a.connect(r,i.connection.ALL_TO_ALL),a.connect(h,i.connection.ALL_TO_ALL);var u=a.connect(a,i.connection.ONE_TO_ONE),l=a.connect(c,i.connection.ALL_TO_ALL);return r.gate(u,i.gating.SELF),h.gate(l,i.gating.OUTPUT),n.nodes=[e,r,a,h,c],n.output=c,n.input=function(t,n,s){t instanceof o&&(t=t.output),n=n||i.connection.ALL_TO_ALL;var c=[],u=t.connect(a,n,s);return c=c.concat(u),c=c.concat(t.connect(e,n,s)),c=c.concat(t.connect(h,n,s)),c=c.concat(t.connect(r,n,s)),e.gate(u,i.gating.INPUT),c},n},o.GRU=function(t){var n=new o,e=new s(t),r=new s(t),a=new s(t),h=new s(t),c=new s(t),u=new s(t);u.set({bias:0,squash:i.activation.IDENTITY,type:"constant"}),h.set({squash:i.activation.TANH}),r.set({bias:0,squash:i.activation.INVERSE,type:"constant"}),e.set({bias:1}),a.set({bias:0}),u.connect(e,i.connection.ALL_TO_ALL),e.connect(r,i.connection.ONE_TO_ONE,1),u.connect(a,i.connection.ALL_TO_ALL);var l=u.connect(h,i.connection.ALL_TO_ALL);a.gate(l,i.gating.OUTPUT);var f=u.connect(c,i.connection.ALL_TO_ALL),p=h.connect(c,i.connection.ALL_TO_ALL);return e.gate(f,i.gating.OUTPUT),r.gate(p,i.gating.OUTPUT),c.connect(u,i.connection.ONE_TO_ONE,1),n.nodes=[e,r,a,h,c,u],n.output=c,n.input=function(t,n,s){t instanceof o&&(t=t.output),n=n||i.connection.ALL_TO_ALL;var r=[];return r=r.concat(t.connect(e,n,s)),r=r.concat(t.connect(a,n,s)),r=r.concat(t.connect(h,n,s))},n},o.Memory=function(t,n){var e,r=new o,a=null;for(e=0;e<n;e++){var h=new s(t);h.set({squash:i.activation.IDENTITY,bias:0,type:"constant"}),null!=a&&a.connect(h,i.connection.ONE_TO_ONE,1),r.nodes.push(h),a=h}for(r.nodes.reverse(),e=0;e<r.nodes.length;e++)r.nodes[e].nodes.reverse();var c=new s(0);for(var u in r.nodes)c.nodes=c.nodes.concat(r.nodes[u].nodes);return r.output=c,r.input=function(t,n,e){if(t instanceof o&&(t=t.output),n=n||i.connection.ALL_TO_ALL,t.nodes.length!==r.nodes[r.nodes.length-1].nodes.length)throw new Error("Previous layer size must be same as memory size");return t.connect(r.nodes[r.nodes.length-1],i.connection.ONE_TO_ONE,1)},r}},function(t,n){var e={LOGISTIC:function(t,n){var e=1/(1+Math.exp(-t));return n?e*(1-e):e},TANH:function(t,n){return n?1-Math.pow(Math.tanh(t),2):Math.tanh(t)},IDENTITY:function(t,n){return n?1:t},STEP:function(t,n){return n?0:t>0?1:0},RELU:function(t,n){return n?t>0?1:0:t>0?t:0},SOFTSIGN:function(t,n){var e=1+Math.abs(t);return n?t/Math.pow(e,2):t/e},SINUSOID:function(t,n){return n?Math.cos(t):Math.sin(t)},GAUSSIAN:function(t,n){var e=Math.exp(-Math.pow(t,2));return n?-2*t*e:e},BENT_IDENTITY:function(t,n){var e=Math.sqrt(Math.pow(t,2)+1);return n?t/(2*e)+1:(e-1)/2+t},BIPOLAR:function(t,n){return n?0:t>0?1:-1},BIPOLAR_SIGMOID:function(t,n){var e=2/(1+Math.exp(-t))-1;return n?.5*(1+e)*(1-e):e},HARD_TANH:function(t,n){return n?t>-1&&t<1?1:0:Math.max(-1,Math.min(1,t))},ABSOLUTE:function(t,n){return n?t<0?-1:1:Math.abs(t)},INVERSE:function(t,n){return n?-1:1-t},SELU:function(t,n){var e=1.6732632423543772,o=1.0507009873554805,i=t>0?t:e*Math.exp(t)-e;return n?t>0?o:(i+e)*o:i*o}};t.exports=e},function(t,n,e){function o(t,n,e,o){this.input=t,this.output=n,this.fitness=e,o=o||{},this.equal=o.equal||!1,this.clear=o.clear||!1,this.popsize=o.popsize||50,this.elitism=o.elitism||0,this.provenance=o.provenance||0,this.mutationRate=o.mutationRate||.3,this.mutationAmount=o.mutationAmount||1,this.fitnessPopulation=o.fitnessPopulation||!1,this.selection=o.selection||s.selection.POWER,this.crossover=o.crossover||[s.crossover.SINGLE_POINT,s.crossover.TWO_POINT,s.crossover.UNIFORM,s.crossover.AVERAGE],this.mutation=o.mutation||s.mutation.FFW,this.template=o.network||!1,this.maxNodes=o.maxNodes||1/0,this.maxConns=o.maxConns||1/0,this.maxGates=o.maxGates||1/0,this.selectMutationMethod="function"==typeof o.mutationSelection?o.mutationSelection.bind(this):this.selectMutationMethod,this.generation=0,this.createPool(this.template)}t.exports=o;var i=e(4),s=e(0),r=e(1),a=s.selection;o.prototype={createPool:function(t){this.population=[];for(var n=0;n<this.popsize;n++){var e;(e=this.template?i.fromJSON(t.toJSON()):new i(this.input,this.output)).score=void 0,this.population.push(e)}},evolve:async function(){void 0===this.population[this.population.length-1].score&&await this.evaluate(),this.sort();var t=i.fromJSON(this.population[0].toJSON());t.score=this.population[0].score;for(var n=[],e=[],o=0;o<this.elitism;o++)e.push(this.population[o]);for(o=0;o<this.provenance;o++)n.push(i.fromJSON(this.template.toJSON()));for(o=0;o<this.popsize-this.elitism-this.provenance;o++)n.push(this.getOffspring());for(this.population=n,this.mutate(),this.population.push(...e),o=0;o<this.population.length;o++)this.population[o].score=void 0;return this.generation++,t},getOffspring:function(){var t=this.getParent(),n=this.getParent();return i.crossOver(t,n,this.equal)},selectMutationMethod:function(t){var n=this.mutation[Math.floor(Math.random()*this.mutation.length)];if(n===s.mutation.ADD_NODE&&t.nodes.length>=this.maxNodes)r.warnings&&console.warn("maxNodes exceeded!");else if(n===s.mutation.ADD_CONN&&t.connections.length>=this.maxConns)r.warnings&&console.warn("maxConns exceeded!");else{if(!(n===s.mutation.ADD_GATE&&t.gates.length>=this.maxGates))return n;r.warnings&&console.warn("maxGates exceeded!")}},mutate:function(){for(var t=0;t<this.population.length;t++)if(Math.random()<=this.mutationRate)for(var n=0;n<this.mutationAmount;n++){var e=this.selectMutationMethod(this.population[t]);this.population[t].mutate(e)}},evaluate:async function(){var t;if(this.fitnessPopulation){if(this.clear)for(t=0;t<this.population.length;t++)this.population[t].clear();await this.fitness(this.population)}else for(t=0;t<this.population.length;t++){var n=this.population[t];this.clear&&n.clear(),n.score=await this.fitness(n)}},sort:function(){this.population.sort(function(t,n){return n.score-t.score})},getFittest:function(){return void 0===this.population[this.population.length-1].score&&this.evaluate(),this.population[0].score<this.population[1].score&&this.sort(),this.population[0]},getAverage:function(){void 0===this.population[this.population.length-1].score&&this.evaluate();for(var t=0,n=0;n<this.population.length;n++)t+=this.population[n].score;return t/this.population.length},getParent:function(){var t;switch(this.selection){case a.POWER:this.population[0].score<this.population[1].score&&this.sort();var n=Math.floor(Math.pow(Math.random(),this.selection.power)*this.population.length);return this.population[n];case a.FITNESS_PROPORTIONATE:var e=0,o=0;for(t=0;t<this.population.length;t++){var i=this.population[t].score;o=i<o?i:o,e+=i}e+=(o=Math.abs(o))*this.population.length;var s=Math.random()*e,r=0;for(t=0;t<this.population.length;t++){let n=this.population[t];if(r+=n.score+o,s<r)return n}return this.population[Math.floor(Math.random()*this.population.length)];case a.TOURNAMENT:if(this.selection.size>this.popsize)throw new Error("Your tournament size should be lower than the population size, please change methods.selection.TOURNAMENT.size");var h=[];for(t=0;t<this.selection.size;t++){let t=this.population[Math.floor(Math.random()*this.population.length)];h.push(t)}for(h.sort(function(t,n){return n.score-t.score}),t=0;t<this.selection.size;t++)if(Math.random()<this.selection.probability||t===this.selection.size-1)return h[t]}},export:function(){for(var t=[],n=0;n<this.population.length;n++){var e=this.population[n];t.push(e.toJSON())}return t},import:function(t){for(var n=[],e=0;e<t.length;e++){var o=t[e];n.push(i.fromJSON(o))}this.population=n,this.popsize=n.length}}},function(t,n,e){var o,i,s={methods:e(0),Connection:e(3),architect:e(18),Network:e(4),config:e(1),Group:e(6),Layer:e(7),Node:e(2),Neat:e(9),multi:e(5)};o=[],void 0!==(i=function(){return s}.apply(n,o))&&(t.exports=i),void 0!==t&&t.exports&&(t.exports=s),"object"==typeof window&&(!function(){var t=window.neataptic;s.ninja=function(){return window.neataptic=t,s}}(),window.neataptic=s)},function(t,n,e){var o=e(8),i={ADD_NODE:{name:"ADD_NODE"},SUB_NODE:{name:"SUB_NODE",keep_gates:!0},ADD_CONN:{name:"ADD_CONN"},SUB_CONN:{name:"REMOVE_CONN"},MOD_WEIGHT:{name:"MOD_WEIGHT",min:-1,max:1},MOD_BIAS:{name:"MOD_BIAS",min:-1,max:1},MOD_ACTIVATION:{name:"MOD_ACTIVATION",mutateOutput:!0,allowed:[o.LOGISTIC,o.TANH,o.RELU,o.IDENTITY,o.STEP,o.SOFTSIGN,o.SINUSOID,o.GAUSSIAN,o.BENT_IDENTITY,o.BIPOLAR,o.BIPOLAR_SIGMOID,o.HARD_TANH,o.ABSOLUTE,o.INVERSE,o.SELU]},ADD_SELF_CONN:{name:"ADD_SELF_CONN"},SUB_SELF_CONN:{name:"SUB_SELF_CONN"},ADD_GATE:{name:"ADD_GATE"},SUB_GATE:{name:"SUB_GATE"},ADD_BACK_CONN:{name:"ADD_BACK_CONN"},SUB_BACK_CONN:{name:"SUB_BACK_CONN"},SWAP_NODES:{name:"SWAP_NODES",mutateOutput:!0}};i.ALL=[i.ADD_NODE,i.SUB_NODE,i.ADD_CONN,i.SUB_CONN,i.MOD_WEIGHT,i.MOD_BIAS,i.MOD_ACTIVATION,i.ADD_GATE,i.SUB_GATE,i.ADD_SELF_CONN,i.SUB_SELF_CONN,i.ADD_BACK_CONN,i.SUB_BACK_CONN,i.SWAP_NODES],i.FFW=[i.ADD_NODE,i.SUB_NODE,i.ADD_CONN,i.SUB_CONN,i.MOD_WEIGHT,i.MOD_BIAS,i.MOD_ACTIVATION,i.SWAP_NODES],t.exports=i},function(t,n){var e={FITNESS_PROPORTIONATE:{name:"FITNESS_PROPORTIONATE"},POWER:{name:"POWER",power:4},TOURNAMENT:{name:"TOURNAMENT",size:5,probability:.5}};t.exports=e},function(t,n){var e={SINGLE_POINT:{name:"SINGLE_POINT",config:[.4]},TWO_POINT:{name:"TWO_POINT",config:[.4,.9]},UNIFORM:{name:"UNIFORM"},AVERAGE:{name:"AVERAGE"}};t.exports=e},function(t,n){var e={CROSS_ENTROPY:function(t,n){for(var e=0,o=0;o<n.length;o++)e-=t[o]*Math.log(Math.max(n[o],1e-15))+(1-t[o])*Math.log(1-Math.max(n[o],1e-15));return e/n.length},MSE:function(t,n){for(var e=0,o=0;o<n.length;o++)e+=Math.pow(t[o]-n[o],2);return e/n.length},BINARY:function(t,n){for(var e=0,o=0;o<n.length;o++)e+=Math.round(2*t[o])!==Math.round(2*n[o]);return e},MAE:function(t,n){for(var e=0,o=0;o<n.length;o++)e+=Math.abs(t[o]-n[o]);return e/n.length},MAPE:function(t,n){for(var e=0,o=0;o<n.length;o++)e+=Math.abs((n[o]-t[o])/Math.max(t[o],1e-15));return e/n.length},MSLE:function(t,n){for(var e=0,o=0;o<n.length;o++)e+=Math.log(Math.max(t[o],1e-15))-Math.log(Math.max(n[o],1e-15));return e},HINGE:function(t,n){for(var e=0,o=0;o<n.length;o++)e+=Math.max(0,1-t[o]*n[o]);return e}};t.exports=e},function(t,n){var e={OUTPUT:{name:"OUTPUT"},INPUT:{name:"INPUT"},SELF:{name:"SELF"}};t.exports=e},function(t,n){var e={ALL_TO_ALL:{name:"OUTPUT"},ALL_TO_ELSE:{name:"INPUT"},ONE_TO_ONE:{name:"SELF"}};t.exports=e},function(t,n){var e={FIXED:function(){return function(t,n){return t}},STEP:function(t,n){t=t||.9,n=n||100;return function(e,o){return e*Math.pow(t,Math.floor(o/n))}},EXP:function(t){t=t||.999;return function(n,e){return n*Math.pow(t,e)}},INV:function(t,n){t=t||.001,n=n||2;return function(e,o){return e*Math.pow(1+t*o,-n)}}};t.exports=e},function(t,n,e){var o=e(0),i=e(4),s=e(6),r=e(7),a=e(2),h={Construct:function(t){var n,e=new i(0,0),o=[];for(n=0;n<t.length;n++){let e;if(t[n]instanceof s)for(e=0;e<t[n].nodes.length;e++)o.push(t[n].nodes[e]);else if(t[n]instanceof r)for(e=0;e<t[n].nodes.length;e++)for(var h=0;h<t[n].nodes[e].nodes.length;h++)o.push(t[n].nodes[e].nodes[h]);else t[n]instanceof a&&o.push(t[n])}var c=[],u=[];for(n=o.length-1;n>=0;n--)"output"===o[n].type||o[n].connections.out.length+o[n].connections.gated.length===0?(o[n].type="output",e.output++,u.push(o[n]),o.splice(n,1)):"input"!==o[n].type&&o[n].connections.in.length||(o[n].type="input",e.input++,c.push(o[n]),o.splice(n,1));if(o=c.concat(o).concat(u),0===e.input||0===e.output)throw new Error("Given nodes have no clear input/output node!");for(n=0;n<o.length;n++){let t;for(t=0;t<o[n].connections.out.length;t++)e.connections.push(o[n].connections.out[t]);for(t=0;t<o[n].connections.gated.length;t++)e.gates.push(o[n].connections.gated[t]);0!==o[n].connections.self.weight&&e.selfconns.push(o[n].connections.self)}return e.nodes=o,e},Perceptron:function(){var t=Array.prototype.slice.call(arguments);if(t.length<3)throw new Error("You have to specify at least 3 layers");var n=[];n.push(new s(t[0]));for(var e=1;e<t.length;e++){var i=t[e];i=new s(i),n.push(i),n[e-1].connect(n[e],o.connection.ALL_TO_ALL)}return h.Construct(n)},Random:function(t,n,e,s){var r,a=(s=s||{}).connections||2*n,h=s.backconnections||0,c=s.selfconnections||0,u=s.gates||0,l=new i(t,e);for(r=0;r<n;r++)l.mutate(o.mutation.ADD_NODE);for(r=0;r<a-n;r++)l.mutate(o.mutation.ADD_CONN);for(r=0;r<h;r++)l.mutate(o.mutation.ADD_BACK_CONN);for(r=0;r<c;r++)l.mutate(o.mutation.ADD_SELF_CONN);for(r=0;r<u;r++)l.mutate(o.mutation.ADD_GATE);return l},LSTM:function(){var t=Array.prototype.slice.call(arguments);if(t.length<3)throw new Error("You have to specify at least 3 layers");var n,e=t.pop();"number"==typeof e?(n=new s(e),e={}):n=new s(t.pop()),n.set({type:"output"});var i={};i.memoryToMemory=e.memoryToMemory||!1,i.outputToMemory=e.outputToMemory||!1,i.outputToGates=e.outputToGates||!1,i.inputToOutput=void 0===e.inputToOutput||e.inputToOutput,i.inputToDeep=void 0===e.inputToDeep||e.inputToDeep;var r=new s(t.shift());r.set({type:"input"});var a=t,c=[];c.push(r);for(var u=r,l=0;l<a.length;l++){var f=a[l],p=new s(f),g=new s(f),d=new s(f),v=new s(f),m=l===a.length-1?n:new s(f);p.set({bias:1}),g.set({bias:1}),v.set({bias:1});var w=u.connect(d,o.connection.ALL_TO_ALL);u.connect(p,o.connection.ALL_TO_ALL),u.connect(v,o.connection.ALL_TO_ALL),u.connect(g,o.connection.ALL_TO_ALL),d.connect(p,o.connection.ALL_TO_ALL),d.connect(g,o.connection.ALL_TO_ALL),d.connect(v,o.connection.ALL_TO_ALL);var O=d.connect(d,o.connection.ONE_TO_ONE),A=d.connect(m,o.connection.ALL_TO_ALL);if(p.gate(w,o.gating.INPUT),g.gate(O,o.gating.SELF),v.gate(A,o.gating.OUTPUT),i.inputToDeep&&l>0){let t=r.connect(d,o.connection.ALL_TO_ALL);p.gate(t,o.gating.INPUT)}if(i.memoryToMemory){let t=d.connect(d,o.connection.ALL_TO_ELSE);p.gate(t,o.gating.INPUT)}if(i.outputToMemory){let t=n.connect(d,o.connection.ALL_TO_ALL);p.gate(t,o.gating.INPUT)}i.outputToGates&&(n.connect(p,o.connection.ALL_TO_ALL),n.connect(g,o.connection.ALL_TO_ALL),n.connect(v,o.connection.ALL_TO_ALL)),c.push(p),c.push(g),c.push(d),c.push(v),l!==a.length-1&&c.push(m),u=m}return i.inputToOutput&&r.connect(n,o.connection.ALL_TO_ALL),c.push(n),h.Construct(c)},GRU:function(){var t=Array.prototype.slice.call(arguments);if(t.length<3)throw new Error("not enough layers (minimum 3) !!");var n=new s(t.shift()),e=new s(t.pop()),o=t,i=[];i.push(n);for(var a=n,c=0;c<o.length;c++){var u=new r.GRU(o[c]);a.connect(u),a=u,i.push(u)}return a.connect(e),i.push(e),h.Construct(i)},Hopfield:function(t){var n=new s(t),e=new s(t);n.connect(e,o.connection.ALL_TO_ALL),n.set({type:"input"}),e.set({squash:o.activation.STEP,type:"output"});return new h.Construct([n,e])},NARX:function(t,n,e,i,s){Array.isArray(n)||(n=[n]);var a=[],c=new r.Dense(t),u=new r.Memory(t,i),l=[],f=new r.Dense(e),p=new r.Memory(e,s);a.push(c),a.push(p);for(var g=0;g<n.length;g++){var d=new r.Dense(n[g]);l.push(d),a.push(d),void 0!==l[g-1]&&l[g-1].connect(d,o.connection.ALL_TO_ALL)}return a.push(u),a.push(f),c.connect(l[0],o.connection.ALL_TO_ALL),c.connect(u,o.connection.ONE_TO_ONE,1),u.connect(l[0],o.connection.ALL_TO_ALL),l[l.length-1].connect(f,o.connection.ALL_TO_ALL),f.connect(p,o.connection.ONE_TO_ONE,1),p.connect(l[0],o.connection.ALL_TO_ALL),c.set({type:"input"}),f.set({type:"output"}),h.Construct(a)}};t.exports=h},function(t,n,e){var o={node:{TestWorker:e(20)},browser:{TestWorker:e(24)}};t.exports=o},function(t,n,e){function o(t,n){this.worker=i.fork(s.join(__dirname,"/worker")),this.worker.send({set:t,cost:n.name})}t.exports=o;var i=e(21),s=e(22);o.prototype={evaluate:function(t){return new Promise((n,e)=>{var o=t.serialize(),i={activations:o[0],states:o[1],conns:o[2]},s=this.worker;this.worker.on("message",function t(e){s.removeListener("message",t),n(e)}),this.worker.send(i)})},terminate:function(){this.worker.kill()}}},function(n,e){n.exports=t},function(t,n,e){(function(t){function e(t,n){for(var e=0,o=t.length-1;o>=0;o--){var i=t[o];"."===i?t.splice(o,1):".."===i?(t.splice(o,1),e++):e&&(t.splice(o,1),e--)}if(n)for(;e--;e)t.unshift("..");return t}function o(t,n){if(t.filter)return t.filter(n);for(var e=[],o=0;o<t.length;o++)n(t[o],o,t)&&e.push(t[o]);return e}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,s=function(t){return i.exec(t).slice(1)};n.resolve=function(){for(var n="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var r=s>=0?arguments[s]:t.cwd();if("string"!=typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(n=r+"/"+n,i="/"===r.charAt(0))}return n=e(o(n.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+n||"."},n.normalize=function(t){var i=n.isAbsolute(t),s="/"===r(t,-1);return(t=e(o(t.split("/"),function(t){return!!t}),!i).join("/"))||i||(t="."),t&&s&&(t+="/"),(i?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(o(t,function(t,n){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},n.relative=function(t,e){function o(t){for(var n=0;n<t.length&&""===t[n];n++);for(var e=t.length-1;e>=0&&""===t[e];e--);return n>e?[]:t.slice(n,e-n+1)}t=n.resolve(t).substr(1),e=n.resolve(e).substr(1);for(var i=o(t.split("/")),s=o(e.split("/")),r=Math.min(i.length,s.length),a=r,h=0;h<r;h++)if(i[h]!==s[h]){a=h;break}for(var c=[],h=a;h<i.length;h++)c.push("..");return(c=c.concat(s.slice(a))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){var n=s(t),e=n[0],o=n[1];return e||o?(o&&(o=o.substr(0,o.length-1)),e+o):"."},n.basename=function(t,n){var e=s(t)[2];return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},n.extname=function(t){return s(t)[3]};var r="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return n<0&&(n=t.length+n),t.substr(n,e)}}).call(n,e(23))},function(t,n){function e(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(u===setTimeout)return setTimeout(t,0);if((u===e||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(n){try{return u.call(null,t,0)}catch(n){return u.call(this,t,0)}}}function s(t){if(l===clearTimeout)return clearTimeout(t);if((l===o||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(n){try{return l.call(null,t)}catch(n){return l.call(this,t)}}}function r(){d&&p&&(d=!1,p.length?g=p.concat(g):v=-1,g.length&&a())}function a(){if(!d){var t=i(r);d=!0;for(var n=g.length;n;){for(p=g,g=[];++v<n;)p&&p[v].run();v=-1,n=g.length}p=null,d=!1,s(t)}}function h(t,n){this.fun=t,this.array=n}function c(){}var u,l,f=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:e}catch(t){u=e}try{l="function"==typeof clearTimeout?clearTimeout:o}catch(t){l=o}}();var p,g=[],d=!1,v=-1;f.nextTick=function(t){var n=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)n[e-1]=arguments[e];g.push(new h(t,n)),1!==g.length||d||i(a)},h.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,n,e){function o(t,n){var e=new Blob([this._createBlobString(n)]);this.url=window.URL.createObjectURL(e),this.worker=new Worker(this.url);var o={set:new Float64Array(t).buffer};this.worker.postMessage(o,[o.set])}t.exports=o;var i=e(5);o.prototype={evaluate:function(t){return new Promise((n,e)=>{var o=t.serialize(),i={activations:new Float64Array(o[0]).buffer,states:new Float64Array(o[1]).buffer,conns:new Float64Array(o[2]).buffer};this.worker.onmessage=function(t){var e=new Float64Array(t.data.buffer)[0];n(e)},this.worker.postMessage(i,[i.activations,i.states,i.conns])})},terminate:function(){this.worker.terminate(),window.URL.revokeObjectURL(this.url)},_createBlobString:function(t){return`\n      var F = [${i.activations.toString()}];\n      var cost = ${t.toString()};\n      var multi = {\n        deserializeDataSet: ${i.deserializeDataSet.toString()},\n        testSerializedSet: ${i.testSerializedSet.toString()},\n        activateSerializedNetwork: ${i.activateSerializedNetwork.toString()}\n      };\n\n      this.onmessage = function (e) {\n        if(typeof e.data.set === 'undefined'){\n          var A = new Float64Array(e.data.activations);\n          var S = new Float64Array(e.data.states);\n          var data = new Float64Array(e.data.conns);\n\n          var error = multi.testSerializedSet(set, cost, A, S, data, F);\n\n          var answer = { buffer: new Float64Array([error ]).buffer };\n          postMessage(answer, [answer.buffer]);\n        } else {\n          set = multi.deserializeDataSet(new Float64Array(e.data.set));\n        }\n      };`}}},function(t,e){t.exports=n}])});


// Utils
//

Math.ease = function (x, e) {

	// Par défaut, au carré
	if (typeof(e)==='undefined') e = 2;

	return Math.pow(x,e) / ( Math.pow(x,e) + Math.pow(1 - x, e) );
}

Math.angle = function (a, b) {

    ad = b.x - a.x;
    op = b.y - a.y;
    return Math.atan2( (op) , (ad) );

  	// d = Math.distance(a, b);
  	// dx = (b.x - a.x) / d;
  	// dy = (b.y - a.y) / d;

  	// a = Math.acos(dx);
  	// a = dy < 0 ? 2 * Math.PI - a : a;
  	// return a;

}

/**
 * Conversion d'un angle en radians
 */
Math.radians = function ( degrees ) {
	return degrees * Math.PI / 180;
};

/**
 * Conversion d'un angle en degrés
 */
Math.degrees = function ( radians ) {
	return radians * 180 / Math.PI;
};

var json =
{
		"nodes": [
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 0
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 1
			},
			{
				"bias": 0,
				"type": "input",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 2
			},
			{
				"bias": 0.09521369670872054,
				"type": "hidden",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 3
			},
			{
				"bias": 0.5321755411939663,
				"type": "hidden",
				"squash": "SOFTSIGN",
				"mask": 1,
				"index": 4
			},
			{
				"bias": 0.8681255033935514,
				"type": "hidden",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 5
			},
			{
				"bias": 0.16611455015512386,
				"type": "hidden",
				"squash": "GAUSSIAN",
				"mask": 1,
				"index": 6
			},
			{
				"bias": -0.09742615999802129,
				"type": "hidden",
				"squash": "RELU",
				"mask": 1,
				"index": 7
			},
			{
				"bias": -0.21419810892669772,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 8
			},
			{
				"bias": -0.06432326438089447,
				"type": "hidden",
				"squash": "TANH",
				"mask": 1,
				"index": 9
			},
			{
				"bias": -1.4639084281945896,
				"type": "output",
				"squash": "LOGISTIC",
				"mask": 1,
				"index": 10
			},
			{
				"bias": 1.3487325427023276,
				"type": "output",
				"squash": "BIPOLAR_SIGMOID",
				"mask": 1,
				"index": 11
			}
		],
		"connections": [
			{
				"weight": 1,
				"from": 10,
				"to": 10,
				"gater": null
			},
			{
				"weight": 0.09259975428679534,
				"from": 11,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.017208761116494872,
				"from": 1,
				"to": 10,
				"gater": 6
			},
			{
				"weight": -0.052801043686710306,
				"from": 0,
				"to": 6,
				"gater": null
			},
			{
				"weight": 0.04918749604361056,
				"from": 6,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.011690890322728006,
				"from": 0,
				"to": 11,
				"gater": null
			},
			{
				"weight": -0.07040860292969092,
				"from": 4,
				"to": 5,
				"gater": null
			},
			{
				"weight": 0.05789226274241677,
				"from": 3,
				"to": 4,
				"gater": 11
			},
			{
				"weight": -0.0328374214118794,
				"from": 10,
				"to": 5,
				"gater": null
			},
			{
				"weight": -0.0048169462235490845,
				"from": 5,
				"to": 7,
				"gater": null
			},
			{
				"weight": -0.018129086376819897,
				"from": 7,
				"to": 10,
				"gater": null
			},
			{
				"weight": -0.04009410346595663,
				"from": 0,
				"to": 3,
				"gater": 4
			},
			{
				"weight": 0.061752934495348216,
				"from": 2,
				"to": 8,
				"gater": 7
			},
			{
				"weight": 0.03972499794582762,
				"from": 8,
				"to": 9,
				"gater": null
			},
			{
				"weight": -0.0234002304987206,
				"from": 9,
				"to": 10,
				"gater": null
			}
		],
		"input": 3,
		"output": 2,
		"dropout": 0
};

var network = neataptic.Network.fromJSON(json);




// Initialisation des valeurs
var ox  = -1;
var oy  = -1;
var oa = -1;
var vx = 0;
var vy = 0;

// Game loop
while (true) {

	// Récupération des valeurs
    var inputs = readline().split(' ');
    var x = parseInt(inputs[0]);
    var y = parseInt(inputs[1]);
    var nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    var nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    var nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
    var nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
    var inputs = readline().split(' ');
    var opponentX = parseInt(inputs[0]);
    var opponentY = parseInt(inputs[1]);

    // Données d'input

    // Premières valeurs
    if (ox == -1) ox = x;
    if (oy == -1) oy = y;
    if (oa == -1) oa = - Math.angle ({x:x, y:y}, {x:nextCheckpointX, y:nextCheckpointY});

    // Calcul de la vitesse
    vx = x - ox;
    vy = y - oy;

	// Paramètres normalisés
	var speed = Math.min(500, Math.sqrt ( Math.pow(vx, 2) + Math.pow(vy, 2))) / 500 ;
	var distance = Math.min( nextCheckpointDist, 5000) / 5000;
	var angle = nextCheckpointAngle  / 360;

	// Résultat du réseau de neurones (normalisé)
	var input = [speed, distance, angle];

	printErr(input);
	var output = network.activate(input);

	// On normalise les valeurs récupérées
	var angle = ( output [0]
				  * Math.PI * 2 // En radians
				  - Math.PI  ) // Droite ou gauche
				  * .1; // 36 / 360 : + ou - 18 degrés

	var thrust = Math.round (
					Math.ease(output [1], 2) // Préférence à la full accelération
					* 100 // Accélération max 200
				);


    printErr(Math.degrees(oa));

    angle += oa;


    tx = Math.round(x + Math.cos(angle) * 1000);
    ty = Math.round(y + Math.sin(angle) * 1000);

    ox = x;
    oy = y;
    oa = angle;

    print(tx + ' ' + ty + ' ' + thrust);
}




