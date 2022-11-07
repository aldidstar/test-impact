function counter(arr) {
  let ObjectTemplate = {};
  for (let i = 0; i < arr.length; i++) {
    let jumlah = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        jumlah++;
      }
    }
    ObjectTemplate[arr[i]] = jumlah;
  }
  return ObjectTemplate;
}

console.log(
  counter([
    "Joyful",
    "Infinite",
    "Humble",
    "Joyful",
    "Glory",
    "King",
    "Humble",
    "Infinite",
  ])
);

console.log(
  counter([true, true, false, true, false, true, false, false, true, false])
);

console.log(
  counter([
    1, 2, 3, 4, 5, 6, 4, 3, 2, 5, 6, 8, 7, 6, 9, 8, 7, 0, 8, 7, 6, 5, 4, 3,
  ])
);
