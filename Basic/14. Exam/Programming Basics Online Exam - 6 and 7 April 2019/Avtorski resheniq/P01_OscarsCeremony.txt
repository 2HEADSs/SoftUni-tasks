import java.util.Scanner;

public class P01_OscarsCeremony {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int rent = Integer.parseInt(scan.nextLine());

        double statuesPrice = rent * 0.7;
        double cateringPrice = statuesPrice * 0.85;
        double soundPrice = cateringPrice / 2;

        double totalPrice = rent + statuesPrice + cateringPrice + soundPrice;

        System.out.println(String.format("%.2f", totalPrice));
    }
}