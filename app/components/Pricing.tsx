import ChoosePlanCard from "./PricingCard";

export default function Pricing(props: any) {
  return (
    <div className="w-full bg-[#F2F2F2] pb-10 pt-3 md:px-[80px] md:py-[20px] md:pb-20  text-black ">
      <div className="mx-auto mt-[60px] w-3/4 rounded-[30px] text-center  ">
        <p className="mt-[10px] text-[40px] font-bold md:text-[60px] lg:mt-[30px]">
          {props?.title}
        </p>
      </div>
      <div className="mx-auto my-5 flex w-[80%] flex-col items-center justify-center gap-6 pt-8 md:flex-row">
        {props?.choose_plan.map((item: any,index:number) => {
          return (
            <ChoosePlanCard
              key={item?.id}
              flag={index===1?true:false}
              level={item?.level}
              description={item?.description}
              features={item?.features}
              price={item?.price}
            />
          );
        })}
      </div>
    </div>
  );
}