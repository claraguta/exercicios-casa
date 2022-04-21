/* | Exemplo 03 | Descrição |
| --- | --- |
| `Tabuada` | Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10. | */


function tabuada (number){

    for(let i = 1; i <= 10; i++) {

    const result = i * number;

    console.log(`${number} * ${i} = ${result}`);
}
}

tabuada(5)