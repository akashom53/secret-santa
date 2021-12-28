import './App.css';
import CustomLoader from './core/loader/ui/CustomLoader';
import HomeScreen from './home/ui/HomeScreen';
import LoginScreen from "./login/ui/LoginScreen";
import { useSelector } from 'react-redux'
import axios from 'axios'
import CacheBuster from 'react-cache-buster';
import packageInfo from '../package.json';
import LogComponent from './core/debugLog/ui/LogComponent';

const App = () => {
  const login = useSelector(state => state.login)

  // axios.defaults.baseURL = 'https://floating-retreat-13780.herokuapp.com'
  // axios.defaults.baseURL = 'http://192.168.1.5:8000'
  axios.defaults.baseURL = 'https://api.akashsrivastava.dev'
  const isProduction = process.env.NODE_ENV === 'production';
  return (
    <CacheBuster
      currentVersion={packageInfo.version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, th
      onCacheClear={() => {
        localStorage.setItem('reduxState', "{}")
      }}
    >
      <>
      <LogComponent></LogComponent>
        {login.token ? <HomeScreen /> : <LoginScreen />}
        <CustomLoader />
      </>

    </CacheBuster >
  );
}

export default App;
