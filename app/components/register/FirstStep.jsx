import MainInput from "../MainInput";
import PageHeaderAuth from "../PageHeaderAuth";

export default function FirstStep() {
  return (
    <>
      <div className="mb-[64px]">
        <PageHeaderAuth
          header="Business details "
          text="Please choose what type of editing do you provide In your office"
        />
      </div>
      <div className="flex flex-col space-y-[16px] w-full">
        <div className="flex justify-start space-y-[8px] md:space-y-[0] space-x-0 md:space-x-[20px] max-w-full flex-col md:flex-row">
          <MainInput
            id={"tradingNameEnglish"}
            label={"Trading Name In English"}
            placeholder={"Trading Name In English"}
            onChange={(e) => {
              //   handleChangeInput("firmId", e.target.value);
            }}
          />
          <MainInput
            id={"tradingNameArabic"}
            label={"Trading Name In Arabic"}
            placeholder={"Trading Name In Arabic"}
            onChange={(e) => {
              //   handleChangeInput("firmId", e.target.value);
            }}
          />
        </div>
        <div className="flex justify-start space-y-[8px] md:space-y-[0] space-x-0 md:space-x-[20px] max-w-full flex-col md:flex-row">
          <MainInput
            id={"crNumber"}
            label={"Cr number"}
            placeholder={"Cr number"}
            onChange={(e) => {
              //   handleChangeInput("firmId", e.target.value);
            }}
          />
          <MainInput
            id={"practiceLicenseNumber"}
            label={"Practice license number"}
            placeholder={"Practice license number"}
            onChange={(e) => {
              //   handleChangeInput("firmId", e.target.value);
            }}
          />
        </div>
        <div className="flex justify-start space-y-[8px] md:space-y-[0] space-x-0 md:space-x-[20px]  max-w-full flex-col md:flex-row">
          <MainInput
            id={"country"}
            label={"Country"}
            placeholder={"Country"}
            onChange={(e) => {
              //   handleChangeInput("firmId", e.target.value);
            }}
          />
          <MainInput
            id={"headquarterLocation"}
            label={"Headquarter location"}
            placeholder={"Headquarter location"}
            onChange={(e) => {
              //   handleChangeInput("firmId", e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
