import '../../styles/main.css';
import { SettingsPage } from './SettingsPage';

const app = document.querySelector('#app');
if (app) {
  const page = new SettingsPage();
  app.innerHTML = '';
  const content = page.getContent();
  if (content) {
    app.appendChild(content);
    page.dispatchComponentDidMount();
  }
}

