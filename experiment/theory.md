In this program we will learn how to compare three number, and get the greatest of three number as output. To do this comparison, student will use a simple if-else block and relational operators. The program will take three integer numbers from the user and based on the input, it would compare numbers and display the greatest number as output.
In this program num1, num2 & num3 are three int of float variables that represents three input numbers.
                            
Declare three variables of data type int or float.<br>
<data type> num1,num2,num3; 

Enter values in three variables using scanf() function and show message using printf() function. <br>
printf("enter values of a, b ,c"); 
    scanf("%d %d %d",&a,&b,&c);  

Compare variables using </b>relational operators<b> in <b>if-else block</b>
 
if(num1>num2 && num1>num3)<br>
print("num1 is greater than num2 and num3") ;<br>
else{<br>
    if(num2>num3)<br>
    print("num2 is greater than num1 and num3");<br>
    else
    print("num3 is greater than num1 and num2");}<br>
        
Now we have the greatest among three numbers.
