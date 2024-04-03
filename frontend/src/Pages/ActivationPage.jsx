import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {    //A useEffect hook is created that is triggered when the activation token changes.
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activation`, {   //post request to an activation end point on the server using axios lib is made
            activation_token,
          })
          .then((res) => {
            console.log(res);   //if the activation is successful you log the response and if theres an error you set an error state to true
          })
          .catch((err) => {
            setError(true);
          });
      };
      sendRequest();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default ActivationPage;