import { Provider } from "react-redux"
import { PersistGate } from "reduxjs-toolkit-persist/integration/react"
import { persistor, store } from "./Redux/Store"
import AppRoute from "./Routes/AppRoute"
import './Style/index.css'
import './Style/index.scss'
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRoute />
      </PersistGate>
    </Provider>
  )
}

export default App
