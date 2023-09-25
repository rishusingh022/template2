"use client";
import FeatureCard from "./FeatureCard";

export default function Features(props: any) {
  return (
    <div className="mx-auto flex max-w-[1280px] flex-col my-5">
      {/* header */}
      <div className="flex flex-col mx-5 md:mx-[73px] mt-24 mb-12">
        <div className="max-w-[768px] flex flex-col gap-4">
          <div className="text-4xl md:text-5xl text-black leading-[40px] font-semibold">
            {props.featureData?.title}
          </div>
          <div className="text-[#6B7280] font-normal text-base leading-[28px]">
            {props.featureData?.subtitle}
          </div>
        </div>
      </div>
      {/* features */}
      <div className="text-black flex flex-wrap gap-5 justify-center items-center">
        {props.featureData?.features.map((feature: any, index: any) => {
          const indexAsInt = parseInt(index, 10);
          return (
            <FeatureCard
              key={index}
              cardNumber={indexAsInt}
              title={feature.featureTitle}
              subtitle={feature.featureDiscription}
            />
          );
        })}
      </div>
    </div>
  );
}
