import dynamic from "next/dynamic";

const RemoteKahramanTitle = dynamic(
  () => {
    return import("hero_components/title");
  },
  { ssr: false }
);

export default function Home() {
  return <RemoteKahramanTitle />;
}
