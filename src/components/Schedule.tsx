import { ScheduleInterface } from "@/utils/interfaces";

interface ScheduleProps {
  scheduleData: ScheduleInterface[]
}

const Schedule: React.FC<ScheduleProps> = ({ scheduleData }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-semibold font-playfair border-t-2 border-b-2 w-full text-center
      border-[#e9d8a6] py-4 font-semibold">
        Nuestro Horario Laboral
      </h2>
      <div className="flex flex-row w-full md:w-[70vw] justify-between py-20">
        {scheduleData.map((schedule: ScheduleInterface) => (
          <div key={schedule.id} className="flex flex-col gap-4 py-4">
            <h3 className="text-2xl font-semibold font-playfair">{schedule.day}</h3>
            <p className="font-bebas text-lg">{schedule.hoursDay}</p>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Schedule;
