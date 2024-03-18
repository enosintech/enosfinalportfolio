function ReviewsComponent(props) {
  return (
    <div className="w-[75%] h-[70%] flex flex-col">
        <div className="w-full h-[80%] flex items-center justify-center px-5">
            <p className="text-[14px] text-white text-justify nohemiLight">{props.review.testimonial}</p>
        </div>
        <div className="w-full h-[20%] flex items-center justify-between text-white px-2 text-[14px]">
            <div className="flex flex-col">
            <span className="nohemiExtraBold">{props.review.name}</span>
            <span className="nohemiExtraLight">{props.review.designation}</span>
            </div>
            <span className="nohemiRegular">{props.review.company}</span>
        </div>
    </div>
  )
}

export default ReviewsComponent;
