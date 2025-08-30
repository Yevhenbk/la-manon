import classNames from "classnames"
import { LabelCardInterface } from "@/utils/interfaces"

interface LabelInterface {
  labelData: LabelCardInterface
}

const LabelCard: React.FC<LabelInterface> = ({ labelData }) => {
  return (
    <div className={classNames(`text-[#E9E9E9] 
    flex flex-col p-8 xl:p-16 items-start justify-between 
    gap-8 rounded-xl flex-1`, {
      "bg-[#083459]": labelData.background === "dark",
      "bg-[#0d4e83]": labelData.background === "light",
    })}>
      <p className="text-4xl md:text-5xl xl:text-7xl 
      font-medium">
        {labelData.label}
      </p>
      <p className="text-xl xl:text-2xl">
        {labelData.title}
      </p>
    </div>
  )
}

export default LabelCard