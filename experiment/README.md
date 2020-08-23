This folder has 
### Aim<br>
To learn how to find the greatest of three numbers.<br>
### Theory<br>
In this program we will learn how to compare three number, and get the greatest of three number as output. To do this comparison, student will use a simple if-else block and relational operators. The program will take three integer numbers from the user and based on the input, it would compare numbers and display the greatest number as output.
In this program num1, num2 & num3 are three int of float variables that represents three input numbers.
                            
Declare three variables of data type int or float.<br>
<data type> num1,num2,num3; 

Enter values in three variables using scanf() function and show message using printf() function. <br>
printf("enter values of a, b ,c"); 
    scanf("%d %d %d",&a,&b,&c);  

Compare variables using <b>relational operators</b> in <b>if-else block</b>
 
if(num1>num2 && num1>num3)<br>
print("num1 is greater than num2 and num3") ;<br>
else{<br>
    if(num2>num3)<br>
    print("num2 is greater than num1 and num3");<br>
    else
    print("num3 is greater than num1 and num2");}<br>
        
Now we have the greatest among three numbers.
<br>
### Procedure<br>
Start the simulator.<br>
Enter three numbers.<br> 
Clicks on the "OK" button.<br>
Code will be visible in the code block.<br> 
Click on "NEXT" button.<br> 
Simulator will compare all three numbers to find th largest.<br>
Click on "Next" button until the whole process of comparision completed.<br>
In result we will get Greatest of three numbers.<br>
### Pre Test<br>
1) Output of an arithmetic expression with integers and real numbers is ___ by default?<br>
A) Integer<br>
<b>B) Real number</b><br>
C) Depends on the numbers used in the expression.<br>
D) None of the above<br>

2) What will be the value of ' a ' in code :<br>int a = 10 + 4.867;<br>
A) a = 10<br>
B) a = 14.867<br>
<b>C) a = 14</b><br>
D) compiler error<br>

3) Which of the following is a syntax for Ternary Operator in C.<br>
<b>A) condition ? expression1 : expression2</b><br>
B) condition : expression1 ? expression2<br>
C) condition ? expression1 < expression2<br>
D) condition < expression1 ? expression2<br>

4) Output will be :<br> int main() {<br>float a,b; <br>a=3.0f; <br>b=4.0f; <br>printf("%.0f,%.1f,%.2f",a/b,a/b,a/b); <br>return 0; }<br>
A) 0,0.7,0.75<br>
B) 0,0.8,0.75<br>
<b>C) 1,0.8,0.75</b><br>
D) None of the above<br>

5) Which operator can we use in the place of if-else ?<br>
A) Relational operator<br>
B) Bitwise operator<br>
<b>C) Ternary operator</b><br>
D) Logical operator<br>
### Post Test<br>
Q 1. Which of the following is the correct relational operator?<br>
a.  +, -, *, %, /<br>
<b>b. >, >=, <, <=, ==, !=</b><br>
c.  ++, --<br>
d. &&, ||, !<br><br>

Q 2.Find the correct way of comparing three variable, checking num1 is greatest<br>
a. if(num1 > num2 > num3)<br>
b. if(num1 > num2 == num3)<br>
<b>c. if((num1>num2) && (num1>num3))<br></b>
d. if((num1>num2) || (num1>num3))<br>

Q 3. Output of code will be :<br> int main() <br>{static int i=5; <br>if(--i){ <br>main(); <br>printf("%d ",i); }<br>}<br>
<b>a. 0 0 0 0<br></b>
b. 0<br>
c. 0000<br>
d. 0 0<br>

Q 4. Output of code will be :<br>int main (){<br>int a, b;<br>a = b = 4;<br>b = a++;<br>printf ("%d %d %d %d", a++, --b, ++a, b--);}<br>
a. 2020<br>
<b>b. 6264<br></b>
c. 6564<br>
d. 6364<br>

Q 5. Output of code will be :<br>int main (){<br>int a = 10, b = 25;<br>a = b++ + a++;<br>b = ++b + ++a;<br>printf("%d %d ", a, b, c, d);}<br>
a. 36 63<br>
b. 63 36<br>
<b>c. Error</b><br>
d. 0 0<br>
### References<br>
https://www.geeksforgeeks.org/c-program-to-find-the-largest-number-among-three-numbers/
