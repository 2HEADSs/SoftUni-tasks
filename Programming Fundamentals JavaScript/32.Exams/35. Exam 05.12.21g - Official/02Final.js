function solve(input) {
    let count = Number(input.shift())
    let pattern = /\|(?<boss>[A-Z]{3,})\|:\#(?<title>[A-Za-z]+\s[A-Za-z]+)\#/g;
    for(let el of input){
      let result =  pattern.exec(el);
        if(result !== null){
            console.log(`${result.groups.boss}, The ${result.groups.title}`);
            console.log(`>> Strength: ${result.groups.boss.length}`);
            console.log(`>> Armor: ${result.groups.title.length}`);
        } else {
            console.log(`Access denied!`);
        }
    }

}
solve(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])
solve(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'])
