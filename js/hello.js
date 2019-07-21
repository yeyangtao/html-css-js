document.write("hello");
document.write("<br>");//换行
alert("hello");
var a=10;
var b=true;
var c;
var d="23yyt5";


document.write(typeof a+"变量的值为："+a);
document.write("<br>");
document.write("转化为字符串"+a.toString()+"大小为"+a.toString().length);
document.write("<br>");
document.write("a转成2进制："+a.toString(2));
document.write("<br>");
document.write("boolean变量的值为："+b);
document.write("<br>");
document.write("未定义类型变量的值为："+c);
document.write("<br>");
document.write("字符串变量的值为："+d+"大小为"+d.length);
document.write("<br>");
document.write(parseInt(d));//parseInt()转成数字类型，取字符串中的前几位数字
