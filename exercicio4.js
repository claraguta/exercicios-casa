/* | Exemplo 04 | Descrição |
| --- | --- |
| `Pares` |Imprima na tela os números pares existentes entre 0 e 100..|
 */

  function pares(num){

    while (num <= 100){
        num++

        if ((num % 2) == 0) {
        console.log(`${num} é par`);
        }
    }
}
pares(0) 


 