/*eslint-disable*/
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const VerticalLayout = ({ children }) => {
  return (
    <div className="flex font-manrope relative">
      <Sidebar />
      <div className=" basis-full">
        <Header />
        <div className="my-8 mr-8 ml-[304px] mt-28 py-9 px-6 shadow rounded-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default VerticalLayout;
