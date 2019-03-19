# Introdução ao Spring

O Spring é um framework Java criado com o objetivo de facilitar o desenvolvimento de aplicações (de vários tipos, não somente web),
oferecendo um conjunto de soluções prontas para problemas comuns. Alguns dos problemas que o Spring resolve:

  - Implementação do padrão MVC
  - Persistência de dados (comunicação com bancos de dados)
  - Injeção de dependências
  - Autenticação de usuários
  - Comunicação com mecanismos de fila
  - Processamento em lote (Spring Batch)

O Spring é uma ferramenta extremamente poderosa, especialmente para aplicações web. Vamos revisar abaixo como ele pode nos ajudar a
construir uma aplicação web de maneira eficiente.

## O padrão MVC

O MVC é um padrão arquitetural muito utilizado no desenvolvimento de aplicações web.

### O que é um padrão arquitetural?

Um padrão arquitetural nada mais é do que a forma como organizamos o código da nossa aplicação. Os padrões surgem como uma maneira de impor
as melhores práticas para se desenvolver um software.

#### Responsabilidade única e papeis bem definidos

É importante que cada classe faça somente uma coisa e é preciso definir estas coisas de maneira clara.

### E como se usa MVC?

Diferentemente de uma ferramenta (como o Spring), o MVC não é algo que podemos adotar diretamente, ou seja, não é possível fazer download de
algo e sair utilizando. O MVC é um conjunto de conceitos e ideias, portanto, utilizar o MVC se refere a como vamos organizar o código da
nossa aplicação. a sigla MVC significa `Modelo, Visão e Controle`. Vamos entender o que cada coisa significa:

### Modelo

Classes que representam entidades manipuladas pelo sistema.

### Visão

Classes, templates e recursos (HTML, CSS, JavaScript) utilizados para desenvolver a interface do sistema. Formam os mecanismos pelos quais
os usuários interagem com o sistema.

### Controle

Classes que organizam o relacionamento entre o modelo e a visão.

## Inversão de Controle

É um padrão de desenvolvimento onde se insere determinado código da aplicação dentro do framework, que ficará responsável pelo controle da
chamada dos métodos diferente da programação tradicional, ou seja, não é determinada diretamente pelo programador. Se um dia o nome da
classe ou o lugar onde ela está armazenada for alterado, nós apenas alteraríamos um arquivo de configuração, não mexeríamos em uma única
linha do código da classe.

## Injeção de Dependência

Nesta solução as dependências entre os módulos não são definidas programaticamente, mas sim pela configuração de uma infraestrutura de
software (container) que é responsável por "injetar" em cada componente suas dependências declaradas. A Injeção de dependência se
relaciona com o padrão Inversão de controle mas não pode ser considerada um sinônimo deste.

## Outros projetos Spring

* Spring MVC: para desenvolvimento de aplicações web \(módulo do Spring Framework\).
* Spring Security: para inserção de funcionalidades de autenticação e autorização.
* Spring Data: para aplicações que usam novas tecnologias de armazenamento de dados como bancos NoSQL e serviços na nuvem.
* Além de outros. Visite [http://spring.io/projects](http://spring.io/projects)

## Spring Boot

O Spring Boot é uma versão **opinativa** e **customizável** do Spring. Seu objetivo é facilitar a criação de aplicações Spring
autônomas e de produção (que você pode "executar"). É uma estrutura leve que simplifica a configuração de aplicações Spring e facilita a
publicação de nossas aplicações. A intenção é ter o seu projeto rodando o mais rápido possível e sem complicação.

## Vantagens do Spring Boot

Em primeiro lugar o Spring Boot é opinativo, ou seja, tem opiniões. É outra forma de dizer que o Spring Boot tem padrões razoáveis; assim, é possível desenvolver um aplicativo rapidamente utilizando esses valores usados com frequência.

Por exemplo, o Tomcat é um contêiner da web muito popular. Por padrão, um aplicativo da web Spring Boot usa um contêiner Tomcat integrado.

Em segundo lugar, ele é customizável, ou seja, uma estrutura opinativa não será muito boa se não puder mudar de opinião. É possível customizar facilmente um aplicativo Spring Boot conforme suas preferências, tanto na configuração inicial quanto posteriormente, no ciclo de desenvolvimento.

Por exemplo, se você prefere o Maven, pode facilmente fazer alterações de `<dependência>` no seu arquivo **pom** para substituir o valor padrão do Spring Boot.

## Por onde iniciar?

Existem várias formas de se criar um projeto com Spring Boot. Você pode fazer “na mão”, pode-se usar o Spring Boot pela linha de comando, uma IDE ou utilizar o **Spring Initializr**.

![imagem](https://cdn-images-1.medium.com/max/1200/1*CV2P0YWxS_skLrLTQOeePA.png)

Caso você esteja utilizando o **IntelliJ**, ele fornece uma opção para se criar um projeto utilizando o Spring Initializr.

## Anotações

`@SpringBootApplication` Para quem usa Spring Boot, essa é uma das primeiras que você. Ela engloba a @Component, @ComponentScan e mais uma chamada @EnableAutoConfiguration, que é utilizada pelo Spring Boot para tentar advinhar as configurações necessárias para rodar o seu projeto.

`@Controller` Usada para classes controladoras que possuem métodos que processam Requests numa aplicação web.Um Controller é responsável tanto por receber requisições como por enviar a resposta ao usuário, algo

`@RequestMapping` Geralmente utilizada em cima dos métodos de uma classe anotada com @Controller. Serve para você colocar os endereços da sua aplicação que, quando acessados por algum cliente, deverão ser direcionados para o determinado método.

_**Exemplo:**_

Veja como é simples criar um Controller, mas veja que este não possui nenhum “mapping” atrelado a ele. Então criemos uma view \(.jsp\) chamada “home.jsp” dentro da pasta “/WEB-INF/views” e criaremos o mapping “/home” para exibir a view criada. Veja a Listagem 2.

```java
@Controller //Define que minha classe será uma controladora
public class HomeController {

    @RequestMapping("/home") //Define a URL que quando for requisitada ira chamar o metodo
    public ModelAndView home() {
         //Retorna a view que deve ser chamada, no caso home (home.jsp) aqui o .jsp é omitido
        return new ModelAndView("home");
    }
}
```

`@Repository` É associada com classes que isolam o acesso aos dados da sua aplicação. Comumente associada a DAO’s.

`@Autowired` Anotação utilizada para marcar o ponto de injeção na sua classe. Você pode colocar ela sobre atributos ou sobre o seu construtor com argumentos.Marca um construtor, um campo, um método setter ou um método

`@ResponseBody` Utilizada em métodos anotados com @RequestMapping para indicar que o retorno do método deve ser automaticamente escrito na resposta para o cliente.

_**Exemplo:**_

```java
@Controller
public class HomeController {

  @RequestMapping("/home")
  @ResponseBody // Essa anotação indica para o Spring renderizar o retorno do metodo como conteudo da pagina
  public String home() {
      return "<h1>Hello World</h1>";
  }
}
```

Como mostra a imagem:

![imagem](https://docs.microsoft.com/pt-br/outlook/rest/images/java-tutorial/hello-world.png)

`@Service` Associada com classes que representam a ideia do Service do Domain Driven Design. Para ficar menos teórico pense em classes que representam algum fluxo de negócio da sua aplicação. Por exemplo, um fluxo de finalização de compra envolve atualizar manipular o carrinho, enviar email, processar pagamento etc. Este é o típico código que temos dificuldade de saber onde vamos colocar, em geral ele pode ficar num Service.

`@Component` A annotation básica que indica que uma classe vai ser gerenciada pelo container do Spring. Todas as annotations descritas acima são, na verdade, derivadas de @Component. A ideia é justamente passar mais semântica.

## Spring MVC

O Spring MVC é um dos frameworks para desenvolvimento Web mais utilizados hoje em dia. Com ele, temos à nossa disposição uma implementação do padrão MVC em conjunto com os principais recursos do Spring. Ele já tem todas as funcionalidades que precisamos para:

* atender as requisições HTTP;
* delegar responsabilidades de processamento de dados para outros componentes; 
* preparar a resposta que precisa ser dada.

É uma excelente implementação do padrão MVC.

MVC é abreviação de Model, View e Controller, e é bacana entender o papel de cada um deles dentro do sistema,então vamos a explicação:

![imagem](http://s3.amazonaws.com/algaworks-blog/wp-content/uploads/Fluxo-do-Spring-MVC.png)

1. Acessamos uma URL no browser que envia a requisição HTTP para o servidor que roda a aplicação web com Spring MVC. Perceba que quem recebe a requisição é o controlador do framework, o Spring MVC.
2. O controlador do framework irá procurar qual classe é responsável por tratar essa requisição, entregando a ela os dados enviados pelo browser. Essa classe faz o papel do controller.
3. O controller passa os dados para o model, que por sua vez executa todas as regras de negócio, como cálculos, validações e acesso ao banco de dados.
4. O resultado das operações realizadas pelo model é retornado ao controller.
5. O controller retorna o nome da view, junto com os dados que ela precisa para renderizar a página.
6. O Framework encontra a view que processa os dados, transformando o resultado em um HTML.
7. Finalmente, o HTML é retornado ao browser do usuário.

Na prática, o controller é a classe Java com os métodos que tratam essas requisições. Portanto, tem acesso a toda informação relacionada a ela como parâmetros da URL, dados submetidos através de um formulário, cabeçalhos HTTP, etc.

