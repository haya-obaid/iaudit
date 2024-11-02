import MainButton from "../MainButton";
import MainInput from "../MainInput";
import { FiUser } from "react-icons/fi";
import PasswordInput from "../PasswordInput";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="space-y-[16px]">
      <MainInput
        id={"FirmId"}
        label={"Firm ID"}
        placeholder={"Firm ID"}
        IconChild={FiUser}
      />
      <MainInput
        id={"username"}
        label={"User Name"}
        placeholder={"User Name"}
        IconChild={FiUser}
      />
      <PasswordInput />
      <div className="flex justify-between items-center flex-col md:flex-row space-y-[16px] md:space-y-0 max-w-full md:max-w-[526px]">
        <div className="flex space-x-[4px]">
          <p className="text-[#8D8BA7] text-xs md:text-[16px] font-[400]">
            Not registered yet? {" "}
            <Link href="/login" className="underline text-[#253A7B]">
              Create firm Account
            </Link>
          </p>
        </div>
        <div className="w-[200px] max-w-full ">
          <MainButton text="Login" />
        </div>
      </div>
    </div>
  );
}
