function solve(text){
    let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let matches = text.match(regEx);
    
    console.log(matches.join(" "));
}
solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")