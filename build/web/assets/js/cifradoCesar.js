const message = document.getElementById("msg");
const cifrar = document.getElementById("cifrar");
const descifrar = document.getElementById("descifrar");
const btnHallar = document.getElementById("btn");
const salto = 3;
const abecedario = "abcdefghijklmnñopqrstuvwxyz";

//podemos a la escucha un evento click
btnHallar.addEventListener('click',handlerClick);

const cifrarC = (message) => {
    //message = Hola.
    message = message.toLowerCase();
    const messageSplit = message.split("");
    let response = "";
    //messageSplit = ["h","o","l","a"]
    for(let i = 0; i < messageSplit.length; i++){
        //h -> k  i = 0
        //o -> r  i = 1
        const index = abecedario.indexOf(messageSplit[i]);
        response += index===-1?messageSplit[i]:nextCharacter2(index);
    }
    console.log(response);
    return response;
};

const nextCharacter2 = (index) => {
    //abecedario = a b c d = 4
    //cifrar = b
    //index = 1
    //salto = 3
    const newIndex = index + salto;//4
    if(newIndex < abecedario.length){
        return abecedario[newIndex];
    }
    const diff =  newIndex - abecedario.length;
    return abecedario[diff];
};

const nextCharacter = (index) => {
    let c = null;
    let countPasos = 0;
    while(c === null){
        countPasos++;//i
        index++;
        if(countPasos === salto){
            c = abecedario[index];
        }
        if(index >= abecedario.length){
            index = 0;
        }
    }
    return c;
};

function handlerClick(){
   if(cifrar.checked){//cifrar
       console.log("cifrando")
       cifrarC(message.value);
   }else{//descrifrar
       console.log("descifrando")
   } 
}

