"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Image from "next/image";
import Logo from "../../../public/yumm_ai_logo.png";
import Input from "../../../components/ui/Input";
import PrimaryBtn from "../../../components/ui/PrimaryBtn";
import SecondaryBtn from "../../../components/ui/SecondaryBtn";
import signupSchema from "../../../lib/validations/signupSchema";
import Link from "next/link";

type SignupFormData = z.infer<typeof signupSchema>;
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Email:", data.email);
    console.log("Signup completed!");
  };

  return (
    <div className="flex justify-center w-full items-center h-screen">
      <div
        className="flex flex-col w-107.5 min-h-187.75 bg-white pt-8 pr-7.5 pb-8 pl-7.5 
      rounded-[30px] border border-[#666666] gap-10"
      >
        <div className="flex items-center gap-3">
          <div>
            <Image src={Logo} alt="Yumm AI Logo" />
          </div>
          <div className="text-[#819932] font-pop font-bold text-[42px]">
            Yumm AI
          </div>
        </div>
        <div className="flex flex-col gap-2 min-h-19.5">
          <div className="font-pop font-bold text-[36px]">Welcome, Signup</div>
          <div className="text-[16px] font-inter">Signup To Continue</div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="min-h-121.25 flex flex-col gap-10"
        >
          <div className="flex flex-col min-h-50.5 gap-5 ">
            <Input
              placeholder={"Email"}
              type={"email"}
              {...register("email")}
              error={errors.email?.message}
            />
            <Input
              placeholder={"Password"}
              type={"password"}
              {...register("password")}
              error={errors.password?.message}
            />
            <Input
              placeholder={"Confirm Password"}
              type={"password"}
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4.5">
            <PrimaryBtn buttonName={"Sign up"} type="submit" />
            <div className="flex items-center gap-1 w-full">
              <span className="w-full h-px bg-[#1616169a]" />
              <p className="text-[10px]">OR</p>
              <span className="w-full h-px bg-[#1616169a]" />
            </div>
            <SecondaryBtn buttonName={"Sign up with Google"} />
            <span className="w-full h-px bg-[#1616169a]" />
            <div className="flex gap-2">
              <p>Already have an account ?</p>
              <Link href="/auth/login">
                <button className="relative text-black font-bold cursor-pointer -top-1">
                  Log in
                  <span className="absolute w-full bottom-0 right-0 bg-black/80 h-px"></span>
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
