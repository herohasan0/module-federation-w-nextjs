import dynamic from "next/dynamic";

const RemoteKahramanTitle = dynamic(
  () => {
    return import("hero_components/title");
  },
  { ssr: false }
);

const RemoteTitle = dynamic(
  () => {
    return import("ui_library/Title");
  },
  { ssr: false }
);

const RemoteButton = dynamic(
  () => {
    return import("ui_library/Button");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div className="">
      <RemoteKahramanTitle
        className="text-3xl text-blue-700"
        title="Remote Title Example"
      />
      <RemoteTitle title="Denemexx" />
      <RemoteButton
        text="deneme-btn"
        isSolid
        className="text-red-200 border"
        isLoading
      />
    </div>
  );
}
