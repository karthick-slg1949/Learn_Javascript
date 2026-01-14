Number("123");//123
Number("123abc");NaN
parseInt("123abc");//123
 parseFloat("10.5px");//10.5
+"10"+5;//"15"
 "10"+5;//"105"
Number(true);//1
Number(false);//0
Number("")//0
parseInt("10.9");//10
Number();//0
Number.isInteger(10.5);//false
Number.isInteger(10.0);//true
(10.456).toFixed(2);//"10.46"
(123.456).toPrecision(4);//"123.5"
typeof NaN;//"number"