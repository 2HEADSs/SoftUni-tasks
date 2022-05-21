package Exam_Prep_Jan;

import java.util.Scanner;

public class P05_MovieRatings  {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int countMovies = Integer.parseInt(scanner.nextLine());

        double maxRating = Double.MIN_VALUE;
        String maxMovie = "";

        double minRating = Double.MAX_VALUE;
        String minMovie = "";

        double sum = 0;

        for (int i = 0; i < countMovies ; i++) {
            String movieName = scanner.nextLine();
            double rating = Double.parseDouble(scanner.nextLine());

            if(rating > maxRating){
                maxRating = rating;
                maxMovie = movieName;
            }

            if(rating < minRating){
                minRating = rating;
                minMovie = movieName;
            }

            sum += rating;

        }

        double average = sum / countMovies;

        System.out.printf("%s is with biggest rating: %.1f%n", maxMovie, maxRating);
        System.out.printf("%s is with lowest rating: %.1f%n", minMovie, minRating);
        System.out.printf("Average rating: %.1f",average );

    }
}
