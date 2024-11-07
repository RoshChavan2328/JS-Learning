
let abc ="h    e   llo       "
let jky ="a s d f g r "
String.prototype.trueLength=function (){
    let arrofstring=this.split('');
    let count=0;
    for(let el of arrofstring){
    if(el != ' '){
        count++;
    }

}
return count;
}
console.log(jky.trueLength()); // Output: 5


