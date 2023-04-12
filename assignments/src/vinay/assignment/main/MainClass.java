// Package yourname.assignment.main
package vinay.assignment.main;
import vinay.assignment.data.MyClass;
import vinay.assignment.singleton.MySingleton;

public class MainClass {
    public static void main(String[] args) {
        MyClass obj1 = new MyClass();
        obj1.printVariables();

        // The following code will not compile as it attempts to access a non-static method from a static context
        // MySingleton.initializeString("Hello").printString();

        // Instead, the following code should be used
        MySingleton obj2 = MySingleton.initializeString("Hello");
        obj2.printString();
    }
}