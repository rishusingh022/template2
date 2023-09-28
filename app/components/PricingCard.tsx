
export default function PricingCard<IPROPS>(props: any) {
    return (
      <div className="flex min-w-[300px] max-w-sm flex-col overflow-hidden rounded-[20px] border bg-white px-8 shadow-lg md:min-w-[350px] ">
        <div className="py-4 lg:row-span-2">
          <div className="mb-5 mt-10">
            <span className="text-[35px] font-[600] leading-[53px]">
              ${props?.price}
            </span>
            <span className="text-[16px] font-[400] leading-[25px] text-gray-400">
              /Month
            </span>
          </div>
          <div className="text-3xl font-[600] capitalize  leading-[40px]">
            {props?.level}
          </div>
          <p className="mt-[20px] font-[400] capitalize leading-[27px] text-gray-400">
            {props?.description}
          </p>
        </div>
        <div className="lg:row-span-1">
          <ul className="mt-8">
            {props?.features.map((item: any) => {
              return (
                <li key={item?.id} className="mt-2">
                  <div className="flex">
                    <img
                      className="col-span-1 my-auto mr-[15px] h-5 w-5"
                      alt=""
                      src="/template2_pricing_tick.png"
                    />
                    <p className="col-span-9  font-[400] leading-[27px] text-gray-400">
                      {item?.feature}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mb-5 text-center lg:row-span-1">
          <button 
          style={{
            background: props.flag
              ? "#059669"
              : undefined,
            color: props.flag
              ? "#ffffff"
              : undefined,
          }}
          className="mt-6 w-full rounded-[8px] bg-white px-5 py-3 text-black border-[2px]">
            Get Started
          </button>
        </div>
      </div>
    );
  }