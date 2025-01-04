import { Button } from "antd";

function SuccessCard() {
  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center text-lg font-bold text-[#04B051]">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.23533L5.11765 12.353L15 1.64709"
              stroke="#20AE5C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Success</span>
        </div>
        <a
          className="px-4 py-1 text-sm font-bold text-mainColor border border-mainColor hover:bg-mainColor hover:text-white transition-colors duration-300 transform rounded cursor-pointe"
          tabIndex="0"
          role="button"
        >
          <span className=" text-2xl">x</span>
        </a>
      </div>

      <div className="mt-2">
        <p className="text-sm text-[#323F49]">
          The employee profile has been created successfuly
        </p>
      </div>

      <div className="flex items-center justify-end gap-4 mt-8">
        <Button className="px-6 py-5 text-mainColor rounded-md font-semibold">
          View Profile
        </Button>
        <Button className="px-9 py-5 text-white bg-mainColor rounded-md font-semibold">
          Create Another Employee
        </Button>
      </div>
    </div>
  );
}

export default SuccessCard;
