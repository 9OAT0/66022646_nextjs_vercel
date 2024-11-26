export default function HomePage() {
    return (
    <div className="bg-black text-white pb-10">
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="relative flex justify-center items-center">
                <img
                    src="/S__2940938.jpg"
                    alt="just photo"
                    className="w-[500px] h-[350px] object-cover"
                />
                <div className="absolute text-4xl font-bold z-10 text-center mix-blend-difference top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    THANACHART CHARTMONTREE
                </div>
            </div>

            <div className="text-2xl font-medium text-center mt-10">
                This my resume
            </div>
        </div>
        <div className="flex justify-center items-center">
            <div className="text-6xl font-mono">
                About me. <br />
                <p className="text-xs">
                    I'm a software developer i predict my backend-dev experience
                </p>
            </div>
        </div>
    </div>
    );
}
