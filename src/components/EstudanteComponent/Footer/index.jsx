import logo from '../../../public/logo.png'

const Footer = () => {
  return (
<footer className="text-gray-900 border-t-2 px-4 py-2 ">
  <div className="container px-5 py-2 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
    <div className="w-60 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <div className="flex w-32 items-center">
                <img src={logo} alt="" />
        </div>
      </a>  
  </div>
    <div className=" flex md:pr-20 -mb-10 md:text-left text-center order-first text-xs">
        <div className="lg:w-1/2 md:w-1 w-full px-8">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">QUEM SOMOS?</h2>
            <nav className="mb-10">
                <li>
                    <a   href='http://www.edhucca.org.br/' target="_blank" rel="noreferrer">Página Institucional</a>
                </li>
                <li className="list-none">
                    <p>(43) 99924-5959</p>
                </li>
                <li className="list-none">
                    <p>Rua Dr. Oswaldo Cruz, 285 - Centro, Apucarana</p>
                </li>
            </nav>
        </div>
        <div className="w-full px-2 text-xs">
            <p> No Portal Oportunidade - EDHUCCA, candidatos podem explorar uma variedade de vagas atualizadas regularmente, personalizar perfis profissionais, e se candidatar a oportunidades que correspondam às suas habilidades e ambições.</p>

            <p>Para empregadores, proporcionamos uma solução eficaz para atrair e encontrar os melhores talentos do mercado. Com ferramentas avançadas de busca e filtragem, tornamos o processo de recrutamento mais rápido e preciso.</p>
        </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto left-60 flex flex-wrap flex-col sm:flex-row">
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500" href='https://www.facebook.com/edhuccaapucarana/?locale=pt_BR' target="_blank" rel="noreferrer">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500" href='https://www.instagram.com/edhucca/' target="_blank" rel="noreferrer">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
      </span>
    </div>
    <p className="text-gray-500 text-center sm:text-left text-xs px-12">© 2024 EDHUCCA - Direitos preservados </p>
  </div>
</footer>
  )
}

export default Footer
