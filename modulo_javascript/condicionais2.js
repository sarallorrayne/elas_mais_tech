// Switch...Case: muito útil quando sua variável possui valores específicos
// Não pode conter infinitos valores, deve ser finito

const permissoes = 'aluno' // permissões de 'aluno' || 'professor' || 'admin'

// switch(variavel) {
//     case:
//     break; SEMPRE COLOCAR
// }

switch (permissoes) {
    case 'aluno':
        console.log('Você só pode visualizar as aulas.');
        break;
    case 'professor':        
        console.log('Você pode alterar as aulas e adicionar exercícios.');
        break;
    case 'admin':
        console.log('Você pode fazer o que quiser no sistema.');
        break;
    default: // se não for nenhuma das opções disponíveis
        console.log('Não sei com você é no sistema');
}