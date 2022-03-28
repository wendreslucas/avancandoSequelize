# Avançando com Sequelize

<br/>

## 💻 NodeJS com Sequelize

- Adicionar a opção "Paranoid" para fazer a exclusão suave
- Criar migrações para adicionar colunas às tabelas
- Criar coluna deletedAt para utilizar o recurso de exclusão suave
- Restaurar registros deletados via exclusão suave, utilizando o .restore()

  <br/>

- Definir um escopo de modelo padrão (defaultScope)
- Definir outros escopos adicionais, conforme necessidade do projeto
- Utilizar um escopo adicional com o método .findAll()
- Validar dados de entrada utilizando validadores próprios do Sequelize
- Refinar e customizar validações de campos utilizando funções e JS puro

  <br/>

- O que são escopos de associação
- Como definir um novo escopo de associação
- Utilizar métodos próprios/mixins em tabelas associadas
- Adicionar um filtro de busca via parâmetros de query
- Utilizar operadores para fazer operações com dados
- Retornar resultados filtrados através de operadores
- Filtrar e enumerar registros com métodos "finders"
- Ordenar os resultados com a opção "order"
- Agrupar registros com "group"
- Passar comandos do SQL dentro do Sequelize com Sequelize.literal()
  <br/>
- Criar métodos para atualizar mais de uma tabela
- Adicionar transações às operações de banco via Sequelize
- Interpretar avisos de versionamento e fazer correções
