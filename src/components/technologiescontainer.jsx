import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiPython,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", text:"HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software.", icon: <DiHtml5 />},
  { id: "css", name: "CSS3", text:"CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros.", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", text:"JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", text:"Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", text:"O MySQL é um sistema de gerenciamento de banco de dados (SGBD), que utiliza a linguagem SQL (Linguagem de Consulta Estruturada, do inglês Structured Query Language) como interface.", icon: <DiMysql /> },
  { id: "Python", name: "python", text:"Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>

            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
