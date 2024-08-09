import { Checkbox } from "@/components/ui/checkbox";

interface ClassListHeaderProps {
  isFiltered: boolean;
  setIsFiltered: (filtered: boolean) => void;
}

function ClassListHeader({ isFiltered, setIsFiltered }: ClassListHeaderProps) {
  const handleCheckboxChange = () => {
    setIsFiltered(!isFiltered);
  };

  return (
    <div className="flex flex-row justify-between items-center mb-3">
      <div className="">
        <p className="font-semibold text-lg text-[#313336]">Upcoming classes</p>
        <p className="font-normal text-xs text-[#5F5F61]">For next 7 days</p>
      </div>
      <div className="flex flex-row items-center gap-[10px]">
        <p className="font-medium text-base text-[#313336]">Booked only</p>
        <Checkbox onClick={handleCheckboxChange} />
      </div>
    </div>
  );
}

export default ClassListHeader;
