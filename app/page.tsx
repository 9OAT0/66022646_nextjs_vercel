export default function HomePage() {
    return (
    <div className="bg-black text-white">
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

            <div className="text-2xl font-medium text-center mt-10 font-mono">
                This my Portfolio.
            </div>
        </div>
        <div className="flex flex-col items-center min-h-screen">
            <div className="text-6xl font-mono">
                About me. <br />
                <p className="text-base">
                    I am a software developer i predict my backend-dev experience <br />
                    my hobby is <a href="HobbyPage" className="hover:border-white hover:border-b-2"> street photography </a> 
                </p>
                <br />
                Experience <br />
                <p className="text-base">
                    Javascript <br />
                    Python <br />
                    Java <br />
                    HTML CSS <br />
                    NuxtJS <br />
                    NextJS 
                </p>
                <br />
                Contact <br />
                <p className="text-base">
                    <a href="https://www.facebook.com/ThanachartwantTokickUAss/" target="_blank" className="hover:border-white hover:border-b-2">facebook</a> <br />
                    <a href="https://www.instagram.com/oreoatt/?hl=th" target="_blank" className="hover:border-white hover:border-b-2">Instagram</a> <br />
                    tel : 0943691074
                </p>

            </div>
        </div>
    </div>
    );
}
