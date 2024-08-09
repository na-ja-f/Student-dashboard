// columm for showing respective tutor names and their image

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function StaffNameCol({ item }: any) {
  return (
    <div className="flex gap-[14px] items-center">
      {/* shadcn avatar component */}
      <Avatar>
        <AvatarImage src={item.image} />
        <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-semibold">{item.name}</p>
        <p className="text-sm font-normal text-[#5F5F61]">Additional details</p>
      </div>
    </div>
  );
}

export default StaffNameCol;
