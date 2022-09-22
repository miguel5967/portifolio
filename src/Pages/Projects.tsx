function Projects() {
  const Projects = {
    infocasaLogo: "./image/Infocasa_Logo_nobg.png",
    infocasaDescripton:
      "Infocasa is a statistics and research project dedicated to the real estate industry. You can search for houses on all portals in Portugal, do a market analysis, see the average price, average price per square meter of any type of property, market monitoring, create alerts to notify the user, various market reports, price comparison, price evolution, etc.",
    //pt-pt
    //Infocasa é um projeto de estatistica e pesquisa dedicado para o ramo imobiliário. Podendo procurar casas em todos os portais de portugal, fazer uma análise de mercado, podendo ver preço médio, preço médio por metro quadrado de qualquer tipo de imóvel, acompanhamento de mercado, posibilidade de criar alertas avisando o utilizador, diversos relatórios de mercado, comparação de preço, evolução de preço, etc.
    gameDescripton:
      "The idea is making a game, i alreday found poeple to work with me on that but still very early development, still no images or description",
  };

  return (
    <div className="flex flex-col border-black border-b-2">
      <div>
        <h1>Description</h1>
      </div>

      <div className="flex ml-56 items-center h-32 mb-10">
        <div className="flex w-56">
          <a target="_blank" href="https://infocasa.pt">
            <img src={Projects.infocasaLogo} />
          </a>
        </div>

        <div className="flex max-w-2xl ml-7">
          <p className="">{Projects.infocasaDescripton}</p>
        </div>
      </div>

      {/* ------------------- */}
      <div className="border-black border-t-2">
        <div className="self-center">
          <h1>Future Project</h1>
        </div>

        <div className="flex ml-56 items-center h-32 mb-10">
          <div className="flex w-56">
            {/* <a target="_blank" href="https://infocasa.pt">
              <img alt="Infocasa Logo" src={Projects.infocasaLogo} />
            </a> */}
          </div>

          <div className="flex max-w-2xl ml-7">
            <p className="">{Projects.gameDescripton}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
