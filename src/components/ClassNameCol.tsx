
function ClassNameCol({ item,index }: any) {
  return (
    <div className="flex gap-[14px] items-center">
      <p className="text-sm font-medium text-[#A1A0A3]">{index + 1}</p>
      <div>
        <p className="text-sm font-semibold">{item.className}</p>
        <p className="text-sm font-normal text-[#5F5F61]">
          {item.isLive && (
            <span className="font-medium text-[#FF0000]">● Live </span>
          )}
          {item.classDate}
        </p>
      </div>
    </div>
  );
}

export default ClassNameCol;
