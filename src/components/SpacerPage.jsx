function SpacerPage() {
  return (
    <>
        <div className="w-full h-[300svh] flex flex-col spacer relative z-[11] bg-black">
          <div className="w-full min-h-[100svh] flex items-center justify-center makeWideTrigger">
            <img className="h-[95%] w-0 rounded-2xl bg-white makeWide"/>
          </div>
          <div className="w-full h-[200svh] flex flex-col makeWiderTrigger">
            <div className="w-full min-h-[100svh] h-[100svh] flex items-center justify-center widePin">
              <div className="h-[95%] w-0 rounded-2xl bg-white makeWider"></div>
            </div>
            <div className="w-full min-h-[100svh] h-[100svh] borderTrigger">

            </div>
          </div>
        </div>
    </>
  )
}

export default SpacerPage;
