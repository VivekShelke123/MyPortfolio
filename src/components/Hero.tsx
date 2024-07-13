import MagicButtons from "./ui/Magic-Buttons";
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect";


const Hero = () => {
    return (
        <div>
            <div className="w-full">
                <Spotlight className="-top-40 -left-30" fill="white" />
                <Spotlight className="-top-40 -left-30" fill="purple" />
                <Spotlight className="-top-10 left-full" fill="white" />
                <Spotlight className="-top-10 left-full " fill="blue" />
                <Spotlight className="" fill="blue" />
            </div>
            <div className="h-screen w-full  bg-black-100  bg-grid-white/[0.03] absolute flex items-center justify-center left-0 top-0 -z-10">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>
            <div className="flex justify-center relative my-10 z-10">
                <div className="max-w-[89vw] md:max-w-2xl mt-10">
                <TextGenerateEffect
                className="text-white text-center text-7xl"
                words="Hi I'm Vivek Shelke"
                />
                <TextGenerateEffect
                className="text-white text-center text-3xl mb-0"
                words="A Passionate Web Devloper"
                />
                </div>
                
            </div>
                
        </div>
    )
}

export default Hero;
