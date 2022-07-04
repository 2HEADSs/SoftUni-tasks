function solve(input) {
    let bossPatern = /(|)([A-Z]{4,})\1/;
    let titlePattenr = /#([A-Za-z]+\s{1}[A-Za-z]+)#/;
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let [boss, title] = input.shift().split(":");
        let matchBoss = bossPatern.exec(boss)
        console.log(matchBoss);
        let matchTitle = titlePattenr.exec(title)
        console.log(matchTitle);

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
