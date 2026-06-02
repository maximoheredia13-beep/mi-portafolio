function Projects() {
  return (
    <div>

      <h2 className="mb-4">
        Mis Proyectos
      </h2>

      <div className="row">

        <div className="col-md-6 mb-4">
          <div className="card shadow p-3 h-100">

            <h4>Parcial de Laboratorio</h4>

            <p>
              Aplicación creada utilizando React,
              hooks, props y fetch.
            </p>

          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow p-3 h-100">

            <h4>Curriculum vitae</h4>

            <p>
              Sitio desarrollado con React Router
              y Bootstrap.
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Projects;