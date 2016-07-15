var a = [[1,1,0,0],
[0,1,1,0],
[1,0,1,0],
[1,1,0,0]];
var score = [];
var MM = a[0].length;
var NN = a.length;
for(var i = 0; i < MM; i++){
 for(var j = 0; j < NN; j++){
 	//Calculate Connected area here
  score.push(ConnectedArea(i,j,0));
 }
}
console.log(score);

function ConnectedArea(m,n,score){
	if(m == MM || n == NN) return score;
	if(a[m][n] == 2 || a[m][n] == 0) return score;
  a[m][n] = 2;
  score = ConnectedArea(m,n+1,score);
  score = ConnectedArea(m+1,n,score);
  score = ConnectedArea(m+1,n+1,score);
  return score + 1;
}
