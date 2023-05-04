Java Assignment1:
Create a java program to search through the home directory and look for files that match a regular expression. The program should be able to take inputs repeatedly and should print out the full absolute path of the matching files found.

input:Java
output: c:\ProgramFiles

Java Assignment2:
Write a java function that checks if the input string contains all the letters of the alphabet a-z (case-insensitive). Write time and space complexity of your solution as comments in the source file.

input:qwertyuiopasdfghjklzxvcbnm
ouput:true
input:abcd
output:false

Java Assignment3:
Write a java function that will ping any host ( given as input ) and computes the median of the time taken to ping.

Use the system ping utility, do not use any deprecated methods.

input:127.0.0.1
output:Host is reachable in 9ms(median)


Java Assignment4:

Gruber Healthcare has different types of forms for their customer, one of which is a know your customer form ( KYC ) which has to be filled annually. Each form has a date which signifies the date the form was filled called the form date.

Due to government regulations the KYC form can only be filled within + or - 30 days of the signup anniversary of a customer. When filling it up, you have to provide the form date. If you are past the +-30 day anniversary then you can back-date it so that it falls in the +-30-day window. When filling it up you cannot use a future date for the form date.

For Example, assuming today is 4 Apr 2017 and I had signed up on 1st Mar 2014, my window for KYC submission this year would be 30 Jan 2017 to 31 Mar 2017. Since it is already 4th Apr - I would have to back-date the KYC to a date in this range.

Note: The KYC form can be filled only for the closest anniversary in the past or within 30 days range in future.
Anniversary refers to same day and month every year. If your birthday is 01-02-1992 -then your first anniversary will be 01-02-1993, the 2nd will be 01-02-1994 and so on. 01-02-1992 is not an anniversary.

Given the signup date and the current date, provide the allowable date range for the form date.

Input - First line is an integer n as the number of inputs to be passed. Next, n lines are n input for the program in the format dd-mm-yyyy dd-mm-yyyy Each line has two dates separated by space where the first date in signup date and the second date is the current date.

Output - Range of dates for KYC form in format dd-mm-yyyy dd-mm-yyyy

input:
1
16-07-1998 27-06-2017
output:
16-06-2017 27-06-2017

Assignment5:
DefaultInitializationAssignment:
Create a class in a package yourname.assignment.data containing an int and a char member variables that are not initialized, add a method to print these variables. Add another method in the same class with two local variables and print their values without initializing them.

Create another class in package yourname.assignment.singleton containing a non static String member variable. Add a static method that takes String as parameter and initialize the member variable and then return object of that class. Add a non static method to print the String.

Create main class in package yourname.assignment.main, create object of first class and call both the methods to print the values. Create object of second class using static method and then call the other method to print the String.

One or more tasks mentioned above are not possible in JAVA, comment that part of the code with block comments and add the explanation for the same.

