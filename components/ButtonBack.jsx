import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ButtonBack = () => {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.back()}
        className="py-1 px-4 text-base bg-rose-600 text-white my-2 rounded-md capitalize"
      >
        Kembali
      </button>
    </>
  );
};

export default ButtonBack;
