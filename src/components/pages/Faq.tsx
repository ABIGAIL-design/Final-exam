import React, { useState } from "react";

const Faq = () => {
  const [faqIndex, setFaqIndex] = useState<null | number>(null);

  const faqData = [
    {
      h1: "How does this work?",
      p: "Our URL shortener converts lengthy URLs into neat, compact links that are simple to share. Just input your URL, and we'll create a shortened version ready for you to use anywhere.",
    },
    {
      h1: "What are the plans?",
      p: "We provide a variety of pricing plans to suit your needs. Our free plan lets you create up to 80 shortened links per month. For more advanced features and higher usage limits, explore our paid plans starting at just $4 per month..",
    },
    {
      h1: "How do I manage my account?",
      p: "You can manage your account settings, update your profile information, and review billing details by logging into your account dashboard. There, you can also track your usage statistics and upgrade your plan as needed.",
    },
    {
      h1: "Can I customize my shortened links?",
      p: "Yes, you can customize the look of your shortened links. Our premium plans let you choose a custom domain and create branded links that align with your company’s style..",
    },
    {
      h1: "How do I track the performance of my links?",
      p: "Our URL shortener provides detailed analytics on the performance of your links, including click-through rates, geographic data, and device information. You can access these insights from your account dashboard to better understand how your content is performing.",
    },
  ];

  return (
    <section className="mt-[80px]">
      <main>
        <div className="space-y-2 mt-10 text-center">
          <h1 className="text-2xl  font-bold text-[#3B71CA] lg:pt-10 pt-10 tracking-tighter sm:text-4xl md:text-5xl">
            FAQs
          </h1>
          <p className="text-muted-foreground text-[#9b9a9a] md:text-xl">
            Get answers to your questions about our platform.
          </p>
        </div>
      </main>

      <section className="mt-10 lg:mx-[200px] mb-10 md:mx-[100px] sm:mx-[50px] mx-[1rem]">
        <main>
          {faqData.map((faq, index) => (
            <div
              className="border-2 bg-[#3B71CA] transition-all px-5 ease-out mt-5"
              key={index}
            >
              <h1
                onClick={() => setFaqIndex(index)}
                className="w-full text-white font-bold py-3 cursor-pointer"
              >
                {faq.h1}
              </h1>
              {faqIndex === index ? (
                <p className="py-3 text-black leading-[2rem] text-md">
                  {faq.p}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </main>
      </section>
    </section>
  );
};

export default Faq;
