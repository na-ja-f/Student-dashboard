// simple static header

function Header() {
  return (
    <div className="h-[130px] mb-2 bg-white pl-10">
      <div className="h-[70px] py-[24px] flex gap-[30px] text-xs font-normal text-[#5A5C60]">
        <p>Blogs</p>
        <p>News</p>
        <p>Help center</p>
        <p>Customer care</p>
      </div>
      <div className="h-[60px] py-[24px] font-bold text-[24px] flex items-center">
        Dashboard
      </div>
    </div>
  )
}

export default Header
