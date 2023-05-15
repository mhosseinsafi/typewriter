

const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay);


// const sentence = "hello there from lighthouse labs";

// for (let i = 0; i < sentence.length; i++) {
//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//   }, 1000 * i);
// }