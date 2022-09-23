import state from '../Constants'

function Projects() {
  return (
    <div className="flex flex-col ">
      {state.projects.map((project, index) => {
        return (
          <div className='border-black border-t-2' key={index}>
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
    </div>
  );
}
export default Projects;
