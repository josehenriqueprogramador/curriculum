import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDatabase, FaDocker, FaCode } from "react-icons/fa";

function App() {
  return (
    <div id="portfolio-clean" style={{ 
      backgroundColor: '#ffffff', 
      color: '#1a1a1a', 
      padding: '25px 20px', 
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      lineHeight: '1.5',
      minHeight: '100vh'
    }}>
      
      {/* Cabeçalho / Contato */}
      <header style={{ borderBottom: '3px solid #0056b3', paddingBottom: '15px', marginBottom: '25px' }}>
        <h1 style={{ fontSize: '26px', color: '#0056b3', margin: '0 0 5px 0', fontWeight: '800', letterSpacing: '-0.5px' }}>
          JOSÉ HENRIQUE PALMEIRA JARDIM
        </h1>
        <p style={{ fontWeight: '600', fontSize: '15px', color: '#495057', margin: '0 0 15px 0' }}>
          Candidato à Área de Tecnologia | Ciência de Dados | TechOps
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', fontSize: '14px', color: '#343a40' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaMapMarkerAlt style={{ color: '#0056b3' }} /> Rio de Janeiro - RJ</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaPhone style={{ color: '#0056b3' }} /> (21) 97568-2548</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaEnvelope style={{ color: '#0056b3' }} /> josehenriqueprogramador@gmail.com</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaLinkedin style={{ color: '#0056b3' }} /> linkedin.com/in/jose-jardim-764143247</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaGithub style={{ color: '#0056b3' }} /> github.com/josehenriqueprogramador</div>
        </div>
      </header>

      {/* Resumo Profissional */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#0056b3', fontSize: '18px', fontWeight: '700', borderBottom: '1px solid #dee2e6', paddingBottom: '5px', margin: '0 0 10px 0' }}>
          RESUMO PROFISSIONAL
        </h2>
        <p style={{ fontSize: '14.5px', color: '#212529', margin: '0', textAlign: 'justify' }}>
          Atualmente atuando como motorista operacional na Beep Saúde, com experiência em rotinas operacionais, atendimento e cumprimento de protocolos. Em transição de carreira para a área de Tecnologia, desenvolvendo conhecimentos em Ciência de Dados, automação, Python, Docker e desenvolvimento de sistemas. Possuo experiência prática em projetos pessoais de tecnologia, automação de tarefas e desenvolvimento de soluções voltadas à otimização de processos.
        </p>
      </section>

      {/* Formação Acadêmica */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#0056b3', fontSize: '18px', fontWeight: '700', borderBottom: '1px solid #dee2e6', paddingBottom: '5px', margin: '0 0 10px 0' }}>
          FORMAÇÃO ACADÊMICA
        </h2>
        <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14.5px', color: '#212529' }}>
          <li style={{ marginBottom: '5px' }}><strong style={{ color: '#000' }}>Bacharelado em Ciência de Dados</strong> - Unigranrio (Início em 2026)</li>
          <li><strong style={{ color: '#000' }}>Análise e Desenvolvimento de Sistemas</strong> - Estácio (Incompleto)</li>
        </ul>
      </section>

      {/* Habilidades Técnicas */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#0056b3', fontSize: '18px', fontWeight: '700', borderBottom: '1px solid #dee2e6', paddingBottom: '5px', margin: '0 0 10px 0' }}>
          HABILIDADES TÉCNICAS
        </h2>
        <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14.5px', color: '#212529', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <li><strong style={{ color: '#000' }}>Programação:</strong> Python, PHP e JavaScript.</li>
          <li><strong style={{ color: '#000' }}>Automação:</strong> Scripts de automação, APIs e Flask.</li>
          <li><strong style={{ color: '#000' }}>Infraestrutura:</strong> Docker, containers, Kubernetes e deploy em nuvem.</li>
          <li><strong style={{ color: '#000' }}>Suporte e Operações:</strong> Análise de logs, documentação técnica e suporte básico a usuários.</li>
          <li><strong style={{ color: '#000' }}>Outros:</strong> Inglês intermediário e análise de indicadores.</li>
        </ul>
      </section>

      {/* Experiência Profissional */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#0056b3', fontSize: '18px', fontWeight: '700', borderBottom: '1px solid #dee2e6', paddingBottom: '5px', margin: '0 0 15px 0' }}>
          EXPERIÊNCIA PROFISSIONAL
        </h2>
        
        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '5px' }}>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#000' }}>Beep Saúde</span>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#495057' }}>2026 - Atual</span>
          </div>
          <div style={{ fontSize: '14px', italic: 'true', color: '#495057', marginBottom: '5px', fontStyle: 'italic' }}>Motorista Operacional</div>
          <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14px', color: '#212529', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <li>Responsável pelo transporte seguro e cumprimento de rotas operacionais.</li>
            <li>Atuação seguindo protocolos rigorosos de qualidade e atendimento.</li>
            <li>Experiência com rotinas operacionais e resolução de situações do dia a dia.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '5px' }}>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#000' }}>Corretor de Imóveis</span>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#495057' }}>2007 - Atual</span>
          </div>
          <div style={{ fontSize: '14px', color: '#495057', marginBottom: '5px', fontStyle: 'italic' }}>Atuação Intercalada</div>
          <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14px', color: '#212529' }}>
            <li>Atuação em negociação, captação e atendimento de clientes.</li>
          </ul>
        </div>

        <div style={{ marginBottom: '18px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '5px' }}>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#000' }}>Ametista Imóveis LTDA</span>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#495057' }}>2014 - 2015</span>
          </div>
          <div style={{ fontSize: '14px', color: '#495057', marginBottom: '5px', fontStyle: 'italic' }}>Programador Web</div>
          <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14px', color: '#212529' }}>
            <li>Desenvolvimento e manutenção de sites institucionais e sistemas web utilizando PHP e JavaScript.</li>
          </ul>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section style={{ marginBottom: '15px' }}>
        <h2 style={{ color: '#0056b3', fontSize: '18px', fontWeight: '700', borderBottom: '1px solid #dee2e6', paddingBottom: '5px', margin: '0 0 10px 0' }}>
          PROJETOS EM DESTAQUE
        </h2>
        <ul style={{ paddingLeft: '20px', margin: '0', fontSize: '14px', color: '#212529', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><FaCode style={{ color: '#0056b3', marginRight: '5px' }} /> <strong style={{ color: '#000' }}>Tech Ops Toolbox:</strong> Scripts para automação de backups, monitoramento de serviços e análise de logs.</li>
          <li><FaDatabase style={{ color: '#0056b3', marginRight: '5px' }} /> <strong style={{ color: '#000' }}>FiboPay PRO:</strong> Simulador de pagamentos com lógica matemática e documentação técnica.</li>
          <li><FaDocker style={{ color: '#0056b3', marginRight: '5px' }} /> <strong style={{ color: '#000' }}>Projetos em Docker:</strong> Ambientes containerizados para aplicações web e automação.</li>
        </ul>
      </section>

    </div>
  );
}

export default App;
