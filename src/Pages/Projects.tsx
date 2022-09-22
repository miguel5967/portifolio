function Projects() {
  const imageProject= [
   "./image/Infocasa_Logo.png",
    //pt-pt
    //Infocasa é um projeto de estatistica e pesquisa dedicado para o ramo imobiliário. Podendo procurar casas em todos os portais de portugal, fazer uma análise de mercado, podendo ver preço médio, preço médio por metro quadrado de qualquer tipo de imóvel, acompanhamento de mercado, posibilidade de criar alertas avisando o utilizador, diversos relatórios de mercado, comparação de preço, evolução de preço, etc.
  ];

  const descriptionProject = [
    "Infocasa is a statistics and research project dedicated to the real estate industry. You can search for houses on all portals in Portugal, do a market analysis, see the average price, average price per square meter of any type of property, market monitoring, create alerts to notify the user, various market reports, price comparison, price evolution, etc.",
  ];

  return (
    <div className="flex flex-row ml-56 mt-20">
      {imageProject.map((value, index) => (
        <div key={index} className="w-56">
          <ul >
            <li>
              <img className="rounded-2xl" src={value} />
            </li>
          </ul>
        </div>
      ))}

      {descriptionProject.map((value, index) => (
        <div key={index} className="max-w-2xl mt-12 ml-7">
          <p  className="">{value}</p>
        </div>
      ))}
    </div>
  );
}
export default Projects;
