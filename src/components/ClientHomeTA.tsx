"use client";

import { TypeAnimation } from "react-type-animation";
import TextBox from "./TextBox";

const ClientHomeTA = ({ sequenceArray }: {
    sequenceArray?: (string | number)[];
}) => {
    return (
        <TextBox allowQuestions={false} buttonEffect={false}>
            <TypeAnimation className="w-full bg-slate-100 border-transparent focus:border-transparent focus:ring-0 outline-none text-sm" sequence={sequenceArray ?? []} repeat={Infinity} />
        </TextBox>
    )
}

export default ClientHomeTA;