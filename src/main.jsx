import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


createRoot(document.getElementById('root')).render(
  <Auth0Provider
      domain="dev-t66siofcybz35uvi.us.auth0.com"
      clientId="OSr7KfvoQ1iIZuLfqTVbLQVvUhPspoEY"
      authorizationParams={{
        audience: "https://dev-t66siofcybz35uvi.us.auth0.com/api/v2/",
        redirect_uri: window.location.origin
      }}
    >
    <App />
  </Auth0Provider>,
)