// import React from "react";

import Link from "next/link";

function FirstPost() {
  return <div className="text-red-500">
      <h2 className="flex justify-center">Hello</h2> 
    <Link href="/posts/firstPost">
      <h1 className="flex justify-center">Vitech</h1> 
    </Link>

    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    </div>;
}

export default FirstPost;
