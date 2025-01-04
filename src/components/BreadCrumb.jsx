import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
function BreadCrumb() {
  const itemsList = [
    {
      title: "All Employees",
    },
    {
      title: "New",
      path: "/",
    },
  ];

  const itemRender = (currentRoute, params, items) => {
    const isLast = currentRoute?.title === items[items.length - 1]?.title;

    return isLast ? (
      <span className=" text-mainColor">{currentRoute.title}</span>
    ) : (
      <Link to={currentRoute.path || "#"}>{currentRoute.title}</Link>
    );
  };

  return (
    <Breadcrumb
      className=" font-bold text-xl pb-7"
      separator=">"
      itemRender={itemRender}
      items={itemsList}
    />
  );
}
export default BreadCrumb;
