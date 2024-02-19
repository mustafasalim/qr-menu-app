import { about } from "../../utils/about"

function About() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-[300px] whitespace-normal  lg:w-[1000px] text-[#b9b9b9] leading-10 font-semibold text-[22px] text-center object-cover">
        {about.element}
      </div>
    </div>
  )
}

export default About
