(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{316:function(e,o,a){"use strict";a.r(o);var s=a(46),t=Object(s.a)({},function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"o-que-e"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#o-que-e","aria-hidden":"true"}},[e._v("#")]),e._v(" O que é?")]),e._v(" "),a("p",[e._v("Thymeleaf é um motor de templates para Java, ou seja, um mecanismo com capacidade para processar e criar HTML, XML, JavaScript, CSS e texto.\nOs templates são escritos, em sua maioria, com código HTML5 sendo mais adequado para servir XHTML / HTML5 na camada de visualização de aplicativos da Web baseados em MVC, mas pode processar arquivos mesmo em ambientes off-line e tem boa integração com o Spring Framework.")]),e._v(" "),a("h2",{attrs:{id:"como-funciona"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#como-funciona","aria-hidden":"true"}},[e._v("#")]),e._v(" Como Funciona:")]),e._v(" "),a("p",[a("strong",[e._v("Dialetos padrão:")])]),e._v(" "),a("p",[e._v("O thymeleaf vem com algo chamado dialetos padrão (chamados "),a("em",[e._v("Standard")]),e._v(" e "),a("em",[e._v("SpringStandard")]),e._v(") que definem um conjunto de recursos que devem ser mais do que suficientes para a maioria dos cenários.Você pode identificar quando esses dialetos padrão estão sendo usados ​​em um modelo porque ele conterá atributos começando com o "),a("strong",[e._v("th")]),e._v("(prefixo), como "),a("code",[e._v('<span th:text="...">')]),e._v(".")]),e._v(" "),a("p",[e._v("Os dialetos Standard e SpringStandard são quase idênticos, exceto que o SpringStandard inclui recursos específicos para integração em aplicações Spring MVC.")]),e._v(" "),a("p",[a("strong",[e._v("Sintaxe de expressão padrão:")])]),e._v(" "),a("p",[e._v("A maioria dos atributos Thymeleaf permite que seus valores sejam definidos como ou contendo expressões que chamaremos de Expressões Padrão por causa dos dialetos nos quais são usados. Eles podem ser de cinco tipos:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("${...}")]),e._v(" : Expressões variáveis.")]),e._v(" "),a("li",[a("code",[e._v("*{...}")]),e._v(" : Expressões de seleção.")]),e._v(" "),a("li",[a("code",[e._v("#{...}")]),e._v(" : Mensagens (i18n) expressões.")]),e._v(" "),a("li",[a("code",[e._v("@{...}")]),e._v(" : Expressões de link (URL).")]),e._v(" "),a("li",[a("code",[e._v("~{...}")]),e._v(" : Expressões de fragmento.")])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Exemplos:")])])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("th:each")]),e._v(": Percorre uma coleção de objetos enviada pelo controller;")]),e._v(" "),a("li",[a("code",[e._v("th:if")]),e._v(": Habilita e desabilita controles do HTML de acordo com a condição recebida;")]),e._v(" "),a("li",[a("code",[e._v("th:object")]),e._v(": Define o objeto que o controller irá receber e enviar por meio de um formulário;")]),e._v(" "),a("li",[a("code",[e._v("th:field")]),e._v(": Faz bind dos atributos do objeto do formulário com os inputs;")]),e._v(" "),a("li",[a("code",[e._v("th:href")]),e._v(": Para adicionar um link.")])]),e._v(" "),a("p",[e._v("No código:")]),e._v(" "),a("p",[e._v("URLs absolutas permitem que você crie links para outros servidores. Eles começam especificando um nome de protocolo "),a("strong",[e._v("(http:// ou https://)")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<a th:href="@{http://www.thymeleaf/documentation.html}">\n')])])]),a("p",[e._v("Os tipos de URLs mais usados ​​são os relativos ao contexto. Estas são as URLs que devem ser relativas à raiz da aplicação Web.\nURLs relativos ao contexto começam com /:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<a th:href="@{/order/list}">\n')])])]),a("p",[e._v("Basicamente um for each, onde percorre uma lista de objetos(no nosso caso mensagens)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(' <tr th:each="message : ${messages}"></tr>\n')])])])])},[],!1,null,null,null);o.default=t.exports}}]);