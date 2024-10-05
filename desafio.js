/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/
const pais = prompt("Digite o nome do país:");
const ouro = prompt("Digite o número de medalhas de ouro:");
const prata = prompt("Digite o número de medalhas de prata:");
const bronze = prompt("Digite o número de medalhas de bronze:");

const medalhas = {
    pais: pais,
    ouro: ouro,
    prata: prata,
    bronze: bronze,
    total: ouro + prata + bronze
}

    function exibirMedalhas(medalhas) {
        console.log(`O país ${medalhas.pais} tem:
        - ${medalhas.ouro} medalhas de ouro
        - ${medalhas.prata} medalhas de prata
        - ${medalhas.bronze} medalhas de bronze
        - Total: ${medalhas.total} medalhas`)
    }