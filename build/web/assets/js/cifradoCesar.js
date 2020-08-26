const message = document.getElementById("msg");
const cifrar = document.getElementById("cifrar");
const descifrar = document.getElementById("descifrar");
const btnHallar = document.getElementById("btn");
const des = document.getElementById("des");
const abecedario = document.getElementById("abc").value;
const res = document.getElementById("response");

//podemos a la escucha un evento click
btnHallar.addEventListener('click',handlerClick);

const cifrarAndDescifrar = (message, option, des) => {
    des = Number(des);
    //message = Hola.
    message = message.toLowerCase();
    const messageSplit = message.split("");
    let response = "";
    //messageSplit = ["h","o","l","a"]
    for(let i = 0; i < messageSplit.length; i++){
        //h -> k  i = 0
        //o -> r  i = 1
        const index = abecedario.indexOf(messageSplit[i]);
        response += index===-1?messageSplit[i]:option==='c'?nextCharacter2(index,des):prevCharacter2(index,des);
    }
    return response;
};

const nextCharacter2 = (index, des) => {
    //abecedario = a b c d = 4
    //cifrar = b
    //index = 1
    //salto = 3
    const newIndex = index + des;//4
    if(newIndex < abecedario.length){
        return abecedario[newIndex];
    }
    const diff =  newIndex - abecedario.length;
    return abecedario[diff];
};

const prevCharacter2 = (index, des) => {
    //abecedario = a b c d = 4
    //cifrar = c
    //index = 2
    //salto = 3
    const newIndex = index - des;//-1
    if(newIndex >= 0){
        return abecedario[newIndex];
    }
    const diff =  abecedario.length - Math.abs(newIndex);
    return abecedario[diff];
};

const nextCharacter = (index, des) => {
    let c = null;
    let countPasos = 0;
    while(c === null){
        countPasos++;//i
        index++;
        if(countPasos === des){
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
       res.innerHTML = `El texto <span class="b">${message.value}</span> cifrado es: <span class="b">${cifrarAndDescifrar(message.value,'c',des.value)}</span>`;
   }else{//descrifrar
       console.log("descifrando")
       res.innerHTML = `El texto <span class="b">${message.value}</span> descifrado es: <span class="b">${cifrarAndDescifrar(message.value,'d',des.value)}</span>`;
   } 
}

