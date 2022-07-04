function solve(input){
 const number = Number(input[0]);
    for (let index = 1; index <= number; index++) {
        const text = input[index].split(":");
        const boss = text[0];
        const title = text[1];
        if(isValidName(boss) && isValidTitle(title)){
            console.log(`${boss.slice(1,-1)}, The ${title.slice(1,-1)}`);
            console.log(`>> Strength: ${boss.slice(1,-1).length}`);
            console.log(`>> Armor: ${title.slice(1,-1).length}`);
        }else{
            console.log("Access denied!");
        }
        
        
        
    }
    function isValidName(boss){
        if (boss[0] == "|" && boss.charAt(boss.length-1) == "|")  {
            const name = boss.slice(1,-1)
            if (name.length > 3) {
                for (let index = 0; index < name.length; index++) {
                    if(name[index] == name[index].toUpperCase()){
                        
                    }
                    else
                    {
                        return false;
                    }
                    
                }
            }
        }
    
        return true;
    }
    function isValidTitle(title){
        if(!title[0] == "#" && !boss.charAt(title.length-1) == "#") return false;
        if(title.split(" ").length != 2) return false;
        
        return true;
    }
}


solve(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])