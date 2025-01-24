# 🌟 Meu Portfólio - React JS & Material UI

Este repositório contém meu portfólio de desenvolvedor, construído utilizando **React JS** e **Material UI**, com o intuito de informações profissionais, experiências e projetos. O portfólio é **totalmente dinâmico e customizável**, permitindo adaptações conforme a necessidade.

---

## ✨ Funcionalidades

- **Interface responsiva** para todos os dispositivos.
- **Temas dinâmicos** (modo claro e escuro).
- **Seções personalizáveis**, como:
  - Sobre Mim
  - Experiências Profissionais
  - Projetos
  - Contato
- **Carrossel de imagens** para exibição de projetos.

---

## 🛠 Tecnologias Utilizadas

- **React JS** - Framework para desenvolvimento front-end.
- **Material UI** - Biblioteca de componentes para estilização responsiva.
- **React Router** - Gerenciamento de rotas dinâmicas.

---

## 🔧 Instalação e Uso

1. Clone o repositório:

   ```bash
   git clone https://github.com/leofbit/portifolio.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   # ou
   yarn start
   ```
5. Informe a URL do seu JSON em src/config.js

6. Acesse no navegador: `http://localhost:3000`

---

## 💡 Personalização
Crie um JSON e hospede o arquivo em algum servidor, Ex.:`https://gist.github.com/`
Os nomes das skills são baseadas pelo nome dos ícones da biblioteca `https://simpleicons.org/`
O nome do Icon em "highlights" esta na biblioteca do Material UI `https://mui.com/material-ui/material-icons/` 
Todas as informações são dinâmicas e podem ser personalizadas facilmente editando seu JSON:
```json
{
    "name": "Seu Nome",
    "birth": "--/--/----",
    "profession": "Desenvolvedor Fullstack",
    "img": "",
    "description": "Sou um desenvolvedor apaixonado por tecnologia...",
    "contacts": {
        "email": "seuemail@email.com",
        "phone": "+55 99 9 9999-9999",
        "linkedin": "https://www.linkedin.com/",
        "github": "https://github.com/"
    },
    "highlights": [
        { 
        "title": "Dedicação", 
        "value": "30+",
        "description": "Projetos", 
        "icon": "Work"
        },
        { 
        "title": "Experiência", 
        "value": "5+",
        "description": "Anos experiência", 
        "icon": "Work"
        }
    ],
    "skills": ["JavaScript", "React", "HTML5", "CSS", "Git", "Figma"],
    "projects": [
        {
        "img": "",
        "title": "Projeto 1",
        "description": "Descrição do Projeto" ,
        "skills": ["React", "JavaScript", "HTML5", "CSS"],
        "media": [
            {
            "src": "/assets/images/project/image1.png",
            "type": "image"
            },
            {
            "src": "/assets/videos/project/video1.mp4",
            "type": "video"
            }
        ],
        "sourceCode": {
            "plataform": "Github",
            "url": "https://google.com"
        }
        }
    ],
    "experiences": [
        {
        "role": "Desenvolvedor",
        "company": "Empresa X",
        "period": "Janeiro 2025 - Presente",
        "description": "Desenvolvi projetos...",
        "skills": ["React", "Node.js", "SQL"]
        }
    ],
    "education": [
        {
        "institution": "Faculdade X",
        "degree": "Ciências da Computação",
        "year": 2025
        },
        {
        "institution": "Curso Y",
        "degree": "Next.js",
        "year": "Em andamento"
        }
    ]
}
```

---

## 👌 Demonstração

Confira o portfólio em produção: [**seuportifolio.com**](https://seuportifolio.com)
