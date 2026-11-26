import { useState } from "react";
import {
  Activity, ArrowDownRight, ArrowRight, ArrowUpRight, Bell, ChevronDown,
  ChevronLeft, ChevronRight, CircleHelp, ClipboardList, Clock3, Command,
  CreditCard, LayoutDashboard, LifeBuoy, Menu, Package, Plus, Search,
  Settings2, ShieldCheck, ShoppingBag, Sparkles, Store, Users, Wallet,
  X, Zap, LockKeyhole
} from "lucide-react";

type Section = "Visão geral" | "Aplicativos" | "Empresas" | "Pedidos" | "Produtos" | "Clientes" | "Planos" | "Configurações";
const nav: { label: Section; icon: typeof LayoutDashboard; group: string }[] = [
  { label: "Visão geral", icon: LayoutDashboard, group: "PLATAFORMA" },
  { label: "Aplicativos", icon: Command, group: "PLATAFORMA" },
  { label: "Empresas", icon: Store, group: "PLATAFORMA" },
  { label: "Pedidos", icon: ClipboardList, group: "OPERAÇÃO" },
  { label: "Produtos", icon: Package, group: "OPERAÇÃO" },
  { label: "Clientes", icon: Users, group: "OPERAÇÃO" },
  { label: "Planos", icon: CreditCard, group: "GESTÃO" },
  { label: "Configurações", icon: Settings2, group: "GESTÃO" }
];

const stats = [
  { label: "Aplicativos ativos", value: "08", delta: "+2 este mês", up: true, icon: Command, tone: "lavender" },
  { label: "Empresas", value: "12", delta: "+3 este mês", up: true, icon: Store, tone: "peach" },
  { label: "Pedidos hoje", value: "284", delta: "+12,8%", up: true, icon: ShoppingBag, tone: "mint" },
  { label: "Volume de vendas", value: "R$ 8.420", delta: "+8,4%", up: true, icon: Wallet, tone: "blue" }
];

const activity = [
  { title: "Farmácia Boa Vida", detail: "Novo aplicativo criado", time: "Há 12 min", icon: Plus, color: "peach" },
  { title: "Pizzaria da Praça", detail: "Personalização atualizada", time: "Há 38 min", icon: Sparkles, color: "lavender" },
  { title: "Empório São José", detail: "Plano atualizado para Pro", time: "Há 1 h", icon: ArrowUpRight, color: "mint" },
  { title: "Drogaria Central", detail: "Novo pedido recebido", time: "Há 2 h", icon: ShoppingBag, color: "blue" }
];

function Brand() {
  return <div className="brand-lockup"><div className="brand-mark"><span>d</span></div><div><strong>dova</strong><small>SEU NEGÓCIO, DO SEU JEITO</small></div></div>;
}

export default function App() {
  const [section, setSection] = useState<Section>("Visão geral");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notice, setNotice] = useState(false);
  const [search, setSearch] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginNotice, setLoginNotice] = useState("");

  if (!showDashboard) return <main className="entry-page">
    <header className="entry-header">
      <Brand />
      <nav className="entry-nav"><a href="#como-funciona">Como funciona</a><a href="#para-quem">Para quem</a><a href="#sobre">Sobre a DOVA</a></nav>
      <button className="entry-header-button" onClick={() => document.getElementById("login-email")?.focus()}>Acessar minha conta <ArrowUpRight size={15}/></button>
    </header>
    <section className="entry-hero">
      <div className="entry-copy">
        <div className="entry-kicker"><span className="live-dot"/> TECNOLOGIA QUE APROXIMA</div>
        <h1>Seu negócio merece<br/><em>um app só dele.</em></h1>
        <p className="entry-lead">Sua marca, seus produtos, seus clientes. Uma experiência digital feita para o jeito que sua empresa trabalha.</p>
        <div className="entry-actions"><button className="entry-primary" onClick={() => document.getElementById("login-email")?.focus()}>Começar agora <ArrowRight size={17}/></button><a href="#como-funciona">Conheça a DOVA <span>↓</span></a></div>
        <div className="entry-proof"><div className="proof-avatars"><span>F</span><span>P</span><span>D</span></div><span>Uma plataforma. Muitas possibilidades.<br/><strong>Cada empresa no seu próprio espaço.</strong></span></div>
      </div>
      <div className="entry-visual" aria-label="Exemplos ilustrativos de aplicativos de empresas">
        <div className="visual-orbit orbit-one"></div><div className="visual-orbit orbit-two"></div>
        <div className="visual-note"><span className="note-spark">✳</span><div><strong>Feito para sua marca</strong><small>Do primeiro toque ao pedido.</small></div></div>
        <div className="phone-card">
          <div className="phone-top"><span></span><span></span><span></span></div>
          <div className="phone-brand"><div className="mini-store-mark">b</div><div><strong>boa vida</strong><small>FARMÁCIA</small></div><span className="phone-menu">•••</span></div>
          <div className="phone-banner"><small>CUIDAR FAZ BEM</small><strong>Seu cuidado,<br/>mais perto.</strong><span>Ofertas da semana</span></div>
          <div className="phone-section"><strong>O que você procura?</strong><span>Ver tudo</span></div>
          <div className="phone-categories"><div><span>✚</span><small>Saúde</small></div><div><span>♡</span><small>Cuidados</small></div><div><span>☼</span><small>Beleza</small></div></div>
          <div className="phone-section products-title"><strong>Mais procurados</strong><span>Ver todos</span></div>
          <div className="phone-products"><div className="product-illustration product-one">◒</div><div><strong>Kit cuidado diário</strong><small>R$ 39,90</small></div><b>+</b></div>
          <div className="phone-bottom"><span>⌂<small>Início</small></span><span>⌕<small>Buscar</small></span><span>♡<small>Favoritos</small></span><span>▢<small>Pedidos</small></span></div>
        </div>
        <div className="floating-brand brand-pizza"><span>✳</span><div><strong>pizzaria</strong><small>Seu app, sua identidade</small></div></div>
        <div className="floating-brand brand-market"><span>⌂</span><div><strong>mercadinho</strong><small>Do seu jeito</small></div></div>
        <div className="visual-caption">EXEMPLO ILUSTRATIVO DE UMA LOJA NA DOVA</div>
      </div>
    </section>
    <section className="entry-bottom" id="como-funciona">
      <div className="entry-bottom-copy"><span className="eyebrow">SIMPLES ASSIM</span><h2>O espaço é seu.<br/>A tecnologia é nossa.</h2><p>A DOVA oferece a estrutura para sua empresa vender e atender pelo próprio aplicativo — sem dividir a vitrine com concorrentes.</p></div>
      <form className="login-card" onSubmit={e => { e.preventDefault(); setLoginNotice("A entrada segura será ativada quando conectarmos a autenticação. Por enquanto, você pode conhecer o painel demonstrativo."); }}>
        <div className="login-card-heading"><div className="login-lock"><LockKeyhole size={18}/></div><div><span className="eyebrow">ÁREA DO CLIENTE</span><h2>Que bom ter você aqui.</h2><p>Entre para administrar seu negócio.</p></div></div>
        <label htmlFor="login-email">E-mail</label><input id="login-email" type="email" placeholder="voce@empresa.com.br" value={email} onChange={e => setEmail(e.target.value)} required/>
        <div className="password-label"><label htmlFor="login-password">Senha</label><a href="#sobre">Esqueceu?</a></div><input id="login-password" type="password" placeholder="Sua senha" value={password} onChange={e => setPassword(e.target.value)} required/>
        <button className="login-submit" type="submit">Entrar na minha conta <ArrowRight size={16}/></button>
        {loginNotice && <p className="login-notice" role="status">{loginNotice}</p>}
        <div className="login-divider"><span>ou</span></div><button type="button" className="demo-entry" onClick={() => setShowDashboard(true)}>Conhecer painel demonstrativo <ArrowUpRight size={15}/></button>
        <p className="login-security"><ShieldCheck size={14}/> Seus dados e os da sua empresa, sempre separados.</p>
      </form>
    </section>
    <footer className="entry-footer" id="sobre"><Brand/><span>© 2026 DOVA Tecnologia. Cada negócio, do seu jeito.</span><a href="https://github.com/lost1911/DOVA" target="_blank" rel="noreferrer">Projeto no GitHub <ArrowUpRight size={13}/></a></footer>
  </main>;

  return <div className="app-shell">
    {sidebarOpen && <button className="scrim" aria-label="Fechar menu" onClick={() => setSidebarOpen(false)} />}
    <aside className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
      <div className="sidebar-top"><Brand /><button className="icon-button mobile-close" onClick={() => setSidebarOpen(false)}><X size={19}/></button></div>
      <div className="workspace-switch"><div className="workspace-avatar">D</div><div className="workspace-copy"><strong>Central DOVA</strong><span>Administração geral</span></div><ChevronDown size={16}/></div>
      <nav className="side-nav">
        {["PLATAFORMA", "OPERAÇÃO", "GESTÃO"].map(group => <div className="nav-group" key={group}><p>{group}</p>{nav.filter(item => item.group === group).map(item => { const Icon = item.icon; return <button key={item.label} className={`nav-link ${section === item.label ? "active" : ""}`} onClick={() => { setSection(item.label); setSidebarOpen(false); }}><Icon size={18}/><span>{item.label}</span>{item.label === "Aplicativos" && <em>8</em>}</button>; })}</div>)}
      </nav>
      <div className="sidebar-bottom"><div className="help-card"><div className="help-icon"><LifeBuoy size={17}/></div><strong>Precisa de ajuda?</strong><span>Estamos por aqui quando precisar.</span><button onClick={() => setNotice(true)}>Acessar suporte <ArrowRight size={14}/></button></div><div className="profile-row"><div className="profile-avatar">CS</div><div className="profile-copy"><strong>Administrador</strong><span>Conta principal</span></div><button className="icon-button"><Settings2 size={17}/></button></div></div>
    </aside>

    <main className="main-area">
      <header className="topbar"><div className="topbar-left"><button className="icon-button menu-toggle" onClick={() => setSidebarOpen(true)}><Menu size={20}/></button><span className="breadcrumb">Central DOVA</span><ChevronRight size={15}/><strong>{section}</strong></div><div className="topbar-actions"><div className="search-box"><Search size={16}/><input placeholder="Buscar..." value={search} onChange={e => setSearch(e.target.value)}/><kbd>⌘ K</kbd></div><button className="icon-button notification-button" onClick={() => setNotice(!notice)} aria-label="Notificações"><Bell size={18}/><i/></button><div className="topbar-avatar">CS</div></div></header>
      {notice && <div className="toast"><Bell size={16}/> Área demonstrativa: notificações e suporte serão conectados nas próximas etapas.<button onClick={() => setNotice(false)}><X size={14}/></button></div>}
      <div className="page-content">
        <div className="page-heading"><div><div className="eyebrow"><span className="live-dot"/> CENTRAL DE CONTROLE</div><h1>{section === "Visão geral" ? "Bom dia. Vamos nessa?" : section}</h1><p>{section === "Visão geral" ? "Aqui está um resumo do que está acontecendo na sua plataforma." : `A área de ${section.toLowerCase()} da sua plataforma DOVA.`}</p></div><button className="primary-button" onClick={() => setSection("Aplicativos")}><Plus size={17}/> Criar aplicativo</button></div>
        {section === "Visão geral" ? <>
          <div className="welcome-strip"><div className="welcome-symbol"><Sparkles size={21}/></div><div><strong>Seu ecossistema, em um só lugar.</strong><span>A DOVA cuida da tecnologia. Cada empresa tem seu próprio app, sua marca e seus clientes.</span></div><button onClick={() => setSection("Aplicativos")}>Conhecer aplicativos <ArrowRight size={15}/></button></div>
          <div className="section-title"><div><h2>Visão da plataforma</h2><p>Números de demonstração para apresentar a estrutura.</p></div><span className="period-chip"><Clock3 size={14}/> Hoje <ChevronDown size={14}/></span></div>
          <div className="stats-grid">{stats.map(s => { const Icon = s.icon; return <article className="stat-card" key={s.label}><div className="stat-top"><span>{s.label}</span><div className={`stat-icon ${s.tone}`}><Icon size={18}/></div></div><strong className="stat-value">{s.value}</strong><div className="stat-foot"><span className="trend"><ArrowUpRight size={14}/>{s.delta}</span><span>vs. período anterior</span></div></article>; })}</div>
          <div className="content-grid"><section className="panel activity-panel"><div className="panel-heading"><div><h2>Atividade recente</h2><p>O que está acontecendo nos aplicativos.</p></div><button className="text-button" onClick={() => setSection("Empresas")}>Ver empresas <ArrowRight size={15}/></button></div><div className="activity-list">{activity.map(a => { const Icon = a.icon; return <div className="activity-item" key={a.title}><div className={`activity-icon ${a.color}`}><Icon size={17}/></div><div className="activity-copy"><strong>{a.title}</strong><span>{a.detail}</span></div><time>{a.time}</time></div>; })}</div></section>
          <section className="panel quick-panel"><div className="panel-heading"><div><h2>Comece por aqui</h2><p>Atalhos para organizar sua operação.</p></div><div className="quick-spark"><Zap size={17}/></div></div><button className="quick-action" onClick={() => setSection("Aplicativos")}><div className="quick-icon lavender"><Command size={18}/></div><div><strong>Criar um aplicativo</strong><span>Monte a experiência de uma empresa.</span></div><ArrowRight size={17}/></button><button className="quick-action" onClick={() => setSection("Empresas")}><div className="quick-icon peach"><Store size={18}/></div><div><strong>Cadastrar empresa</strong><span>Adicione um novo negócio à DOVA.</span></div><ArrowRight size={17}/></button><button className="quick-action" onClick={() => setSection("Planos")}><div className="quick-icon mint"><ShieldCheck size={18}/></div><div><strong>Configurar planos</strong><span>Organize os recursos e assinaturas.</span></div><ArrowRight size={17}/></button></section></div>
          <div className="bottom-note"><div className="note-icon"><Activity size={16}/></div><span><strong>Ambiente de demonstração.</strong> Os dados exibidos são fictícios e ainda não representam operações reais.</span><button onClick={() => setSection("Configurações")}>Saiba mais <ArrowRight size={14}/></button></div>
        </> : <section className="panel placeholder-panel"><div className="placeholder-art"><Command size={28}/></div><span className="eyebrow">ESTRUTURA INICIAL</span><h2>{section}</h2><p>Esta área já faz parte da navegação da DOVA. A estrutura visual e as funcionalidades específicas serão desenvolvidas nesta etapa do projeto.</p><button className="secondary-button" onClick={() => setSection("Visão geral")}><ChevronLeft size={16}/> Voltar à visão geral</button></section>}
        <footer className="page-footer"><span>© 2026 DOVA Tecnologia</span><span><span className="footer-dot"/> Todos os sistemas operacionais</span><a href="https://github.com/lost1911/DOVA" target="_blank" rel="noreferrer">Projeto no GitHub <ArrowUpRight size={13}/></a></footer>
      </div>
    </main>
  </div>;
}