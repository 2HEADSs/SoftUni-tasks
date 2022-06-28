function solve(input) {
    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let match = pattern.exec(input);
    let result = [];
    let count = 0;
    while (match !== null) {
        count++
        let couple = ""
        let firstWord = match[2];
        let secondWord = match[3]
        let secondReverse = secondWord.split("").reverse().join("");
        if (firstWord === secondReverse) {
            couple = firstWord + " " +"<=>" + " " +secondWord
            result.push(couple);
        }
        match = pattern.exec(input)
    }
    if (count !== 0) {
        console.log(`${count} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }
    if(result.length !== 0){
        console.log(`The mirror words are:`);
        console.log(result.join(", "));
        } else {
            console.log(`No mirror words!`);
        }
    }
solve([
    "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
  solve([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
  solve([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])