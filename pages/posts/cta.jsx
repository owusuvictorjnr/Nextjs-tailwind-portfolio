import React from "react";
import Link from "next/link";
// import CV from '../../public/images/cv.pdf'

const CTA = () => {
  return (
    <div className=" mt-[2.5rem] flex justify-center gap-[1.2rem] capitalize">
      {/* <Link href={CV}>Read CV</Link> */}

      <h2
        className="cursor-pointer
        md:transition-all
        transition-all
        border-1
        border-[#4bd5ff]
        rounded-none
        hover:rounded-sm
        p-[0.2rem] 
        w-max-content 
        inline-block 
        text-[#4bd5ff]
        bg-white/50
        "
      >
        <Link href="">read CV </Link>
      </h2>

      <h2>
        <Link href="contact">let`s talk </Link>
      </h2>
    </div>
  );
};

export default CTA;
