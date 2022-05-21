// For
 
// function solve (input) {
 
//     let result = 0;
         
//     for (let i = 1; i <= 100; i++) {   
//         if (i % 3 === 0) {  
//             result = i; 
//             console.log(result); 
//         }
//     }

     
     
     
    //While
     
     
     
    function solve (input) {     
    let result = 0;    
    let index = 1;
        
    while (index <= 100) {
     
       if (index % 3 === 0) {
        result = index;     
        console.log(result);
     
       }       
        index++; 
    }
}
solve()