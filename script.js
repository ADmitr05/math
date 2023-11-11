function areaOfTriangle(obj) {
    var a = 1*obj.st1.value;
    var b = 1*obj.st2.value;
    var c = 1*obj.st3.value;
    var p = (a+b+c)/2;
    var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    obj.res.value = s.toFixed(2);
}
areaOfTriangle(res);


function zad2(obj){
    var x1 = 1*obj.st1_2.value;
    var x2 = 1*obj.st2_2.value;
    var max = Math.max(x1,x2);
    var min = Math.min(x1,x2);
    var m = Math.random()*(max - min)+min;
    obj.result.value = m.toFixed(0);
 }
zad2(result);

function zad3(obj) {
    var a = 1*obj.st1_3.value;
    var b = 1*obj.st2_3.value;
    var c = 1*obj.st3_3.value;
    var discriminant = Math.pow(b, 2) - 4 * a * c;
    obj.result2.value = discriminant.toFixed(0);
}
zad3(result5);

function zad3(obj) {
    var a = 1*obj.st1_3.value;
    var b = 1*obj.st2_3.value;
    var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    obj.result2.value = x1.toFixed(0);
}
zad3(result2);

function zad3(obj) {
    var a = 1*obj.st1_3.value;
    var b = 1*obj.st2_3.value;
    var x2 = (-b + Math.sqrt(discriminant)) / (2 * a);
    obj.result3.value = x2.toFixed(0);
}
zad3(result3);

function zad3(obj) {
    var a = 1*obj.st1_3.value;
    var b = 1*obj.st2_3.value;
    var x = -b / (2 * a);
    obj.result4.value = x.toFixed(0);
}
zad3(result4);
