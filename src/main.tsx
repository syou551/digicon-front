import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AmplifyProvider } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <AmplifyProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AmplifyProvider>,
)
