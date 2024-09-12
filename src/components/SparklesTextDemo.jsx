import SparklesText from "@/components/magicui/sparkles-text";

export async function SparklesTextDemo() {
  return (
    <SparklesText
      text="Magic UI"
      className="text-white"
      sparklesCount={20}
      colors={{
        first: "#A07CFE",
        second: "#FE8FB5",
      }}
    />
  );
}
