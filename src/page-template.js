function renderManagers(employeeData) {
  const managerArr = employeeData.filter(e => e.role === 'Manager');
  return `
  <section class="my-3" id="managers">
    <h2 class="text-dark bg-primary p-2 display-inline-block">Managers</h2>
    <div class="flex-row justify-space-between">
    ${managerArr
      .map(({ name, id, email, role, office }) => {
        return `
        <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
          <h3 class="text-light">${name}</h3>
          <h5 class="employee-email">
          <p>Email
          <a href="mailto:${email}" class="btn mt-auto"><i class="fa-solid fa-envelope"></i></a>
          </p>
          </h5>
          <p>ID: ${id}</p>
          <p>${role}</p>
          <p>Office: ${office}<i class="fa-solid fa-door-open m-2"></i></p>
        </div>
      `;
      })
      .join('')}
    </div>
  </section>
    `;
  };
function renderEngineers(employeeData) {
    const engineerArr = employeeData.filter(e => e.role === 'Engineer');
    return `
    <section class="my-3" id="engineers">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Engineers</h2>
      <div class="flex-row justify-space-between">
      ${engineerArr
        .map(({ name, id, email, role, github }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="text-light">${name}</h3>
            <h5 class="employee-email">
            <p>Email
            <a href="mailto:${email}" class="btn mt-auto"><i class="fa-solid fa-envelope"></i></a>
            </p>
            </h5>
            <p>ID: ${id}</p>
            <p>${role}</p>
            <p><a id="github" href="https://github.com/${github}">Github</a><i class="fa-brands fa-github m-2"></i></p>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
    `;
  };
function renderInterns(employeeData) {
    const internArr = employeeData.filter(e => e.role === 'Intern');
    return `
    <section class="my-3" id="interns">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Interns</h2>
      <div class="flex-row justify-space-between">
      ${internArr
        .map(({ name, id, email, role, school }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="text-light">${name}</h3>
            <h5 class="employee-email">
            <p>Email
            <a href="mailto:${email}" class="btn mt-auto"><i class="fa-solid fa-envelope"></i></a>
            </p>
            </h5>
            <p>ID: ${id}</p>
            <p>${role}</p>
            <p>${school}<i class="fa-solid fa-graduation-cap m-2"></i></p>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
    `;
  };
  module.exports = employeeData => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Our Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Meet the Team!</h1>
      </div>
    </header>
    <main class="container my-5">
    ${renderManagers(employeeData)}
    ${renderEngineers(employeeData)}
    ${renderInterns(employeeData)}
    </main>
    <footer class="container text-center py-3">
    <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Example Company</h3>
    </footer>
  </body>
  </html>
        `;
  };