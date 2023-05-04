// Package yourname.assignment.data
package vinay.assignment.data;

public class MyClass {
    int myInt;
    char myChar;

    public void printVariables() {
        System.out.println("myInt: " + myInt);
        System.out.println("myChar: " + myChar);
    }

    // The following code is not possible in Java, as local variables must be initialized before use.
    // public void printLocalVariables() {
    //     int a;
    //     char b;
    //     System.out.println("a: " + a);
    //     System.out.println("b: " + b);
    // }
}