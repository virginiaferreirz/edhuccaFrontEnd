import logo from "../../../public/logo.png"

const Login = () => {
  return (
    <div className="h-screen flex">
      <div className="w-1/2 bg-gradient-to-r from-blue-300 via-green-300 to-green-400"></div> 
      <div className="w-1/2 bg-white">
        <div className="w-48 w bg-white flex items-center justify-center">
                <img className="bg-white" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;