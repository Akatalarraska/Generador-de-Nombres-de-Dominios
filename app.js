
var pronoun = ['the','our',"my"];
var adj = ['great', 'big',"nice" ];
var noun = ['jogger','racoon',"batman"];
let ext = [".com", ".net" ,".us", ".io"];

for (let i=0; i < pronoun.length; i++){
    for (let k=0; k < adj.length; k++){
        for(let j=0; j < noun.length; j++) {
            for (let e=0 ; e<ext.length ;e++){
                let domainName= pronoun[i] + adj[k] + noun[j] +ext[e];
                console.log(domainName);
            }
        }
     }
    }
    

/* con el forEach. (se escribe bastante menos cod)
pronoun.forEach(first => 
        adj.forEach ( second =>
            noun.forEach(third => 
                console.log(first + second  + third + ".com")
                )
            )
    )
*/

