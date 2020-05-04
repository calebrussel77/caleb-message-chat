import React from "react";
import Logo from "../../assets/images/Logo.png";
import ImgAuth from "../../assets/images/img-auth.svg";
import { Link } from "react-router-dom";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const Login = () => {
  return (
    <div className="flex justify-between h-auto bg-white absolute inset-0">
      <div className="md:w-1/2 hidden md:block pt-8 text-center">
        <div className="pb-16 cursor-pointer pl-8">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-6" />
          </Link>
        </div>
        <img src={ImgAuth} className="block mx-auto" alt="men with messages" />
        <p className="px-3 my-20 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
          alias asperiores aspernatur atque delectus dolorum eaque eos incidunt
          ipsam ipsum, maiores molestiae nemo nisi officia quia repudiandae,
          tempora temporibus?
        </p>
      </div>
      <div className="border-l bg-indigo-150 md:w-1/2 w-full pt-8">
        <p className="text-xs font-semibold mb-10 text-right pr-6">
          Pas encore membre ?{" "}
          <Link
            to="/register"
            className="text-indigo-700 hover:underline cursor-pointer"
          >
            créer votre Compte
          </Link>
        </p>
        <div className="mx-auto max-w-md md:mx-0 px-2 sm:px-4 lg:mx-20">
          <h2 className="font-bold text-gray-900 text-2xl border-b-4 border-indigo-700 mx-auto mb-10 pb-2">
            Se Connecter sur{" "}
            <span className="text-indigo-700 font-bold">CalebChat</span>
          </h2>
          <form className="bg-white px-6 py-16 max-w-md w-full shadow-md">
            <Input
              type="email"
              label="Adresse E-mail "
              className="bg-gray-200 py-1 px-1 w-full mb-2 rounded-md mt-2 border focus:outline-none focus:border-indigo-700 "
            />
            <Input
              type="password"
              label="Mot de passe "
              className="bg-gray-200 py-1 px-1 w-full rounded-md mt-2 border focus:outline-none focus:border-indigo-700"
            />
            <div className="text-center mt-6">
              <Button
                type="submit"
                className="hover:bg-indigo-800 bg-indigo-700 text-white font-bold px-2 py-1 rounded-md inline-block shadow-md"
              >
                Se Connecter
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
