

const VideoTitle = ({title, description}) => {
    return (
        <div className="pt-32 px-14">
            <h1 className="font-bold text-2xl">{title}</h1>
            <p className="w-[40%] py-6 text-lg">{description}</p>
            <div>
                <button className="bg-black text-white px-7 py-2 rounded-lg">▷ Play</button>
                <button className="mx-2 bg-black bg-opacity-30 text-white px-7 py-2 rounded-lg">ⓘ More Info</button>
            </div>
        </div>
    )
};

export default VideoTitle;