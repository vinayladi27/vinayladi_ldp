package dip.violations;


public class Payment {
    private DebitCard debitCard;

    public Payment(DebitCard debitCard) {
        this.debitCard = debitCard;
    }

    public void doPurchaseSomething(long amount){
        debitCard.doTransaction(amount);
    }

    public static void main(String[] args) {
        DebitCard debitcard=new DebitCard();
        Payment object=new Payment(debitcard);
        object.doPurchaseSomething(5000);
    }
}
