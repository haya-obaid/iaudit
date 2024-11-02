import { useDropzone } from "react-dropzone";
import PageHeaderAuth from "../PageHeaderAuth";
import cloudIcon from '@/app/assets/icons/cloud.svg'
export default function SecondStep () {
  const onDrop = (_acceptedFiles) => {};
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true, // Ensure multiple file uploads are enabled
    maxFiles: 5,
  });
  return (
    <>
      <div className="mb-[10px]">
        <PageHeaderAuth
          header="Business Files"
          text="Please Upload the files requested down below"
        />
      </div>
      <ul className="mb-[32px]">
        <li
          className="text-[#8D8BA7] text-[12px]
      mb-[4px]"
        >
          1- Commercial registration.
        </li>
        <li
          className="text-[#8D8BA7] text-[12px]
      mb-[4px]"
        >
          2- Your stamp.
        </li>
        <li
          className="text-[#8D8BA7] text-[12px]
      mb-[4px]"
        >
          3- Your logo.
        </li>
      </ul>
      <div
        {...getRootProps()}
        className=" border-[2px] cursor-pointer border-dashed border-[#E7E6F2] p-[16px] bg-white w-[526px] max-w-full mb-[24px]"
      >
        <input
          {...getInputProps()}
          type="file"
          id="file-input"
          hidden
          multiple
        />
        <div className="mx-auto flex flex-col md:flex-row gap-3 justify-between items-center w-[386px] max-w-full h-full">
          <img src={cloudIcon.src} alt=""  />
          <div>
            <p className="text-[16px] text-[#27272E] mb-[16px] text-center">
              Choose a file or drag & drop it here
            </p>
            <p className="text-[13px] text-[#BCBACD] text-center">
              JPEG, PNG, PDG, and MP4 formats, up to 50MB
            </p>
          </div>
        </div>
      </div>
      <span className="text-[#27272E] text-[14px] font-[600] mb-[12px]">
        Uploading{" "}
      </span>
      <span className="w-[526px] max-w-full p-[10px] bg-white mb-[16px]">
        your-file-here.PDF
      </span>
      <span className="text-[#27272E] text-[14px] font-[600] mb-[12px]">
        Uploaded{" "}
      </span>
    </>
  );
};
