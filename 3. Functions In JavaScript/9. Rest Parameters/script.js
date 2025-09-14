function func(...numbers) {
  total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total; 
}
console.log(func(1, 2, 3, 4));
