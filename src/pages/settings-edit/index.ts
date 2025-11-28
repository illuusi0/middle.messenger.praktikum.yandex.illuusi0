import '../../styles/main.css';
import { SettingsEditPage } from './SettingsEditPage';

const app = document.querySelector('#app');
if (app) {
  const page = new SettingsEditPage();
  app.innerHTML = '';
  const content = page.getContent();
  if (content) {
    app.appendChild(content);
    page.dispatchComponentDidMount();
  }
}

