import '../../styles/main.css';
import { Error404Page } from './Error404Page';

const app = document.querySelector('#app');
if (app) {
  const page = new Error404Page();
  app.innerHTML = '';
  const content = page.getContent();
  if (content) {
    app.appendChild(content);
    page.dispatchComponentDidMount();
  }
}

