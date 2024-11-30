"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function SignInPage() {
  const { status } = useSession();
  console.log("status: ", status);

  const handleClickGoogle = () => {
    try {
      signIn("google", { callbackUrl: "/" });
    } catch (e) {
      console.log(e);
      // toast.error('다시 시도해주세요')
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        <Link href={"/"}>Move to Home</Link>
        <h1 className="text-lg font-semibold text-center">로그인 또는 회원가입</h1>
        <hr className="border-b-gray-300" />
        <div className="text-xl md:text-2xl font-semibold">Fastcampus Nextbnb 에 오신 것을 환영합니다.</div>
      </div>
      <div className="flex flex-col gap-5 mt-16">
        <button
          type="button"
          onClick={handleClickGoogle}
          className="relative border border-gray-700 rounded-md py-3 text-sm hover:bg-black/5 text-center font-semibold">
          {/*<FcGoogle className="absolute left-5 text-xl my-auto inset-y-0" />*/}
          구글로 로그인하기
        </button>
      </div>
    </div>
  );
}