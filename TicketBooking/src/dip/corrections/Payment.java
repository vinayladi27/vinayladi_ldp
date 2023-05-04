package dip.corrections;

public class Payment {

    private BankCard bankCard;

    public Payment(BankCard bankCard) {
        this.bankCard = bankCard;
    }

    public void doPurchaseSomething(long amount){
        bankCard.doTransaction(amount);
    }

    public static void main(String[] args) {
       // DebitCard debitCard=new DebitCard();
       // CreditCard creditCard=new CreditCard();

        BankCard bankCard=new CreditCard();
        Payment obj=new Payment(bankCard);
        obj.doPurchaseSomething(5000);
    }
}
