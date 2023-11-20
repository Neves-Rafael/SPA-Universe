export class Router {
  routes = {};

  add(routName, linkPage) {
    this.routes[routName] = linkPage;
  }

  callRoute() {
    this.togglePage();
  }

  togglePage() {
    const { pathname } = window.location;
    const captureRoute = this.routes[pathname] || this.routes[404];

    console.log(pathname);

    fetch(captureRoute)
      .then((data) => data.text())
      .then((html) => {
        document.getElementById("app").innerHTML = html;
      });
  }
}
