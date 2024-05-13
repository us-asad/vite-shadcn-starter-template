import ReactDOM from 'react-dom/client'
import {App} from './app'
import 'react-multi-carousel/lib/styles.css'
import '@/styles/index.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store'
import {Toaster} from './components/ui/toaster'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Toaster />
  </Provider>,
)
