import { Router } from "./router.js";

const router = new Router();

router.add("/", "./pages/vazio.html");
router.add("/home", "./pages/home.html");
router.add("/universe", "./pages/universe.html");
router.add("/exploration", "./pages/explorer.html");
router.add(404, "./pages/404.html");

const activeRout = document.querySelectorAll("nav a");
activeRout.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    router.togglePage();
  });
});

const activeRoutImg = document.getElementById("logo");

activeRoutImg.addEventListener("click", (event) => {
  event.preventDefault();
  window.history.pushState({}, "", event.target.getAttribute("href"));
  router.togglePage();
});

router.togglePage();

window.onpopstate = () => router.togglePage();
window.route = () => router.callRoute();
