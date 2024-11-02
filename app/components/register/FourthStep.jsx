import PageHeaderAuth from "../PageHeaderAuth";
import MainInput from "../MainInput";
import PasswordInput from "../PasswordInput";
import { GoMail } from "react-icons/go";

export default function FourthStep() {
  return (
    <>
      <div className="mb-[64px]">
        <PageHeaderAuth
          header="Create an account"
          text="Please choose what type of editing do you provide In your office"
        />
      </div>
      <div className="space-y-[16px]">
        <MainInput
          id={"email"}
          label={"Email"}
          placeholder={"Email"}
          IconChild={GoMail}
          onChange={(e) => {
            // handleChangeInput("firmId", e.target.value);
          }}
        />

        <PasswordInput
          id={"register-password"}
          onChange={(e) => {
            // handleChangeInput("password", e.target.value);
          }}
        />
        <PasswordInput
          id={"register-confirm-password"}
          onChange={(e) => {
            // handleChangeInput("password", e.target.value);
          }}
        />
      </div>
    </>
  );
}
