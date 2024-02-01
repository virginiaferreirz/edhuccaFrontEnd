import './App.css'
import logo_edhucca from './assets/edhuc_log.png';
import trabalho_img from './assets/trabalho.png';


function App() {

  return (
    <>
      <header className="header">
        <img className="logo" src={logo_edhucca} width="170" />

        <nav className="navbar">
          <a href="#" className="active">Parceiros</a>
          <a href="#">Vagas</a>
          <a href="https://api.whatsapp.com/send?phone=554399245959&text=Ol%C3%A1,%20vim%20pelo%20Portal%20Oportunidade!%20Preciso%20de%20ajuda.">Contato</a>
          <a href="http://www.edhucca.org.br/">Quem somos?</a>
        </nav>
      </header>

      <section className="home">
        <div className="home-content">
          <h1>Portal Oportunidadade</h1>
          <h3>Vagas de estágio</h3>
          <p>
            O Portal Oportunidade do EDHUCCA é mais do que uma plataforma de vagas de estágio, é um ecossistema que une estudantes capacitados
            a oportunidades enriquecedoras de estágio na cidade de Apucarana e região (Paraná). Nossa missão é impulsionar o crescimento profissional dos jovens talentos e catalisar o desenvolvimento das empresas que estão ansiosas para moldar o futuro com mentes brilhantes.</p>
          <div className="btn-box">
            <a href="#">Empresas</a>
            <a href="#">Estudantes</a>
          </div>
        </div>

        <div className="img">
          <img src={trabalho_img} width="550" />
        </div>

        <div className="home-sci">
          <a href="https://www.facebook.com/edhuccaapucarana"><i className='bx bxl-facebook' ></i></a>
          <a href="https://www.instagram.com/explore/locations/1034485382/"><i className='bx bxl-instagram' ></i></a>
          <a href="https://www.google.com/maps/place/R.+Dr.+Oswaldo+Cruz,+285+-+Centro,+Apucarana+-+PR,+86800-720/@-23.5499174,-51.4634241,17z/data=!3m1!4b1!4m6!3m5!1s0x94ec99701188737f:0xd088e0978a8e493e!8m2!3d-23.5499174!4d-51.4634241!16s%2Fg%2F11csgfw0bz?entry=ttu"><i className='bx bxs-map' ></i></a>
        </div>
      </section>
    </>
  )
}

export default App
