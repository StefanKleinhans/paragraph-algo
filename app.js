var para = "A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete. By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place.";
var list = [];
for (var i = 97; i < 123; i++) {
    list.push(String.fromCharCode(i));
}
var cntLetters = function (paragraph) {
    var cnt = [];
    var counter = 0;
    for (var i in list) {
        for (var j = 0; j < paragraph.length; j++) {
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
