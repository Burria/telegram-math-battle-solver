var op = document.getElementById('task_op').innerHTML;
var x = document.getElementById('task_x').innerHTML
var y = document.getElementById('task_y').innerHTML
var equa = document.getElementById('task_res').innerHTML
var res;

if (op == "+"){
 res = x + y;}
if (op == "–"){
 res = x - y;}
if (op == "/"){
 res = x / y;}
if (op == "×"){
 res = x * y;}

if (res == equa){
 document.getElementById("button_correct").click();}
else{
 document.getElementById("button_wrong").click();
}
