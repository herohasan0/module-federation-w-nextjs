import Header from "../remoteEntry";

export default function Home() {
  console.log("Header", Header);
  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  );
}
