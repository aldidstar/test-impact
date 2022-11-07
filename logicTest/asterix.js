let words = "beever";
for (let i = 0; i <= words.length - 1; i++) {
  let template = "";
  for (let j = 0; j <= i; j++) {
    template += words[j];
  }
  console.log(template);
}
