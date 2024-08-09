// simple static side bar
import {
  LayoutDashboard,
  Users,
  FileText,
  ChartNoAxesColumn,
  IndianRupee,
  Settings,
  LogOut,
} from "lucide-react";

function SideBar() {
  return (
    <div className="w-[220px] h-screen border-r pl-[20px] z-50">
      <div className="w-[200px] h-[70px] flex items-center gap-[9px]">
        <span className="w-[24px] h-[24px] bg-[#F3F3F3]"></span>
        <p className="font-semibold text-lg text-[#200E01]">Logo</p>
      </div>
      <div className="w-[200px] h-[133px] py-[10px] border-b mb-5">
        <img
          src="https://res.cloudinary.com/dg5lcmwvr/image/upload/v1723219246/John_Doe_a8lfqg.jpg"
          className="w-[50px] h-[50px] rounded-full"
          alt=""
        />
        <p className="font-medium text-base mt-1">John Doe</p>
        <p className="font-normal text-sm text-[#5F5F61]">Intermediate</p>
      </div>
      <div className="w-[200px] h-[450px] p-2 flex flex-col gap-4">
        <div className="flex gap-[12px] items-center">
          <div className="w-[34px] h-[34px] bg-[#0467FC] rounded-full flex justify-center items-center">
            <LayoutDashboard width={18} height={18} color="white" />
          </div>
          <p className="font-semibold text-sm">Dashboard</p>
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="w-[34px] h-[34px] bg-[#EFEDEA] rounded-full flex justify-center items-center">
            <Users width={18} height={18} />
          </div>
          <p className="font-normal text-sm text-[#404040]">All classes</p>
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="w-[34px] h-[34px] bg-[#EFEDEA] rounded-full flex justify-center items-center">
            <FileText width={18} height={18} />
          </div>
          <p className="font-normal text-sm text-[#404040]">Assignments</p>
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="w-[34px] h-[34px] bg-[#EFEDEA] rounded-full flex justify-center items-center">
            <ChartNoAxesColumn width={18} height={18} />
          </div>
          <p className="font-normal text-sm text-[#404040]">Performance</p>
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="w-[34px] h-[34px] bg-[#EFEDEA] rounded-full flex justify-center items-center">
            <IndianRupee width={18} height={18} />
          </div>
          <p className="font-normal text-sm text-[#404040]">Fee details</p>
        </div>
        <div className="flex gap-[12px] items-center">
          <div className="w-[34px] h-[34px] bg-[#EFEDEA] rounded-full flex justify-center items-center">
            <Settings width={18} height={18} />
          </div>
          <p className="font-normal text-sm text-[#404040]">Settings</p>
        </div>
      </div>
      <div className="flex gap-[12px] items-center">
        <div className="w-[34px] h-[34px] bg-[#EFEDEA] rounded-full flex justify-center items-center">
          <LogOut width={18} height={18} />
        </div>
        <p className="font-normal text-sm text-[#404040]">Log out</p>
      </div>
    </div>
  );
}

export default SideBar;
