export default function IPad() {
    return (
        <div className="bg-[url('/assets/ipad.jpg')] h-full">
            <div className="bg-opacity-90 bg-white mx-80 border-2 border-white rounded-lg">
                <div className="text-9xl text-center text-red-500">
                    Promotion!
                </div>
                <div className="flex justify-center">
                    <img src={"/assets/turkish_quandale_dingle.gif"} alt={"Turkish quandale dingle"} style={{height: '300px', width: 'auto'}}/>
                    <img src={"/assets/skibidi.webp"} alt={"Skibidi toilet"} style={{height: '300px', width: 'auto'}}/>
                </div>
            </div>
            <br/>
            <div className="bg-opacity-90 bg-white mx-80 border-2 border-white rounded-lg">
                <div className="text-9xl text-center flex justify-center text-red-300">
                    50% off
                </div>
                <div className="flex justify-center">
                    <img src={"/assets/authentic_ipad.jpg"} alt={"authentic ipad"} style={{height: '300px', width: 'auto'}}/>
                </div>
                <div className="flex justify-center">
                    <img src={"/assets/buy_ipad.png"} alt={"that feeling when you buy your ipad"} style={{height: '300px', width: 'auto'}}/>
                </div>
                
            </div>
            
            <div className="fixed bottom-0 left-0 border-black border-2">
                <img src={"/assets/subway_surfers.gif"} alt={"Subway Surfers"} style={{height: 'auto', width: '10vw'}}/>
                
            </div>
            <div className="fixed bottom-0 right-0 border-black border-2">
                <img src={"/assets/slime.gif"} alt={"Slime"} style={{height: 'auto', width: '20vw'}}/>
            </div>

            <div className="fixed top-20 left-0 border-black border-2">
                <img src={"/assets/looking_at_ipad.png"} alt={"guy looking at ipad"} style={{height: 'auto', width: '20vw'}}/>
            </div>

            <div className="fixed top-20 right-0 border-black border-2">
                <img src={"/assets/cows.gif"} alt={"dancing cows"} style={{height: 'auto', width: '25vw'}}/>
            </div>
            
        </div>
    );
}