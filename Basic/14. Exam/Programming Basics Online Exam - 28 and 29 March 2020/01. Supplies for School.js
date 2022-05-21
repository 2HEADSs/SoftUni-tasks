function solve(input) {
    let countPencil = Number(input[0]);
    let countMarkers = Number(input[1]);
    let priceLitter = Number(input[2]);
    let discountPercent = Number(input[3]);

    let sumPencil = countPencil * 5.80;
    let sumMarker = countMarkers * 7.20;
    let detergent = priceLitter * 1.20;
    let sum = sumPencil +sumMarker+detergent;
    let total = sum * ((100 - discountPercent)/100);
    console.log(total.toFixed(3));
}
solve(["2", "3", "2.5", "25"]);
solve(["4", "2", "5", "13"]);
