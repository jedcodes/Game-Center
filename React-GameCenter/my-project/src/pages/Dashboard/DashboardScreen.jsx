import { Header } from "../../components";

const DashboardScreen = () => {
  return (
    <div className="p-10">
      <Header />
      <section className="flex w-full lg:flex-row flex-col min-h-[25rem] mt-10 border-4 border-red-400">
        <div className="lg:w-3/5 w-full border-r-2 border-orange-500"></div>
        <div></div>
      </section>
      <section className="flex w-full border-2 border-violet-500 mt-10 min-h-[20rem]"></section>
    </div>
  );
};

export default DashboardScreen;
