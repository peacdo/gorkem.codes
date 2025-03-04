import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-primary rounded-full p-2">
        <Image
          src="/avatar.png"
          alt="Görkem Özyılmaz Avatar"
          height={220}
          width={220}
          className="rounded-full"
          priority
        />
      </div>
    </div>
  );
};

export default Avatar;
