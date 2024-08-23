import React, { useState } from "react";
import HeroSvg from "../../assets/check.svg";
import { auth } from "../db.ts";
import ShortUrlOutput from "../ShortUrlOutput/ShortUrlOutput.tsx";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Showcase = () => {
  const [originalUrl, setOriginalUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  const handleShortUrl = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!auth.currentUser) {
      setLoading(false);
      return console.log("user not signin");
    }

    // const gottenToken = await auth.currentUser.getIdToken();

    const response = await fetch("https://api.tinyurl.com/create/", {
      method: "POST",
      headers: {
      
        // "user-id": gottenToken,
        accept: "application/json",
        Authorization: `Bearer l6QnlILGUkiwUk2SMxuQt66zSrwfyz1S5vVpB9t6fUmn0XuLm0rT5l0upCfw`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({  
        url: originalUrl,
        domain: "tinyurl.com",
        // alias: formContent.customUrl || "",
        description: "string",

      
      }),
    });

    if (response.ok) {
      toast.success("url shorten successful", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setLoading(false);
      const data = await response.json();
      setShortUrl(data.shortUrl);
      setDisplayModal(true);
    } else {
      setLoading(false);
      toast.error("error shortening url", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setLoading(false);
      console.log(response.status);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    setOriginalUrl("");
  };

  return (
    <>
      <ToastContainer />
      <section className="w-full mt-[150px] md:mt-[100px] bg-gradient-to-r ">
        {shortUrl && displayModal && (
          <ShortUrlOutput
            shortUrl={shortUrl}
            setDisplayModal={setDisplayModal}
          />
        )}
        <div className=" m-auto md:px-20 px-[1rem] ml-20">
          <div className="grid space-y-10 m-auto lg:w-[90%] md:grid-cols-2 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col md:pl-3 lg:pl-0 justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl text-[#3B71CA] font-bold tracking-tighter text-primary-foreground sm:text-5xl xl:text-6xl/none">
                  Shorten Your Links
                </h1>
                <p className="max-w-[600px] text-[#9b9a9a] text-muted-foreground leading-tight md:text-lg">
                Enhance your online presence with our powerful URL shortener, providing clean, branded links that are easy to share and track.

                </p>
              </div>
              <form onSubmit={handleShortUrl}>
                <input
                  type="url"
                  required
                  value={originalUrl}
                  onChange={(e) => setOriginalUrl(e.target.value)}
                  placeholder="Enter your long URL"
                  className=" w-full py-2 pl-2 border-2 outline-none rounded-md"
                />
                <br />
                <button
                  className="border-2 w-full bg bg-black ease-out hover:bg-indigo-950 text-white py-2 rounded-md font-medium mt-5"
                  type="submit"
                >
                  {loading ? <p>Processing...</p> : <p>Shorten</p>}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
