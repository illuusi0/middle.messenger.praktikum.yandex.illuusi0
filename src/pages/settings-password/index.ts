import '../../styles/main.css';
import { SettingsPasswordPage } from './SettingsPasswordPage';

const app = document.querySelector('#app');
if (app) {
  const page = new SettingsPasswordPage();
  app.innerHTML = '';
  const content = page.getContent();
  if (content) {
    app.appendChild(content);
    page.dispatchComponentDidMount();
  }
}

