

const VideoTitle = ({title, description}) => {
    return (
        <div className="absolute w-screen aspect-video bg-gradient-to-r from-black pt-[35%] md:pt-[16%] pl-16">
            <h1 className="font-bold text-3xl text-white">{title}</h1>
            <p className="hidden md:inline-block w-[40%] py-5 text-lg text-white">{description}</p>
            <div className="py-3 md:py-0">
                <button className="bg-white text-black px-7 py-2 rounded-lg hover:bg-opacity-70 font-semibold">▷ Play</button>
                <button className="hidden md:inline-block mx-2 bg-white bg-opacity-30 text-white px-3 py-2 rounded-lg hover:bg-opacity-20">ⓘ More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;