import { ScheduleInterface } from "@/utils/interfaces";

interface ScheduleProps {
  scheduleData: ScheduleInterface[]
}

const Schedule: React.FC<ScheduleProps> = ({ scheduleData }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80vw] md:w-[70vw] overflow-x-hidden">
      <h2 className="text-lg md:text-3xl font-semibold font-playfair border-t-2 border-b-2 w-full text-center
      border-[#e9d8a6] py-4 font-semibold">
        Nuestro Horario Laboral
      </h2>
      <div className="grid grid-cols-2 grid-rows-3 md:flex md:flex-row md:justify-between py-20
      w-full">
        {scheduleData.map((schedule: ScheduleInterface) => (
          <div key={schedule.id} className="flex flex-col gap-4 py-4 text-center">
            <h3 className="text-lg md:text-2xl font-semibold font-playfair">{schedule.day}</h3>
            <p className="font-bebas text-sm md:text-xl">{schedule.hoursDay}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule;
