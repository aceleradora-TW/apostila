(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{314:function(s,a,t){"use strict";t.r(a);var n=t(46),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"comecando-com-o-postgresql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comecando-com-o-postgresql","aria-hidden":"true"}},[s._v("#")]),s._v(" Começando com o PostgreSQL")]),s._v(" "),t("p",[s._v("São um conjunto de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas, são coleções organizadas de dados. Sempre que for possível agrupar informações que se relacionam e tratam de um mesmo assunto, posso dizer que tenho um banco de dados.")]),s._v(" "),t("p",[s._v("Já um sistema de gerenciamento de banco de dados (SGBD) é um software que possui recursos capazes de manipular as informações do banco de dados e interagir com o usuário. Um exemplo de SGBD é:")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://lh4.googleusercontent.com/ZthMHOYo9r5QnYduoOBsdzGoUhQ69PieuabvgA27bd8lBuI4QMi2-uY66wWxxELL1kXti140zD0ZEmlVKmonMHc8fScH3QoqGfkefveKvwprj49otRV8OOr_RBfkXSPZ6E0CkVjJ",alt:"ImagemPostgreSQL"}})]),s._v(" "),t("p",[s._v("É um Sistema Gerenciador de Bancos de dados Relacional estendido e de código aberto(SGBDR- o R é porque ele é relacional). Existem vários Modelos de Base de Dados, alguns exemplos são: Modelo em Rede, Modelo Hierárquico, Modelo Relacional,Orientado a Objetos.")]),s._v(" "),t("p",[s._v("Para criar a base de dados o SGBD utiliza uma linguagem. A mais utilizada atualmente é o SQL, (Structured Query Language). Para armazenar um dado em um banco de dados, é necessário criar tabelas e dentro delas são criadas colunas, onde as informações são armazenadas.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt udpdate\n")])])]),t("p",[s._v("Quando vamos instalar algum programa via terminal, é sempre uma boa ideia executar antes "),t("code",[s._v("sudo apt update")]),s._v(", pois ele irá atualizar os links para os repositórios de onde o Linux faz download dos programas (como se fossem links para o Baixaki que o Linux usa internamente para encontrar os instaladores dos programas).")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql postgresql-contrib\n")])])]),t("p",[s._v("Esse comando instala o pacote Postgres junto com o pacote contrib, que adiciona alguns utilitários e funcionalidades adicionais.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -i -u postgres\n")])])]),t("p",[s._v("Alternando para a conta postgres.")]),s._v(" "),t("h2",{attrs:{id:"comandos-sql-utilizando-postgresql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comandos-sql-utilizando-postgresql","aria-hidden":"true"}},[s._v("#")]),s._v(" Comandos SQL (utilizando PostgreSQL)")]),s._v(" "),t("p",[s._v("Antes de executar qualquer comando "),t("code",[s._v("SQL")]),s._v(", precisamos acessar o Postgres. Para isso, executamos:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("psql\n")])])]),t("p",[s._v("Isso fará você entrar no prompt do PostgreSQL e, a partir daqui, você estará livre para interagir com o sistema de gerenciamento de banco de dados imediatamente (consultando e alterando dados de tabelas e bancos).")]),s._v(" "),t("p",[s._v("Para sair do prompt do Postgres e voltar ao terminal comum, digite:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\\q\n")])])]),t("h3",{attrs:{id:"agora-sim-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agora-sim-sql","aria-hidden":"true"}},[s._v("#")]),s._v(" Agora sim, SQL")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" pessoa "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\nid "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("serial")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("primary")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nnome "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("varchar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("O comando CREATE TABLE cria uma tabela, pessoa é um exemplo de nome para sua tabela e dentro dos () vai as suas colunas, como exemplos temos id e nome.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" pessoa "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ingrid"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("O comando INSERT INTO TABLE insere na tabela pessoa respectivamente os seguintes valores: id=1 e nome=Ingrid.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  pessoa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Seleciona toda a tabela pessoa.")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" pessoa "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" nome "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Brenda'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Atualiza o nome do cliente para Brenda se o Id for igual a 1")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" pessoa "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("Exclui as linhas onde o id é igual a 1 na tabela especificada. Se o id não for especificado, o efeito é excluir todas as linhas da tabela.")]),s._v(" "),t("h2",{attrs:{id:"ferramentas-adicionais"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ferramentas-adicionais","aria-hidden":"true"}},[s._v("#")]),s._v(" Ferramentas Adicionais")]),s._v(" "),t("h3",{attrs:{id:"pgadmin-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pgadmin-3","aria-hidden":"true"}},[s._v("#")]),s._v(" PgAdmin 3")]),s._v(" "),t("p",[s._v("Para uma interface gráfica de usuário do PostgreSQL, use o seguinte comando:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pgadmin3\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" postgres -c psql postgres\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ALTER USER postgres WITH PASSWORD "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postgres'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"execute-os-seguintes-comandos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-os-seguintes-comandos","aria-hidden":"true"}},[s._v("#")]),s._v(" Execute os seguintes comandos")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTEGER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nome_cliente "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CONSTRAINT")]),s._v(" pk_id_cliente "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTEGER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" total "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REAL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cliente_id_cliente  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTEGER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOREIGN")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cliente_id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REFERENCES")]),s._v(" cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" cliente "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nome_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2334")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Joao da silva'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" cliente "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nome_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3456")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Ana Maria Braga'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" cliente "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nome_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8275")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Joana Barcelos Veiga'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" cliente "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("nome_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9812")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Carlos Schallenberger'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("752")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100.23")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2334")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("334")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1456.00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2334")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("498")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("278.98")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9812")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("125")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("874.98")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9812")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("365")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("286.30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9812")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("775")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("134.54")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9812")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("834")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("187.34")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3456")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("998")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("234.34")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8275")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id_pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("total"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cliente_id_cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("456.87")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8275")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" pedido"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v(" cliente "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" nome_cliente "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Ronaldo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cliente"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" cliente "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id_cliente "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8275")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);