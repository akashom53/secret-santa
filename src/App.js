import './App.css';
import CustomLoader from './core/loader/ui/CustomLoader';
import HomeScreen from './home/ui/HomeScreen';
import LoginScreen from "./login/ui/LoginScreen";
import { useSelector } from 'react-redux'
import axios from 'axios'

const App = () => {
  const login = useSelector(state => state.login)

  // axios.defaults.baseURL = 'https://floating-retreat-13780.herokuapp.com'
  // axios.defaults.baseURL = 'http://localhost:8000'
  axios.defaults.baseURL = 'http://128.199.29.104'

  return (
    <>
      {login.token ? <HomeScreen /> : <LoginScreen />}
      <CustomLoader />
    </>
  );
}

export default App;
