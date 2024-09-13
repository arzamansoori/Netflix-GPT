

const VideoTitle = ({title, description}) => {
    return (
        <div className="absolute w-screen aspect-video bg-gradient-to-r from-black pt-[20%] px-20">
            <h1 className="font-bold text-2xl text-white">{title}</h1>
            <p className="w-[40%] py-6 text-lg text-white">{description}</p>
            <div>
                <button className="bg-white text-black px-7 py-2 rounded-lg hover:bg-opacity-70 font-semibold">▷ Play</button>
                <button className="mx-2 bg-white bg-opacity-30 text-white px-3 py-2 rounded-lg hover:bg-opacity-20">ⓘ More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;