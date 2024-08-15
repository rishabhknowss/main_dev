import msg from "../assets/message.svg";
import notif from "../assets/notification.svg";
import exportimg from "../assets/exportimg.svg";
import filter from "../assets/filter.svg";
export const Navbar = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between p-3 border-b">
          <div className="font-bold flex flex-col justify-center text-lg text-slate-600">
            Dashboard
          </div>
          <div className="flex justify-center space-x-3">
            <div>
              <input
                className="bg-slate-100 rounded-lg border p-1 px-2 focus:outline-none "
                placeholder="Search"
              ></input>
            </div>
            <div className="flex flex-col justify-center">
              <img src={msg}></img>
            </div>
            <div className="flex flex-col justify-center">
              <img src={notif}></img>
            </div>
            <div>
              <div className="rounded-lg py-1 border px-1  bg-slate-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center  text-sm  p-2">
        <div className="flex justify-end space-x-2 ">
          <div className=" flex border w-fit  px-3  rounded-md">
            <div>
              <img src={exportimg}></img>
            </div>
            <div className="flex flex-col justify-center">EXPORT</div>
          </div>
          <div className="flex border w-fit  px-3  rounded-md ">
            <div>
              <img src={filter}></img>
            </div>
            <div className="flex flex-col justify-center">FILTER</div>
          </div>
        </div>
      </div>
    </div>
  );
};
