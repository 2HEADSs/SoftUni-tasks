import java.util.Scanner;

public class P04_CinemaVoucher {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int budget = Integer.parseInt(scan.nextLine());

        int tickets = 0;
        int otherStuff = 0;

        String product = scan.nextLine();

        while (!"End".equals(product)) {
            int price = 0;
            if (product.length() > 8) {
                price = product.charAt(0);
                price += product.charAt(1);
                if (budget - price < 0) {
                    break;
                } else {
                    tickets++;
                    budget -= price;
                }
            } else {
                price = product.charAt(0);
                if (budget - price < 0) {
                    break;
                } else {
                    otherStuff++;
                    budget -= price;
                }
            }
            product = scan.nextLine();
        }
        System.out.println(tickets);
        System.out.println(otherStuff);
    }
}