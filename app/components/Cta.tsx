export default function Cta(props: any) {
  return (
    <div className="bg-white mx-auto flex max-w-[1280px] flex-col items-center justify-center md:flex-row md:my-10 p-5">
      <div className="bg-[url('/template2_card_bg.png')] bg-cover bg-no-repeat bg-center w-full min-h-[564px] rounded-[20px] flex flex-col lg:flex-row-reverse">
        <div className="flex-auto w-full lg:max-w-[50%] p-5 lg:pl-16 lg:pt-14 lg:pb-0 lg:pr-0">
          <div className="bg-[url('/template2_card_img.png')] bg-cover bg-no-repeat bg-center w-full min-h-[424px] rounded-md lg:rounded-none"></div>
        </div>
        <div className="flex flex-col w-full lg:max-w-[50%] p-6 lg:p-20 gap-8">
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-3xl lg:text-4xl font-inter max-w-[440px]">
              {props.add_card?.title}
            </div>
            <div className="font-normal font-inter lg:text-lg">
              {props.add_card?.desc}
            </div>
          </div>
          <div className="rounded-md font-inter bg-white text-[#059669] lg:font-medium w-28 h-12 lg:w-28 lg:h-12 border-1 py-[13px] px-[21px] text-base">
            Add card
          </div>
        </div>
      </div>
    </div>
  );
}
