import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { Provider as AuthProvider } from "next-auth/client"
const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      {/* authentication state can be used b the whole next auth  */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  )
}

export default MyApp
