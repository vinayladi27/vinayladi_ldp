// Package yourname.assignment.singleton
package vinay.assignment.singleton;

public class MySingleton {
    private String myString;

    public static MySingleton initializeString(String s) {
        MySingleton obj = new MySingleton();
        obj.myString = s;
        return obj;
    }

    public void printString() {
        System.out.println("myString: " + myString);
    }
}