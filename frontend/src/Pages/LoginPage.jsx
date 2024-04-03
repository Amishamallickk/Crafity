import React from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Login from "../Components/LoginPage/Login";

const LoginPage = () => {
  // const navigate = useNavigate();
  // const { isAuthenticated } = useSelector((state) => state.user);

  // useEffect(() => {
  //   if(isAuthenticated === true){
  //     navigate("/");
  //   }
  // }, [isAuthenticated,navigate])

  return (
    <div>
        <Login />
    </div>
  )
}

export default LoginPage;