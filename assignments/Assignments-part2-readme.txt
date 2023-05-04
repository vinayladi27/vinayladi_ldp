Java Assignment-6:
1. A vampire number v is a number with an even number of digits n, that can be factored into two numbers x and y each with n/2 digits and not both with trailing zeroes, where v contains precisely all the digits from x and from y, in any order. Write a java program to print first 100 vampire numbers.

2. Create a class with two (overloaded) constructors. Using this, call the second constructor inside the first one.

3. Create a class with a constructor that takes a String argument. During construction, print the argument. Create an array of object references to this class, but don’t actually create objects to assign into the array. When you run the program, notice whether the initialization messages from the constructor calls are printed.

4. Complete the previous exercise by creating objects to attach to the array of references.
 
Java Assignment-7:

1. Create an inheritance hierarchy of Rodent: Mouse, Gerbil, Hamster,etc. In the base class, provide methods that are common to all Rodents, and override these in the derived classes to perform different behaviors depending on the specific type of Rodent. Create an array of Rodent, fill it with different specific types of Rodents, and call your base-class methods to see what happens. Make the methods of Rodent abstract whenever possible and all classes should have default constructors that print a message about that class.

2. Create a Cycle class, with subclasses Unicycle, Bicycle and Tricycle. Add a balance( ) method to Unicycle and Bicycle, but not to Tricycle. Create instances of all three types and upcast them to an array of Cycle. Try to call balance( ) on each element of the array and observe the results. Downcast and call balance( ) and observe what happens.

3. Create three interfaces, each with two methods. Inherit a new interface that combines the three, adding a new method. Create a class by implementing the new interface and also inheriting from a concrete class. Now write four methods, each of which takes one of the four interfaces as an argument. In main( ), create an object of your class and pass it to each of the methods.

4. Create a Cycle interface, with implementations Unicycle, Bicycle and Tricycle. Create factories for each type of Cycle, and code that uses these factories.

5. Create a class with an inner class that has a non-default constructor (one that takes arguments). Create a second class with an inner class that inherits from the first inner class.
 

Java Assignment-8:

Error Handling

Create three new types of exceptions. Write a class with a method that throws all three. In main( ), call the method but only use a single catch clause that will catch all three types of exceptions. Add a finally clause and verify that your finally clause is executed, even if a NullPointerException is thrown.

Java Assignment-9:
 
String and Type Information

Using the documentation for java.util.regex.Pattern as a resource, write and test a regular expression that checks a sentence to see that it begins with a capital letter and ends with a period.

input:This is valid sentence.
ouptut:True

Java-Assignment-10:

Generics, Arrays and Containers

Create a generic, singly linked list class called SList, which, to keep things simple, does not implement the List interface.

Each Link object in the list should contain a reference to the next element in the list, but not the previous one (LinkedList, in contrast, is a doubly linked list, which means it maintains links in both directions).

Create your own SListIterator which, again for simplicity, does not implement ListIterator. The only method in SList other than toString( ) should be iterator( ), which produces an SListIterator.

The only way to insert and remove elements from an SList is through SListIterator. Write code to demonstrate SList.

Java-Assignment-11:

I/O

Using TextFile and a Map<Character,Integer>, create a program that takes the file name as a command line argument and counts the occurrence of all the different characters. Save the results in a text file.

input:Vinayladi
output:
a:2
d:1
i:2
l:1
n:1
v:1
y:1

JavaAssignment-12:

Assignment on Stream Api

Make a Student class having fields id,name,age,gender,engDepartment,year of enrollment ,perTillDate

Add following student in list ;

1.new Student(111, "Jiya Brein", 17, "Female", "Computer Science", 2018, 70.8)
2.new Student(122, "Paul Niksui", 18, "Male", "Mechanical", 2016, 50.2)
3 new Student(133, "Martin Theron", 17, "Male", "Electronic", 2017, 90.3)
4.new Student(144, "Murali Gowda", 18, "Male", “Electrical”, 2018, 80)
5.new Student(155, "Nima Roy", 19, "Female", "Textile", 2016, 70)
6.new Student(166, "Iqbal Hussain", 18, "Male", "Security", 2016, 70)
7.new Student(177, "Manu Sharma", 16, "Male", "Chemical", 2018, 70)
8.new Student(188, "Wang Liu", 20, "Male", "Computer Science", 2015, 80);
9.new Student(199, "Amelia Zoe", 18, "Female", "Computer Science", 2016, 85);
10.new Student(200, "Jaden Dough", 18, "Male", "Security", 2015, 82);
11.new Student(211, "Jasna Kaur", 20, "Female", "Electronic", 2019, 83);
12.new Student(222, "Nitin Joshi", 19, "Male", "Textile", 2016, 60.4);
13.new Student(233, "Jyothi Reddy", 16, "Female", "Computer Science", 2015, 45.6);
14.new Student(244, "Nicolus Den", 16, "Male", "Electronic", 2017, 95.8);
15.new Student(255, "Ali Baig", 17, "Male", "Electronic", 2018, 88.4);
16.new Student(266, "Sanvi Pandey", 17, "Female", “Electric”, 2019, 72.4);
17.new Student(277, "Anuj Chettiar", 18, "Male", "Computer Science", 2017, 57.5);

Use stream api on above list of employees find

1. Print the name of all departments in the college?
2.Get the names of all students who have enrolled after 2018?
3. Get the details of all male student in the computer sci department?
4. How many male and female student are there ? (HINT:use Collectors.groupingBy() for grouping based on gender)
5.What is the average age of male and female students?
6.Get the details of highest student having highest percentage ?
7.Count the number of students in each department? (Hint :use Collectors.groupingBy())
8. What is the average percentage achieved in each department?
9. Get the details of youngest male student in the Electronic department?(Hint :Use Collectors.minBy)
10.How many male and female students are there in the computer science department?






