
   var mark = prompt('Enter Your Mark To see Grade ');

var fullMark = 100;
var A = 80;
var B = 70;
var C = 60;
var D = 50;
var E = 40;
var F = 33;



if (mark <= fullMark && mark >= A ){
    document.write ('Your Grade = A+')
}
else if  (mark < fullMark && mark >= B){
   document.write ('Your Grade = A-')
}
else if  (mark < fullMark && mark >= C){
    document.write ('Your Grade = A')
}
else if  (mark < fullMark && mark >= D){
    document.write ('Your Grade = B')
}
else if  (mark < fullMark && mark >= E){
   document.write ('Your Grade = C')
}
else if  (mark < fullMark && mark >= F){
   document.write ('Your Grade = D')
}
else if  (mark < fullMark && mark < F){
   document.write ('You are Fail')
}
else 
 {
   document.write('Oi beta mark input korosh nai kn ?')
 }

