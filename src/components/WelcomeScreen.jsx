import './WelcomeScreen.css';
import logo from '../assets/logo.jpg';

const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <img src={logo} alt="Bright logo" className="welcome-logo" />
    </div>
  );
};

export default WelcomeScreen;
