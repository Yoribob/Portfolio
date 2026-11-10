export function generateBorder() {
  let arr = [];
  const min1 = 1,
    min2 = 6;
  const max1 = 4,
    max2 = 12;
  for (let i = 0; i < 8; i++) {
    if (Math.random() < 0.5) {
      arr[i] = Math.random() * (max1 - min1) + min1;
    } else {
      arr[i] = Math.random() * (max2 - min2) + min2;
    }
  }
  let result = `${arr[0]}px ${arr[1]}px ${arr[2]}px ${arr[3]}px / ${arr[4]}px ${arr[5]}px ${arr[6]}px ${arr[7]}px`;
  return result;
}