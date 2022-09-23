import state from '../Constants'

function Projects() {
  return (
    <div className="flex flex-col border-black border-b-2">
      {state.projects.map((project, index) => {
        return (
          <div key={index}>
            <div>
              <h1>Description</h1>
            </div>

            <div className="flex justify-center items-center h-32 mb-10">
              <div className="flex w-56">
                <a target="_blank" href="https://infocasa.pt">
                  <img src={project.logo} />
                </a>
              </div>

              <div className="flex max-w-2xl ml-7">
                <p>{project.descripton}</p>
              </div>
            </div>
          </div>
        );
      })}

      {/* ------------------- */}
      {/* <div className="border-black border-t-2">
        <div className="self-center">
          <h1>Future Project</h1>
        </div>

        <div className="flex justify-center items-center h-32 mb-10">
          <div className="flex w-56">
            <a target="_blank" href="https://infocasa.pt">
              <img alt="Infocasa Logo" src={Projects.infocasaLogo} />
            </a>
          </div>

          <div className="flex max-w-2xl ml-7">
            <p className="">{Projects.Game.gameDescripton}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Projects;
