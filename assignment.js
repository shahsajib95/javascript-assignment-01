// kilometerToMeter
function kilometerToMeter(kilo) {
  const meter = kilo * 1000;
  return meter;
}
const output = kilometerToMeter(10);
console.log(output);

// budgetCalculator 
function budgetCalculator(watch, mobile, laptop) {
  const perWatchPrice = 50;
  const perMobilePrice = 100;
  const perLaptopPrice = 500;
  const totalPrice =
    perWatchPrice * watch + perMobilePrice * mobile + perLaptopPrice * laptop;
  return totalPrice;
}
const total = budgetCalculator(5, 0, 5);
console.log(total);

// hotelCost
function hotelCost(day) {
  const day10 = 10;
  const day20 = 20;

  if (day <= day10) {
    const costPer10 = day * 10;
    return costPer10;
  } else if (day <= day20) {
    const costPer10 = day10 * 10;
    const costPer20 = (day - day10) * 20;
    const total = costPer10 + costPer20;
    return total;
  } else {
    const costPer10 = day10 * 10;
    const costPer20 = day20 * 20;
    const costNext = (day - day20) * 50;
    const total = costPer10 + costPer20 + costNext;
    return total;
  }
}
const total = hotelCost(50);
console.log(total);

// megaFriend
const friendName = ["Sajid", "Shuvo", "Sajib", "Abdullah"];
var maxLatters = friendName[0];
function megaFriend(friendName) {
  for (let i = 0; i < friendName.length; i++) {
    const result = friendName[i];
    if (result.length > maxLatters.length) {
      return (maxLatters = result);
    }
  }
}
megaFriend(friendName);
console.log(maxLatters);
