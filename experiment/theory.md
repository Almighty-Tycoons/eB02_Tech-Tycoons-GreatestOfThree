The program will prompt user to input three integer numbers and based on the input, it would compare(usingif-else) and display the greatest number as output.
In this program num1, num2 & num3 are three int variables that represents three input numbers.
                            

Step:1 Declare 3 variables
int a,b,c; 

Step:2 Input values in three variables. 
printf("enter values of a, b ,c"); 
    scanf("%d %d %d",&a,&b,&c);  

Step:3 compare if(a>b && a>c) then a is greater than b and c
 
if(a>b && a>c) 
   print("a is greater than b and c") 

Step:4 compare if(b>a && b>c) then b is greater than a and c
 
if(a>b && a>c) 
   print("b is greater than a and c") 
   
Step:5 compare if(c>a && c>b) then c is greater than a and b
 
if(c>a && c>b) 
   print(c is greater than a and b") 

Now we have the greatest among three numbers.


EXPLANATION   
                        						
Consider three numbers a=5,b=4,c=8

if(a>b && a>c) then a is greater than b and c

now check this condition for the three numbers 5,4,8 i.e.

if(5>4 && 5>8) /* 5>4 is true but 5>8 fails */ 

so the control shifts to else if condition   

else if(b>a && b>c) then b is greater than a and c  

now checking this condition for 5,4,8 i.e.     

else if(4>5 && 4>8) /* both the conditions fail */  

now the control shifts to the next else if condition  

else if(c>a && c>b) then c is greater than a and b  

now checking this condition for 5,4,8 i.e.   

else if(8>5 && 8>4) /* both conditions are satisfied */  

Thus c is greater than a and b. 