function LatestBlogsComponent(props) {
    return (
        <div className="w-full h-1/2 flex">
            <div className="w-[12%] h-full flex items-center justify-end translate-x-4">
                <span className={`lg:text-[40px] 2xl:text-[50px] text-[30px] nohemiBlack text-gray-400 ${props.id > 1 ? "translate-x-1" : ""}`}>{"0" + props.id}</span>
            </div>
            <div className='w-[5%] h-full bg-white'></div>
            <div className={`w-[80%] ${props.id < 2 ? "border-b" : "border-none"} border-black h-full flex items-center justify-between`}>
                <div className="w-[80%] h-full flex items-center justify-start px-2">
                    <span className="nohemiBlack text-[12px] lg:text-[15px] tracking-tight uppercase truncate hover:underline cursor-pointer select-none">{props.title}</span>
                </div>
                <div className="w-[20%] h-full flex items-center justify-center">
                    <span className="nohemiLight uppercase tracking-tight text-[10px] lg:text-[13px]">{props.length + " " +"min read"}</span>
                </div>
            </div>
        </div>
    )
}

export default LatestBlogsComponent;
  