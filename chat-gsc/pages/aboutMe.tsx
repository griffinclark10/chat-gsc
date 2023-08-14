import Response from "@/components/Response"
import TextBox from "@/components/TextBox"
import Typewriter from "@/components/TypeWriter"

const AboutMe = () => {
    return (
        <>
        <Response />
        <div className='flex-grow'></div>
        <TextBox allowQuestions={false} sequenceArray={[2000, "Tell me a bit about Griffin"]} />
        </>
    )
}

export default AboutMe