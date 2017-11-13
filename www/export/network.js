var F = [function (x, derivate) {
    var d = 1 + Math.abs(x);
    if (derivate) return x / Math.pow(d, 2);
    return x / d;
  },function (x, derivate) {
    var fx = 1 / (1 + Math.exp(-x));
    if (!derivate) return fx;
    return fx * (1 - fx);
  }];
var A = [0.9291393867445293,0.6394943925672844,1.9756045997759082,0.11012591787048848,0.6761368732704229,0.9885489789097823];
var S = [0,0,0,0.12375449525055485,0.736074552629344,4.458159285894186];
function activate(input){
for(var i = 0; i < input.length; i++) A[i] = input[i];
S[3] = A[1] * 0.08506741989675232 + 0.06935435723641512;
A[3] = F[0](S[3]);
S[4] = A[2] * -0.06562645571315709 + A[1] * 0.08506741989675232 + A[0] * 0.3310850559794747 + 0.5037021765160601;
A[4] = F[1](S[4]);
S[5] = A[3] * 0.04714590172542832 + A[2] * 1.869522569501131 + A[0] * 1.6659582448839672 + -0.7883775094919496;
A[5] = F[1](S[5]);
return [A[4],A[5]];
}