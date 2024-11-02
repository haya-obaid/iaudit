import Link from "next/link";
import { TopHeader } from "@/app/components/file-manager";
import { fileManagerTabs } from "@/app/constants";
export default function Page() {
  return (
    <>
      <TopHeader title="Add new file" backArrow />
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        {fileManagerTabs.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.href}
              className="max-w-full md:max-w-[558px] w-full bg-white rounded-md flex-center flex-col gap-4 md:h-[240px] h-[200px] cursor-pointer"
            >
              {item.icon}
              <h3 className="text-[20px]">{item.title}</h3>
            </Link>
          );
        })}
      </div>
    </>
  );
}
