export default function Quiz() {
    return (
        <div className="bg-[url('/assets/dont_take_drugs.png')] h-screen">
            <div className="bg-opacity-90 bg-white text-center">
                {"Drugs aren't good. They're not food."}
                <br/>
                
            </div>
            <div className="fixed bottom-0 left-0 border-black border-2">
                <img src={"/assets/subway_surfers.gif"} alt={"Subway Surfers"} style={{height: '300px', width: 'auto'}}/>
            </div>
            
        </div>
    );
}