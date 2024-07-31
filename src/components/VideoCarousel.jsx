import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  return (
    <>
      <div className="flex align-items">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full bg-black rounded-3xl overflow-hidden flex-center">
                <video
                  src={list.video}
                  id="video"
                  type="video/mp4"
                  playsInline={true}
                  preload="auto"
                  muted
                ></video>
                <div className="absolute top-12 left-[5%]">
                  {list.textLists.map((text) => (
                    <div key={text} className="font-medium md:text-2xl text-xl">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
