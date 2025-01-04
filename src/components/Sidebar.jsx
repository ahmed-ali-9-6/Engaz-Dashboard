import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Sidebar = () => {
  return (
    <aside className="flex flex-col font-poppins w-[280px] px-5 h-screen py-8 bg-mainColor border-r rounded-br-2xl fixed left-0 top-0 z-20">
      <div>
        <a href="/">
          <img className="w-auto" src={logo} alt="Logo" />
        </a>
      </div>

      <div className="flex flex-col flex-1 gap-8 mt-6">
        <nav className="space-y-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive && "bg-[#335d84] text-white border-l-4 border-white"
              } flex items-center px-3 py-2 transition-colors duration-300 text-textColor hover:text-white hover:bg-hoverColor border-transparent border-l-4 hover:border-l-4 hover:border-white rounded-e-[10px] cursor-pointer`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-75"
            >
              <path
                d="M3.75 6C3.75 5.40326 3.98705 4.83097 4.40901 4.40901C4.83097 3.98705 5.40326 3.75 6 3.75H8.25C8.84674 3.75 9.41903 3.98705 9.84099 4.40901C10.2629 4.83097 10.5 5.40326 10.5 6V8.25C10.5 8.84674 10.2629 9.41903 9.84099 9.84099C9.41903 10.2629 8.84674 10.5 8.25 10.5H6C5.40326 10.5 4.83097 10.2629 4.40901 9.84099C3.98705 9.41903 3.75 8.84674 3.75 8.25V6ZM3.75 15.75C3.75 15.1533 3.98705 14.581 4.40901 14.159C4.83097 13.7371 5.40326 13.5 6 13.5H8.25C8.84674 13.5 9.41903 13.7371 9.84099 14.159C10.2629 14.581 10.5 15.1533 10.5 15.75V18C10.5 18.5967 10.2629 19.169 9.84099 19.591C9.41903 20.0129 8.84674 20.25 8.25 20.25H6C5.40326 20.25 4.83097 20.0129 4.40901 19.591C3.98705 19.169 3.75 18.5967 3.75 18V15.75ZM13.5 6C13.5 5.40326 13.7371 4.83097 14.159 4.40901C14.581 3.98705 15.1533 3.75 15.75 3.75H18C18.5967 3.75 19.169 3.98705 19.591 4.40901C20.0129 4.83097 20.25 5.40326 20.25 6V8.25C20.25 8.84674 20.0129 9.41903 19.591 9.84099C19.169 10.2629 18.5967 10.5 18 10.5H15.75C15.1533 10.5 14.581 10.2629 14.159 9.84099C13.7371 9.41903 13.5 8.84674 13.5 8.25V6ZM13.5 15.75C13.5 15.1533 13.7371 14.581 14.159 14.159C14.581 13.7371 15.1533 13.5 15.75 13.5H18C18.5967 13.5 19.169 13.7371 19.591 14.159C20.0129 14.581 20.25 15.1533 20.25 15.75V18C20.25 18.5967 20.0129 19.169 19.591 19.591C19.169 20.0129 18.5967 20.25 18 20.25H15.75C15.1533 20.25 14.581 20.0129 14.159 19.591C13.7371 19.169 13.5 18.5967 13.5 18V15.75Z"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="mx-2 text-sm font-medium">Dashboard</span>
          </NavLink>

          <NavLink
            to="/all-employees"
            className={({ isActive }) =>
              `${
                isActive && "bg-[#335d84] text-white border-l-4 border-white"
              } flex items-center px-3 py-2 duration-300 text-textColor hover:text-white hover:bg-hoverColor border-transparent border-l-4 hover:border-l-4 hover:border-white rounded-e-[10px] cursor-pointer`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-75"
            >
              <path
                d="M15 19.128C15.853 19.3757 16.7368 19.5009 17.625 19.5C19.0534 19.5021 20.4633 19.1764 21.746 18.548C21.7839 17.6517 21.5286 16.7675 21.0188 16.0293C20.509 15.2912 19.7724 14.7394 18.9207 14.4575C18.0691 14.1757 17.1487 14.1791 16.2992 14.4674C15.4497 14.7557 14.7173 15.313 14.213 16.055M15 19.128V19.125C15 18.012 14.714 16.965 14.213 16.055M15 19.128V19.234C13.0755 20.3931 10.8706 21.0038 8.62402 21C6.29302 21 4.11202 20.355 2.25002 19.234L2.24902 19.125C2.24826 17.7095 2.71864 16.3339 3.58601 15.2153C4.45338 14.0966 5.6684 13.2984 7.03951 12.9466C8.41063 12.5948 9.85985 12.7093 11.1587 13.2721C12.4575 13.8349 13.5321 14.814 14.213 16.055M12 6.375C12 7.27011 11.6444 8.12855 11.0115 8.76149C10.3786 9.39442 9.52013 9.75 8.62502 9.75C7.72992 9.75 6.87147 9.39442 6.23854 8.76149C5.6056 8.12855 5.25002 7.27011 5.25002 6.375C5.25002 5.47989 5.6056 4.62145 6.23854 3.98851C6.87147 3.35558 7.72992 3 8.62502 3C9.52013 3 10.3786 3.35558 11.0115 3.98851C11.6444 4.62145 12 5.47989 12 6.375ZM20.25 8.625C20.25 9.32119 19.9735 9.98887 19.4812 10.4812C18.9889 10.9734 18.3212 11.25 17.625 11.25C16.9288 11.25 16.2612 10.9734 15.7689 10.4812C15.2766 9.98887 15 9.32119 15 8.625C15 7.92881 15.2766 7.26113 15.7689 6.76884C16.2612 6.27656 16.9288 6 17.625 6C18.3212 6 18.9889 6.27656 19.4812 6.76884C19.9735 7.26113 20.25 7.92881 20.25 8.625Z"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">All Employees</span>
          </NavLink>

          <NavLink
            to="/1"
            className={({ isActive }) =>
              `${
                isActive && "bg-[#335d84] text-white border-l-4 border-white"
              } flex items-center px-3 py-2 duration-300 text-textColor hover:text-white hover:bg-hoverColor border-transparent border-l-4 hover:border-l-4 hover:border-white rounded-e-[10px] cursor-pointer`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-75"
            >
              <circle
                cx="6"
                cy="4"
                r="2"
                className="stroke-current"
                strokeWidth="1.5"
              />
              <ellipse
                cx="6"
                cy="8"
                rx="3"
                ry="2"
                className="stroke-current"
                strokeWidth="1.5"
              />
              <circle
                cx="18"
                cy="16"
                r="2"
                className="stroke-current"
                strokeWidth="1.5"
              />
              <path
                d="M22 12C22 6.47715 17.5228 2 12 2M12 22C6.47715 22 2 17.5228 2 12"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <ellipse
                cx="18"
                cy="20"
                rx="3"
                ry="2"
                className="stroke-current"
                strokeWidth="1.5"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">All Departments</span>
          </NavLink>

          <NavLink
            to="/2"
            className={({ isActive }) =>
              `${
                isActive && "bg-[#335d84] text-white border-l-4 border-white"
              } flex items-center px-3 py-2 duration-300 text-textColor hover:text-white hover:bg-hoverColor border-transparent border-l-4 hover:border-l-4 hover:border-white rounded-e-[10px] cursor-pointer`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-75"
            >
              <path
                d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Attendance</span>
          </NavLink>

          <NavLink
            to="/3"
            className={({ isActive }) =>
              `${
                isActive && "bg-[#335d84] text-white border-l-4 border-white"
              } flex items-center px-3 py-2 duration-300 text-textColor hover:text-white hover:bg-hoverColor border-transparent border-l-4 hover:border-l-4 hover:border-white rounded-e-[10px] cursor-pointer`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-75"
            >
              <path
                d="M12 6V18M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Payroll</span>
          </NavLink>

          <NavLink
            to="/4"
            className={({ isActive }) =>
              `${
                isActive && "bg-[#335d84] text-white border-l-4 border-white"
              } flex items-center px-3 py-2 duration-300 text-textColor hover:text-white hover:bg-hoverColor border-transparent border-l-4 hover:border-l-4 hover:border-white rounded-e-[10px] cursor-pointer`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-75"
            >
              <path
                d="M9 12H12.75M9 15H12.75M9 18H12.75M15.75 18.75H18C18.5967 18.75 19.169 18.5129 19.591 18.091C20.0129 17.669 20.25 17.0967 20.25 16.5V6.108C20.25 4.973 19.405 4.01 18.274 3.916C17.9 3.88498 17.5256 3.85831 17.151 3.836M17.151 3.836C17.2174 4.05109 17.2501 4.27491 17.25 4.5C17.25 4.69891 17.171 4.88968 17.0303 5.03033C16.8897 5.17098 16.6989 5.25 16.5 5.25H12C11.586 5.25 11.25 4.914 11.25 4.5C11.25 4.269 11.285 4.046 11.35 3.836M17.151 3.836C16.868 2.918 16.012 2.25 15 2.25H13.5C13.0192 2.25011 12.5511 2.40414 12.1643 2.68954C11.7774 2.97493 11.492 3.3767 11.35 3.836M11.35 3.836C10.974 3.859 10.6 3.886 10.226 3.916C9.095 4.01 8.25 4.973 8.25 6.108V8.25M8.25 8.25H4.875C4.254 8.25 3.75 8.754 3.75 9.375V20.625C3.75 21.246 4.254 21.75 4.875 21.75H14.625C15.246 21.75 15.75 21.246 15.75 20.625V9.375C15.75 8.754 15.246 8.25 14.625 8.25H8.25ZM6.75 12H6.758V12.008H6.75V12ZM6.75 15H6.758V15.008H6.75V15ZM6.75 18H6.758V18.008H6.75V18Z"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Leaves</span>
          </NavLink>

          <NavLink
            to="/5"
            className={({ isActive }) =>
              `${
                isActive && "bg-[#335d84] text-white border-l-4 border-white"
              } flex items-center px-3 py-2 duration-300 text-textColor hover:text-white hover:bg-hoverColor border-transparent border-l-4 hover:border-l-4 hover:border-white rounded-e-[10px] cursor-pointer`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-75"
            >
              <path
                d="M20.2501 14.15V18.4C20.2501 19.494 19.4631 20.436 18.3781 20.58C16.2911 20.857 14.1621 21 12.0001 21C9.83806 21 7.70906 20.857 5.62206 20.58C4.53706 20.436 3.75006 19.494 3.75006 18.4V14.15M20.2501 14.15C20.4875 13.9436 20.6775 13.6883 20.807 13.4016C20.9364 13.1149 21.0023 12.8036 21.0001 12.489V8.706C21.0001 7.625 20.2321 6.691 19.1631 6.531C18.0304 6.36142 16.892 6.23234 15.7501 6.144M20.2501 14.15C20.0561 14.315 19.8301 14.445 19.5771 14.53C17.1333 15.3408 14.5748 15.7528 12.0001 15.75C9.35206 15.75 6.80506 15.321 4.42306 14.53C4.17631 14.4479 3.94778 14.3189 3.75006 14.15M3.75006 14.15C3.5126 13.9436 3.32262 13.6883 3.19315 13.4016C3.06369 13.1149 2.99782 12.8036 3.00006 12.489V8.706C3.00006 7.625 3.76806 6.691 4.83706 6.531C5.96975 6.36142 7.10814 6.23233 8.25006 6.144M15.7501 6.144V5.25C15.7501 4.65326 15.513 4.08097 15.091 3.65901C14.6691 3.23705 14.0968 3 13.5001 3H10.5001C9.90332 3 9.33102 3.23705 8.90907 3.65901C8.48711 4.08097 8.25006 4.65326 8.25006 5.25V6.144M15.7501 6.144C13.2538 5.95108 10.7463 5.95108 8.25006 6.144M12.0001 12.75H12.0081V12.758H12.0001V12.75Z"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Jobs</span>
          </NavLink>

          <NavLink
            to="/6"
            className={({ isActive }) =>
              `${
                isActive && "bg-[#335d84] text-white border-l-4 border-white"
              } flex items-center px-3 py-2 duration-300 text-textColor hover:text-white hover:bg-hoverColor border-transparent border-l-4 hover:border-l-4 hover:border-white rounded-e-[10px] cursor-pointer`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-75"
            >
              <path
                d="M15 19.128C15.853 19.3757 16.7368 19.5009 17.625 19.5C19.0534 19.5021 20.4633 19.1764 21.746 18.548C21.7839 17.6517 21.5286 16.7675 21.0188 16.0293C20.509 15.2912 19.7724 14.7394 18.9207 14.4575C18.0691 14.1757 17.1487 14.1791 16.2992 14.4674C15.4497 14.7557 14.7173 15.313 14.213 16.055M15 19.128V19.125C15 18.012 14.714 16.965 14.213 16.055M15 19.128V19.234C13.0755 20.3931 10.8706 21.0038 8.62402 21C6.29302 21 4.11202 20.355 2.25002 19.234L2.24902 19.125C2.24826 17.7095 2.71864 16.3339 3.58601 15.2153C4.45338 14.0966 5.6684 13.2984 7.03951 12.9466C8.41063 12.5948 9.85985 12.7093 11.1587 13.2721C12.4575 13.8349 13.5321 14.814 14.213 16.055M12 6.375C12 7.27011 11.6444 8.12855 11.0115 8.76149C10.3786 9.39442 9.52013 9.75 8.62502 9.75C7.72992 9.75 6.87147 9.39442 6.23854 8.76149C5.6056 8.12855 5.25002 7.27011 5.25002 6.375C5.25002 5.47989 5.6056 4.62145 6.23854 3.98851C6.87147 3.35558 7.72992 3 8.62502 3C9.52013 3 10.3786 3.35558 11.0115 3.98851C11.6444 4.62145 12 5.47989 12 6.375ZM20.25 8.625C20.25 9.32119 19.9735 9.98887 19.4812 10.4812C18.9889 10.9734 18.3212 11.25 17.625 11.25C16.9288 11.25 16.2612 10.9734 15.7689 10.4812C15.2766 9.98887 15 9.32119 15 8.625C15 7.92881 15.2766 7.26113 15.7689 6.76884C16.2612 6.27656 16.9288 6 17.625 6C18.3212 6 18.9889 6.27656 19.4812 6.76884C19.9735 7.26113 20.25 7.92881 20.25 8.625Z"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Candidates</span>
          </NavLink>

          <NavLink
            to="/7"
            className={({ isActive }) =>
              `${
                isActive && "bg-[#335d84] text-white border-l-4 border-white"
              } flex items-center px-3 py-2 duration-300 text-textColor hover:text-white hover:bg-hoverColor border-transparent border-l-4 hover:border-l-4 hover:border-white rounded-e-[10px] cursor-pointer`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-75"
            >
              <path
                d="M9.59421 3.94C9.68421 3.398 10.1542 3 10.7042 3H13.2972C13.8472 3 14.3172 3.398 14.4072 3.94L14.6202 5.221C14.6832 5.595 14.9332 5.907 15.2652 6.091C15.3392 6.131 15.4122 6.174 15.4852 6.218C15.8102 6.414 16.2052 6.475 16.5602 6.342L17.7772 5.886C18.0266 5.79221 18.3012 5.78998 18.5521 5.87971C18.803 5.96945 19.0139 6.14531 19.1472 6.376L20.4432 8.623C20.5763 8.8537 20.6232 9.12413 20.5756 9.38617C20.5279 9.6482 20.3889 9.88485 20.1832 10.054L19.1802 10.881C18.8872 11.122 18.7422 11.494 18.7502 11.873C18.7516 11.958 18.7516 12.043 18.7502 12.128C18.7422 12.506 18.8872 12.878 19.1802 13.119L20.1842 13.946C20.6082 14.296 20.7182 14.901 20.4442 15.376L19.1462 17.623C19.0131 17.8536 18.8024 18.0296 18.5517 18.1195C18.301 18.2094 18.0266 18.2074 17.7772 18.114L16.5602 17.658C16.2052 17.525 15.8102 17.586 15.4842 17.782C15.4117 17.8261 15.3384 17.8688 15.2642 17.91C14.9332 18.093 14.6832 18.405 14.6202 18.779L14.4072 20.06C14.3172 20.603 13.8472 21 13.2972 21H10.7032C10.1532 21 9.68421 20.602 9.59321 20.06L9.38021 18.779C9.31821 18.405 9.06821 18.093 8.73621 17.909C8.66205 17.8681 8.58871 17.8258 8.51621 17.782C8.19121 17.586 7.79621 17.525 7.44021 17.658L6.22321 18.114C5.97393 18.2075 5.69957 18.2096 5.4489 18.1199C5.19824 18.0302 4.98752 17.8545 4.85421 17.624L3.55721 15.377C3.42415 15.1463 3.37725 14.8759 3.42486 14.6138C3.47247 14.3518 3.6115 14.1152 3.81721 13.946L4.82121 13.119C5.11321 12.879 5.25821 12.506 5.25121 12.128C5.24964 12.043 5.24964 11.958 5.25121 11.873C5.25821 11.493 5.11321 11.122 4.82121 10.881L3.81721 10.054C3.61175 9.88489 3.47288 9.64843 3.42528 9.38662C3.37768 9.12481 3.42442 8.8546 3.55721 8.624L4.85421 6.377C4.98739 6.14614 5.19822 5.97006 5.44912 5.88014C5.70002 5.79021 5.97469 5.79229 6.22421 5.886L7.44021 6.342C7.79621 6.475 8.19121 6.414 8.51621 6.218C8.58821 6.174 8.66221 6.132 8.73621 6.09C9.06821 5.907 9.31821 5.595 9.38021 5.221L9.59421 3.94Z"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Settings</span>
          </NavLink>

          <NavLink
            to="/8"
            className={({ isActive }) =>
              `${
                isActive && "bg-[#335d84] text-white border-l-4 border-white"
              } flex items-center px-3 py-2 duration-300 text-textColor hover:text-white hover:bg-hoverColor border-transparent border-l-4 hover:border-l-4 hover:border-white rounded-e-[10px] cursor-pointer`
            }
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-75"
            >
              <path
                d="M8.25 9V5.25C8.25 4.65326 8.48705 4.08097 8.90901 3.65901C9.33097 3.23705 9.90326 3 10.5 3H16.5C17.0967 3 17.669 3.23705 18.091 3.65901C18.5129 4.08097 18.75 4.65326 18.75 5.25V18.75C18.75 19.3467 18.5129 19.919 18.091 20.341C17.669 20.7629 17.0967 21 16.5 21H10.5C9.90326 21 9.33097 20.7629 8.90901 20.341C8.48705 19.919 8.25 19.3467 8.25 18.75V15M5.25 15L2.25 12M2.25 12L5.25 9M2.25 12H15"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="mx-2 text-sm font-medium">Log Out</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
