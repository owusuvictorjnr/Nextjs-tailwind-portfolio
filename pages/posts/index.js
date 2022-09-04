import React from "react";
import Link from "next/link";
import CTA from "./cta";
import Image from "next/image";
// import vic3 from "../public/images/vic3.png";
import vic3 from "../../public/images/vic3.png"

const Header = () => {
  return (
    <header className="bg-slate-900 h-screen ">
      <div className="text-xl continer display:block  text-center pt-20">
        <h5 className="text-white/80 capitalize gap-10">hello, i`m</h5>
        <h1 className="text-[2.5rem] pt-5 text-white capitalize">
          owusu victor
        </h1>
        <h5 className="text-white/50 pt-10 capitalize">
          fullstack development || cyber security
        </h5>
        <CTA />
        <div>
          <Image src={vic3} alt="Me" className="" />
        </div>

        
        <h5 className="absolute right-[-1.3rem] font-medium py-1 px-10 rotate-90 insert-x-0 bottom-[10rem] text-lg text-white/50">
          <Link href="#"> scroll down </Link>
        </h5>
      </div>
    </header>
  );
};

export default Header;

// import next from "next";

// import Link from "next/link";
// import Image from "next/image";

// const index = () => {
//   return (
//     <div>
//       <div className="bg-slate-500 h-screen">
//         <h1 className="text-green-100 flex justify-center">Welcome</h1>

//         <h2 className="text-yellow-100">
//           <Link href="/posts/firstPost">Go to First Post</Link>
//         </h2>
//       </div>
//       <div className="">
//         <Image src="/my-wep/public/images/code.jpg" alt="cool" />
//       </div>
//     </div>
//   );
// };

// export default index;
