const para: string =
  "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.";

const list: string[] = [];

for (let i: number = 97; i < 123; i++) {
  list.push(String.fromCharCode(i));
}

const cntLetters = (paragraph: string) => {
  const cnt: number[] = [];

  let counter: number = 0;

  for (let i in list) {
    for (let j = 0; j < paragraph.length; j++) {
      if (list[i] == paragraph[j]) {
        counter++;
      }
    }
    cnt.push(counter);
    counter = 0;
  }
  console.log(list, cnt);
};

cntLetters(para);
