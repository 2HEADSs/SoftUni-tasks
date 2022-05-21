import java.util.Scanner;

public class P02_GodzillaVsKong {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double budget = Double.parseDouble(scan.nextLine());
        int countOfPeople = Integer.parseInt(scan.nextLine());
        double priceForClothesPerPerson = Double.parseDouble(scan.nextLine());

        double decor = budget * 0.1;
        double totalPriceForClothes = countOfPeople * priceForClothesPerPerson;

        if (countOfPeople > 150) {
            totalPriceForClothes *= 0.9;
        }

        if (decor + totalPriceForClothes > budget) {
            double moneyNeed = (decor + totalPriceForClothes) - budget;
            System.out.println("Not enough money!");
            System.out.println(String.format("Wingard needs %.2f leva more.", moneyNeed));
        } else {
            double moneyLeft = budget - (decor + totalPriceForClothes);
            System.out.println("Action!");
            System.out.println(String.format("Wingard starts filming with %.2f leva left.", moneyLeft));
        }
    }
}
