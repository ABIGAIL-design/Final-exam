import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import LoginSvg from "../../assets/undraw_secure_login_pdn4.svg";

const LoginSignModal = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <section className="w-full my-[70px] flex items-center justify-center">
      <main className="grid md:grid-cols-2  grid-cols-1 space-y-10  justify-center md:space-y-0 border-3 rounded-md items-center px-5 py-15 lg:h-auto md:h-[500px] md:w-[100%] lg:w-[800%] w-[100%] ml-80">
        <div>
          <div>
            <h2 className="mt-8 text-center md:text-3xl text-2xl font-bold tracking-tight text-foreground">
              {isLogin ? "Sign in" : "Create new account"}
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Or
              <button
                type="button"
                className="font-bold pl-3 outline-none"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "sign up" : "sign in"}
              </button>
            </p>
          </div>
          <div>
            {isLogin && <Login />}
            {!isLogin && <Signup />}
          </div>
        </div>

        
      </main>
    </section>
  );
};

export default LoginSignModal;
