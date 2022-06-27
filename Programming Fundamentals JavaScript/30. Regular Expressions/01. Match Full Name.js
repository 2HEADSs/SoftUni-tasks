//code(RegEx) for regex101
//\b[A-Z][a-z]+ [A-Z][a-z]+\b
//  \b - end-start line (border- boundery)
//+ : one or more
function solve(text){
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let output = []

    let matches = text.match(regEx);
    for(let name of matches){
        output.push(name);

    }
    console.log(output.join(" "));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")