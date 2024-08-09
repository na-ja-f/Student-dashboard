import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import UpcomingClasses from "./UpcomingClasses";
import AssignmentsBox from "@/components/AssignmentsBox";

function DashBoard() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col bg-[#F6F6F7]">
        <Header />
        <div className="flex">
        <UpcomingClasses />
        {/* side static box to view assignments */}
        <AssignmentsBox />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
