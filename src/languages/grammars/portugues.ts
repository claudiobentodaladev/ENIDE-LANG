import { Language } from "../grammar.class.js";
import { DocStr, errorMessage, errorLabel } from "../utils/stucture.grammar.js";

export const portugues = new Language({
  language: "portugues",
  about:
    "ENIDE é um transpilador poliglota que permite programar em qualquer idioma",

  include: DocStr(
    "incluir",
    "usado para incluir idioma, bibliotecas ou estruturas de dados de outros ficheiros",
  ),

  commands: {
    __about: DocStr("sobre", "para obter informações sobre o ENIDE"),
    __help: DocStr(
      "ajuda",
      "para obter a lista de todos os comandos disponíveis",
    ),
    __version: DocStr("versão", "para obter a versão atual do ENIDE"),
    __languages: DocStr(
      "idiomas",
      "para obter a lista de todos os idiomas disponíveis",
    ),
    __documentation: DocStr("manual", "para obter a documentação de um idioma"),
    __grammar: DocStr("gramática", "para obter a gramática de um idioma"),
  },

  library: {
    __standard: {
      main: DocStr("padrão", "para acessar métodos padrão úteis"),
      __isarray: DocStr("éVector", "para verificar se o valor é um vector"),
      __isobject: DocStr("éObjecto", "para verificar se o valor é um objecto"),
      __typeof: DocStr("Tipo", "para obter o tipo de um valor"),
      __parse: DocStr(
        "Parse",
        "para converter um valor de texto para o seu valor correcto",
      ),
    },
    __math: {
      main: DocStr("matemática", "para aceder às funções matemáticas"),
      __pi: DocStr("PI", "para obter o valor de pi"),
      __sqrt: DocStr("Raiz", "para obter a raiz quadrada de um número"),
      __pow: DocStr("Potência", "para obter a potência de um número"),
      __round: DocStr("Arredondar", "para arredondar um número"),
      __random: DocStr("Aleatorio", "para obter um número aleatório"),
      __max: DocStr("Maximo", "para obter o valor máximo"),
      __min: DocStr("Minimo", "para obter o valor mínimo"),
      __isNumber: DocStr("ÉNumero", "para verificar se um valor é um número"),
      __isInteger: DocStr(
        "ÉInteiro",
        "para verificar se um valor é um inteiro",
      ),
      __isFloat: DocStr("ÉDecimal", "para verificar se um valor é um decimal"),
      __cos: DocStr("Cos", "para obter o cosseno de um ângulo em radianos"),
      __sin: DocStr("Sin", "para obter o seno de um ângulo em radianos"),
      __tan: DocStr("Tan", "para obter a tangente de um ângulo em radianos"),
    },

    __string: {
      main: DocStr("texto", "para aceder às funções de manipulação de texto"),
      __length: DocStr("Tamanho", "para obter o tamanho de uma string"),
      __toUpperCase: DocStr(
        "Maiúsculo",
        "para converter uma string para maiúsculas",
      ),
      __toLowerCase: DocStr(
        "Minúsculo",
        "para converter uma string para minúsculas",
      ),
      __include: DocStr(
        "Incluí",
        "para verificar se uma string contém uma substring",
      ),
      __repeat: DocStr("Repetir", "para repetir uma string um número de vezes"),
    },

    __date: {
      main: DocStr(
        "data",
        "para aceder às funções de manipulação de data e hora",
      ),
      __now: DocStr("Agora", "para obter a data e hora atual"),
      __year: DocStr("Ano", "para obter o ano"),
      __month: DocStr("Mês", "para obter o mês"),
      __dayMonth: DocStr("DiaMês", "para obter o dia do mês"),
      __dayWeek: DocStr("DiaSemana", "para obter o dia da semana"),
      __hour: DocStr("Hora", "para obter a hora"),
      __minute: DocStr("Minuto", "para obter o minuto"),
      __second: DocStr("Segundo", "para obter o segundo"),
    },
  },

  types: {
    __number: DocStr("número", "para declarar uma variável do tipo número"),
    __string: DocStr("texto", "para declarar uma variável do tipo texto"),
    __boolean: DocStr("bool", "para declarar uma variável do tipo booleano"),
    __object: DocStr("objecto", "para declarar um objeto estático"),
    __void: DocStr("vazio", "para declarar uma função que não retorna valor"),
    __array: DocStr("vector", "para declarar uma estrutura em vector"),
  },

  specialValues: {
    __true: DocStr("verdadeiro", "valor booleano verdadeiro"),
    __false: DocStr("falso", "valor booleano falso"),
    __null: DocStr("nulo", "ausência de valor"),
  },

  words: {
    __new: DocStr("criar", "para criar uma nova instância de uma classe"),
    __this: DocStr("este", "para acessar atributo da propria classe"),
    __extends: DocStr(
      "estender",
      "para declarar que uma classe herda de outra",
    ),
  },

  accessModifiers: {
    __private: DocStr("privado", "acessível apenas dentro da classe"),
    __public: DocStr("público", "acessível de qualquer lugar"),
    __protected: DocStr("protegido", "acessível na classe e subclasses"),
    __readonly: DocStr("lerApenas", "valor só pode ser atribuído uma vez"),
    __static: DocStr("estatico", "pertence à classe e não à instância"),
  },

  methods: {
    method: {
      __print: DocStr("escreva", "para imprimir um valor no ecrã"),
      __scan: DocStr("leia", "para ler um valor da entrada"),
      __return: DocStr("retornar", "para retornar um valor de uma função"),
      __break: DocStr("parar", "para sair de um ciclo"),
      __continue: DocStr("continuar", "para saltar para a próxima iteração"),
    },

    sentences: {
      __function: DocStr("função", "para declarar uma função"),
      __if: DocStr("se", "para declarar uma condição"),
      __else: DocStr("senão", "para declarar uma condição alternativa"),
      __while: DocStr("enquanto", "para declarar um ciclo enquanto"),
      __for: DocStr("para", "para declarar um ciclo for"),
      __switch: DocStr("escolha", "para declarar uma estrutura de seleção"),
      __case: DocStr("caso", "para declarar um caso na seleção"),
      __default: DocStr("contrário", "quando nenhum dos casos é encontrado"),
      __try: DocStr("tentar", "para declarar um bloco de tentativa"),
      __catch: DocStr("errar", "para declarar um bloco de erro"),
      __finally: DocStr("final", "executa independentemente do resultado"),
      __class: DocStr("classe", "para declarar uma classe"),
      __constructor: DocStr(
        "construtor",
        "estrutura que permite declarar atributos numa classe",
      ),
    },
  },

  errors: {
    __labels: errorLabel(
      "Mensagem",
      "Valor",
      "Variável",
      "Propriedade",
      "Objeto",
      "Esperado",
      "Recebido",
      "Atribuição Constante",
      "Parâmetro Duplicado",
      "Dica",
      "Token Inválido",
      "Estouro de Pilha",
      "Token",
      "Fim de Entrada Inesperado",
    ),
    main: errorMessage("ERRO", "erro genérico do sistema"),
    __TypeError: errorMessage("ERRO_DE_TIPO", "tipo inválido na operação"),
    __InitError: errorMessage(
      "ERRO_DE_INICIALIZAÇÃO",
      "variável não foi inicializada",
    ),
    __ReferenceError: errorMessage(
      "ERRO_DE_REFERÊNCIA",
      "variável, função ou biblioteca não existe no escopo",
    ),
    __SyntaxError: errorMessage("ERRO_DE_SINTAXE", "código inválido"),
    __RangeError: errorMessage(
      "ERRO_DE_LIMITE",
      "valor fora do intervalo permitido",
    ),
    __URIError: errorMessage("ERRO_DE_URI", "URI mal formada ou inválida"),
    __EvalError: errorMessage("ERRO_DE_EVAL", "erro relacionado ao eval"),
    __UNKNOWN_ERROR: errorMessage(
      "ERRO_DESCONHECIDO",
      "erro completamente desconhecido",
    ),
  },
  example: {
    __array: [
      "alimentos",
      "países",
      "items",
      "tags",
      "cores",
      "productos",
      "usuarios",
      "categorias",
      "pontos",
      "idiomas",
    ],
    __boolean: [
      "estado",
      "éAdulto",
      "estáAtivo",
      "éVisível",
      "temPermissão",
      "estáLogado",
      "estáHabilitado",
      "estáFeito",
      "estáVerificado",
      "estáDeletado",
    ],
    __function: [
      "obterNome",
      "obterValor",
      "lista",
      "obterDados",
      "formatarDados",
      "parsearEntrada",
      "validarFormulario",
      "actualizarItens",
      "actualizarEstado",
      "calcularTotal",
    ],
    __number: [
      "idade",
      "ano",
      "média",
      "total",
      "preço",
      "índice",
      "duração",
      "quantidade",
      "pontos",
      "tempo",
    ],
    __object: [
      "pessoa",
      "usuario",
      "config",
      "resposta",
      "pagamento",
      "definições",
      "perfil",
      "endereço",
      "metadados",
      "sessão",
    ],
    __string: [
      "nome",
      "titulo",
      "descrição",
      "email",
      "palavraPasse",
      "mensagem",
      "rotulo",
      "token",
      "url",
      "slug",
    ],
    __void: [
      "login",
      "iniciar",
      "limpar",
      "redefinir",
      "destruir",
      "deslogar",
      "limparCache",
      "salvar",
      "enviarEmail",
      "entrar",
    ],
  },
}).grammar();
