# Landing Page Portfólio - Squad Back-End - Turma 140

Projeto final da UC4 do curso de Desenvolvimento Front-end Web, realizado no Programa Transforme-se, do Senac.

## Projeto no ar

Acesse a versão publicada do projeto:

<https://nicolasklayvert.github.io/portifolio-squad-back/>

## Sobre o projeto

Esta landing page apresenta a Turma 140 e o portfólio do Squad Back-End bolado. O projeto reúne informações sobre a turma, seus integrantes, professores, formação e projetos desenvolvidos durante o curso.

## Equipe

### Squad Back-End bolado

Os integrantes são apresentados na página principal por meio de cards com
suas respectivas fotos. Os cards são apenas visuais e não possuem links para
páginas individuais.

## Tecnologias utilizadas

- **HTML5:** estrutura semântica da landing page.
- **CSS3:** layout responsivo, metodologia BEM e variáveis CSS para padronização visual.
- **Vanilla JavaScript:** interações da página sem dependências de frameworks.

## Funcionalidades

- Apresentação da Turma 140 e do Programa Transforme-se.
- Navegação por seções da landing page.
- Cards visuais com fotos dos integrantes.
- Área de projetos e galeria de imagens.
- Layout adaptado para diferentes tamanhos de tela.

## Como executar localmente

Por ser um projeto estático, não é necessário instalar dependências ou realizar um processo de build.

### Pré-requisitos

- Git
- Python 3 ou outro servidor HTTP local
- Navegador web atualizado

### Passo a passo

1. Clone o repositório:

	```bash
	git clone https://github.com/nicolasklayvert/portifolio-squad-back.git
	cd portifolio-squad-back
	```

2. Inicie um servidor HTTP na raiz do projeto:

	```bash
	python3 -m http.server 8000
	```

3. Abra no navegador:

	<http://localhost:8000/>

Para encerrar o servidor, pressione `Ctrl+C` no terminal.

### Alternativa

Também é possível abrir o arquivo `index.html` diretamente no navegador. Entretanto, o servidor HTTP local é recomendado para reproduzir melhor o ambiente de publicação e evitar limitações de recursos locais.

## Estrutura principal

```text
.
├── index.html       # Página principal
├── styles/          # Folhas de estilo
├── script.js        # Interações em JavaScript
└── img/             # Imagens utilizadas no projeto
```

## Publicação

O projeto é publicado com GitHub Pages a partir deste repositório.
