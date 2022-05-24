function vacation(count, type, day) {
  let price = 0;
  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          price = 8.45;
          break;
        case "Saturday":
          price = 9.8;
          break;
        case "Sunday":
          price = 10.46;
          break;
      }
      break;
    case "Business":
      switch (day) {
        case "Friday":
          price = 10.9;
          break;
        case "Saturday":
          price = 15.6;
          break;
        case "Sunday":
          price = 16;
          break;
      }
      break;
    case "Regular":
      switch (day) {
        case "Friday":
          price = 15;
          break;
        case "Saturday":
          price = 20;
          break;
        case "Sunday":
          price = 22.5;
          break;
      }
      break;
  }
  let total = count * price;


  if (type == "Students" && count >= 30) {
    total = price * count * 0.85;
  }
  if (type == "Business" && count >= 100) {
    total = price * (count - 10);
  }
  if (type == "Regular" && count >= 10 && count <= 20) {
    total = (price * count) * 0.95;
  }
  console.log(`Total price: ${total.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
