import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

export const metadata = {
  title: "Dashboard Page",
  description: "This is Dashboard Page",
};

//? Server componentler client componentlerin icerisine eklenirse, browser a gonderilir her sey. Children yapisi ile kullanilabilir

export default function Home() {
  return (
    <main className="text-2xl text-center p-10">
      <h1>Hello Homepage</h1>
      {/* <ServerComponent /> */}
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}
