import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainBowHighlight } from "./RainbowHighlight";
import userData from "../constants/data"

export default function Hero() {
    const colors = ["#435e42", "#82979a", "#524a48"];
    return (
        <div className="snap-center flex flex-row justify-center iterms-start overflow-hidden bg-neutral-100">
            {/* Text Container */}

            <div className="xl:text-9xl lg:text-8xl md:text-7xl text-6xl w-auto mx-auto-text-center md:text-left mt-20 px-40 h-auto pb-10">
                <RoughNotationGroup show={true}>
                    <RainBowHighlight color={colors[0]}>
                        <h1 className="font-bold dark:text-neutral-300 my-3">
                            Designer.
                        </h1>
                    </RainBowHighlight>
                    <RainBowHighlight color={colors[1]}>
                        <h1 className="font-bold dark:text-neutral-300 my-3">
                            Developer.
                        </h1>
                    </RainBowHighlight>
                    <RainBowHighlight color={colors[2]}>
                        <h1 className="font-bold dark:text-neutral-300 my-3">
                            Engineer.
                        </h1>
                    </RainBowHighlight>
                </RoughNotationGroup>
            </div>
            {/* Image Container */}
            <div className="relative hidden md:block w-full md:w-1/2 -mr-40 mt-20">
                <div className="w-1/2 h-3/4">
                    <img src={userData.avatarUrl} alt="avatar" className=" shadow h-350 w-300 mx-4 my-3 " />
                    <div className="flex flex-row justify-between mt-4">
                        <div className="flex flex-row space-x-4 pl-4">
                            <svg
                                xmlns="https://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="bg-zinc-800"
                                className="bi bi-arrow-90deg-up"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                                />

                            </svg>
                            <p className="font-mono dark:text-zinc-50">That's me</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}