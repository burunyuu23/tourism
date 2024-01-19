import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons'

import App from "@/app/App";

library.add(faVk, faTelegram);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);
