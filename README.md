# TaskFront

Uma **Frontend para uma Rest api **, para manter controle das suas tarefas diárias.

//Direcionada para o projeto [TaskSys] (https://github.com/AndreLuisGO/tasksys/)


## Instruções

Estas instruções irão permitir que você obtenha uma cópia do projeto e execute-a na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

1.  Conhecimento básico em:
    * Terminal/console/bash/prompt de comando;
    * git;
    * Pip instalado, bem como suas dependências.



Para manter as configurações apenas neste projeto, utilize o [*virtualenv*](https://virtualenv.pypa.io/en/stable/)  (veja instalação para mais detalhes)



### Instalação



Navegue até a pasta onde você clonou este repositório. Se ainda não o fez, digite o seguinte código no terminal:

```
$ git clone https://github.com/AndreLuisGO/tasksys.git
```
Após feito, navegue até a pasta com
```
$ cd tasksys
```

* Modifique as configurações de conexão com o banco de dados no arquivo  `tasksys/settings.py`, nas linhas 88-91 com seu usuário, senha, host e portas conforme suas configurações.




1 - Instale o http-server usando:
```
$ npm install http-server
```
Isso irá instalar o http-server


2 - Agora, basta iniciar o servidor

```
http-server
```

6 - Se tudo der certo, você irá ver a seguinte mensagem:

```
Starting up http-server, serving ./
Available on:
  http://192.168.1.4:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
```



7 - Feito isso, abra seu navegador e acesse:

`http://127.0.0.1:8080`

O Frontend será carregado, e, caso a API esteja rodando (veja instruções do projeto [Tasksys](https://github.com/AndreLuisGO/tasksys) para instalar e rodar a API), as tarefas já poderão ser adicionadas.


8 - Aproveite o momento e utilize a interface para sua rotina.

## Construído com

* *HTML5*
* [Bootstrap CSS](getbootstrap.com))
* [JavaScript](https://www.javascript.com/)
* [JQuery](https://jquery.com/)


## Autor

* [**André Luis Oliveira**] - (https://github.com/AndreLuisGO)


## Reconhecimentos

* Toda a vasta comunidade de desenvolvedores do StackOverflow
* Todos que, de alguma maneira, contribuíram para o sucesso do projeto.
