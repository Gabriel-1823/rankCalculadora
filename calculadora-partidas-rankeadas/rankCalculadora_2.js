console.log('Por favor, insira número de derrotas e vitórias: \n')
let playerVitorias = 178
let player_derrotas = 57

statusPlayer = {
    nomePlayer: 'João dos Repolhos',
    saldoVitorias: playerVitorias - player_derrotas,
    rankAtual: 'Ferro',
    proximoRank: [rankNome = 'Bronze', saldoParaUpgrade = 11]
}

function upgrade_player_rank(rank = statusPlayer.rankAtual) {
    switch (rank) {

        case 'Ferro':
            console.log(`O jogador ${statusPlayer.nomePlayer} subiu do rank ${statusPlayer.rankAtual} para o rank ${statusPlayer.proximoRank[0]}!!`)
            statusPlayer.rankAtual = 'Bronze'
            statusPlayer.proximoRank[0] = 'Prata'
            statusPlayer.proximoRank[1] = 21
            break

        case 'Bronze':
            console.log(`O jogador ${statusPlayer.nomePlayer} subiu do rank ${statusPlayer.rankAtual} para o rank ${statusPlayer.proximoRank[0]}!!`)
            statusPlayer.rankAtual = 'Prata'
            statusPlayer.proximoRank[0] = 'Ouro'
            statusPlayer.proximoRank[1] = 51
            break

        case 'Prata':
            console.log(`O jogador ${statusPlayer.nomePlayer} subiu do rank ${statusPlayer.rankAtual} para o rank ${statusPlayer.proximoRank[0]}!!`)
            statusPlayer.rankAtual = 'Ouro'
            statusPlayer.proximoRank[0] = 'Diamante'
            statusPlayer.proximoRank[1] = 81
            break

        case 'Ouro':
            console.log(`O jogador ${statusPlayer.nomePlayer} subiu do rank ${statusPlayer.rankAtual} para o rank ${statusPlayer.proximoRank[0]}!!`)
            statusPlayer.rankAtual = 'Diamante'
            statusPlayer.proximoRank[0] = 'Lendário'
            statusPlayer.proximoRank[1] = 91
            break

        case 'Diamante':
            console.log(`O jogador ${statusPlayer.nomePlayer} subiu do rank ${statusPlayer.rankAtual} para o rank ${statusPlayer.proximoRank[0]}!!`)
            statusPlayer.rankAtual = 'Lendário'
            statusPlayer.proximoRank[0] = 'Imortal'
            statusPlayer.proximoRank[1] = 101
            break

        case 'Lendário':
            console.log(`O jogador ${statusPlayer.nomePlayer} subiu do rank ${statusPlayer.rankAtual} para o rank ${statusPlayer.proximoRank[0]}!!`)
            statusPlayer.rankAtual = 'Imortal'
            statusPlayer.proximoRank[0] = 'Prata'
            statusPlayer.proximoRank[1] = undefined
            break

    }


}

while (statusPlayer.saldoVitorias > statusPlayer.proximoRank[1]) {
    upgrade_player_rank(undefined)
}

console.log(`\nO Herói tem de saldo de ${statusPlayer.saldoVitorias} está no nível de ${statusPlayer.rankAtual}`);
