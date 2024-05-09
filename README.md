# trabalho-front02
Trabalho proposto em sala de aula, calculadora de datas.
Função maiorData(data1, data2): Esta função recebe dois parâmetros, data1 e data2, que são objetos de data. A função compara as duas datas e retorna a data mais recente.
Função intervaloEntreDatas(data1, data2): Esta função também recebe dois parâmetros, data1 e data2, que são objetos de data. A função verifica se data1 é mais recente que data2. Se for, ela retorna null e exibe uma mensagem no console. Se data1 for mais antiga que data2, a função calcula a diferença entre as duas datas em dias e retorna esse valor.
Função dataAtualFormatada(): Esta função não recebe nenhum parâmetro. Ela cria um novo objeto de data para a data e hora atuais e formata a data e hora no padrão “horamunuto - dia/mês/ano”. A função retorna a data e hora formatadas como uma string.
Função calculate(): Esta função é chamada quando o botão “Calcular” é clicado. Ela lê as datas dos campos de entrada date1 e date2, cria objetos de data a partir desses valores e chama as funções maiorData, intervaloEntreDatas e dataAtualFormatada com as datas apropriadas. A função então exibe os resultados na div com id “result”.
