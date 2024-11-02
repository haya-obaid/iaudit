import MainInput from '../MainInput'
import PageHeaderAuth from '../PageHeaderAuth'

export default function ThirdTest () {
  return (
    <>
    <div className="mb-[64px]">
    <PageHeaderAuth
      header="Contact details"
      text="Please choose what type of editing do you provide In your office"
    />
  </div>
    <div className="flex flex-col space-y-[16px] w-full">
      <div className="flex justify-start space-y-[8px] md:space-y-[0] space-x-0 md:space-x-[20px] max-w-full flex-col md:flex-row">
      <MainInput
          id={"nameEnglish"}
          label={"Name In English"}
          placeholder={"Name In English"}
          onChange={(e) => {
            //   handleChangeInput("firmId", e.target.value);
          }}
        />
        <MainInput
          id={"nameArabic"}
          label={"Name In Arabic"}
          placeholder={"Name In Arabic"}
          onChange={(e) => {
            //   handleChangeInput("firmId", e.target.value);
          }}

        />
      </div>
      <div className="flex justify-start space-y-[8px] md:space-y-[0] space-x-0 md:space-x-[20px] max-w-full flex-col md:flex-row">
        <MainInput
          id={"jobTitle"}
          label={"Job title"}
          placeholder={"Job title"}
          onChange={(e) => {
            //   handleChangeInput("firmId", e.target.value);
          }}
        />
        <MainInput
          id={"email"}
          label={"Email"}
          placeholder={"Email"}
          onChange={(e) => {
            //   handleChangeInput("firmId", e.target.value);
          }}
        />
      </div>
      <div className="flex justify-start space-y-[8px] md:space-y-[0] space-x-0 md:space-x-[20px] max-w-full flex-col md:flex-row">
        <MainInput
        type='number'
          id={"mobilePhone"}
          label={"Mobile phone"}
          placeholder={"Mobile phone"}
          onChange={(e) => {
            //   handleChangeInput("firmId", e.target.value);
          }}
        />
        <MainInput
                type='number'
          id={"alternativeMobilePhone"}
          label={"Alternative Mobile phone"}
          placeholder={"Alternative Mobile phone"}
          onChange={(e) => {
            //   handleChangeInput("firmId", e.target.value);
          }}
        />

      </div>
    </div>
    </>
  )
}
