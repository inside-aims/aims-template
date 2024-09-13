import NumberTicker from "@/components/magicui/number-ticker";

const NumberTickerDemo = () => {
  return (
    <>
      <p className="whitespace-pre-wrap text-4xl md:text-6xl
       text-white font-medium tracking-tighter dark:text-white">
        <NumberTicker value={2} 
        className={`text-white`}/>
      </p>
    </>
  );
};

export default NumberTickerDemo;
