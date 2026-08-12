import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDatabase, FaDocker, FaCode } from "react-icons/fa";
import "./styles/components/app.sass";

function App() {
  return (
    <div id="portfolio-clean">

      <header>
        <h1>JOSÉ HENRIQUE PALMEIRA JARDIM</h1>
        <p className="subtitle">Candidato à Área de Tecnologia | Ciência de Dados | TechOps</p>

        <div className="download-container" style={{ margin: "20px 0", textAlign: "center" }}>
          <a
            href="/curriculum_joseHenriqueJardim.pdf"
            download="Curriculo_Jose_Henrique.pdf"
            className="btn-download"
            style={{ backgroundColor: "#007bff", color: "white", padding: "10px 20px", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
          >
            Baixar Currículo em PDF
          </a>
        </div>

        <div className="contact-grid">
          <div><FaMapMarkerAlt /> Rio de Janeiro - RJ</div>
          <div><FaPhone /> (21) 97568-2548</div>
          <div><FaEnvelope /> josehenriqueprogramador@gmail.com</div>
          <div><FaLinkedin /> linkedin.com/in/jose-jardim-764143247</div>
          <div><FaGithub /> github.com/josehenriqueprogramador</div>
        </div>
      </header>

      <section>
        <h2>RESUMO PROFISSIONAL</h2>
        <p className="resume-text">
          Atualmente atuando como motorista operacional na Beep Saúde, com experiência em rotinas operacionais, atendimento e cumprimento de protocolos. Em transição de carreira para a área de Tecnologia, desenvolvendo conhecimentos em Ciência de Dados, automação, Python, Docker e desenvolvimento de sistemas. Possuo experiência prática em projetos pessoais de tecnologia, automação de tarefas e desenvolvimento de soluções voltadas à otimização de processos.
        </p>
      </section>

      <section>
        <h2>FORMAÇÃO ACADÊMICA</h2>
        <ul>
          <li><strong>Bacharelado em Ciência de Dados</strong> - Unigranrio (Início em 2026)</li>
          <li><strong>Análise e Desenvolvimento de Sistemas</strong> - Estácio (Incompleto)</li>
        </ul>
      </section>

      <section>
        <h2>FORMAÇÃO COMPLEMENTAR</h2>
        <ul>
          <li><strong>Power BI - Módulo I</strong> - Nave do Conhecimento / Secretaria Municipal de Ciência, Tecnologia e Inovação do Rio de Janeiro (2026, 18h)</li>
          <li><strong>Curso JavaScript Completo</strong> - Danki Code (2026, 14h)</li>
          <li><strong>Curso Introdução ao n8n</strong> - Danki Code (2026, 1h)</li>
          <li><strong>Curso de Ruby e Ruby on Rails Completo</strong> - Danki Code (2026, 27h)</li>
          <li><strong>Curso de Extensão em Neurociência e Vendas</strong> - PUCRS (2026)</li>
        </ul>
      </section>

      <section>
        <h2>HABILIDADES TÉCNICAS</h2>
        <ul className="skills-list">
          <li><strong>Programação & Análise:</strong> Python, PHP, JavaScript, Ruby e Power BI.</li>
          <li><strong>Automação:</strong> Scripts de automação, APIs, n8n e Flask.</li>
          <li><strong>Infraestrutura:</strong> Docker, containers, Kubernetes e deploy em nuvem.</li>
          <li><strong>Suporte e Operações:</strong> Análise de logs, documentação técnica e suporte básico a usuários.</li>
          <li><strong>Outros:</strong> Inglês intermediário e análise de indicadores.</li>
        </ul>
      </section>

      <section>
        <h2>EXPERIÊNCIA PROFISSIONAL</h2>

        <div className="job-block">
          <div className="job-header">
            <span className="company">Beep Saúde</span>
            <span className="date">2026 - Atual</span>
          </div>
          <div className="role">Motorista Operacional</div>
          <ul>
            <li>Responsável pelo transporte seguro e cumprimento de rotas operacionais.</li>
            <li>Atuação seguindo protocolos rigorosos de qualidade e atendimento.</li>
            <li>Experiência com rotinas operacionais e resolução de situações do dia a dia.</li>
          </ul>
        </div>

        <div className="job-block">
          <div className="job-header">
            <span className="company">Corretor de Imóveis</span>
            <span className="date">2007 - Atual</span>
          </div>
          <div className="role">Atuação Intercalada</div>
          <ul>
            <li>Atuação em negociação, captação e atendimento de clientes.</li>
          </ul>
        </div>

        <div className="job-block">
          <div className="job-header">
            <span className="company">Ametista Imóveis LTDA</span>
            <span className="date">2014 - 2015</span>
          </div>
          <div className="role">Programador Web</div>
          <ul>
            <li>Desenvolvimento e manutenção de sites institucionais e sistemas web utilizando PHP e JavaScript.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>PROJETOS EM DESTAQUE</h2>
        <ul className="projects-list">
          <li><FaCode /> <strong>Tech Ops Toolbox:</strong> Scripts para automação de backups, monitoramento de serviços e análise de logs.</li>
          <li><FaDatabase /> <strong>FiboPay PRO:</strong> Simulador de pagamentos com lógica matemática e documentação técnica.</li>
          <li><FaDocker /> <strong>Projetos em Docker:</strong> Ambientes containerizados para aplicações web e automação.</li>
        </ul>
      </section>

    </div>
  );
}

export default App;
