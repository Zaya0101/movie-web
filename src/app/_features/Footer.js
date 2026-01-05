"use client";
export function Footer() {
  return (
    <div className="flex  justify-between items-center max-w-[1440px] h-[280px] px-[21px] mx-auto bg-indigo-600">
      <div className="px-10">
        <div className="flex gap-3 py-[13px]">
          <img className="w-[21px] h-[21px]" src="/movieicon.png" />
          <span className="italic text-white font-semibold text-[16px]">
            Movie Z
          </span>
        </div>
        <span className="text-white">© 2024 Movie Z. All Rights Reserved.</span>
      </div>
      <div></div>
    </div>
  );
}
