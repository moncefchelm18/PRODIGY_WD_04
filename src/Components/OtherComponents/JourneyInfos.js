import { BiCalendar } from "react-icons/bi";

const JourneyInfos = (props) => {
  return (
    <>
      <div className="infos-box">
        <div className="infos">
          <div className="time">
            <BiCalendar size={20} color={"#27ae60"} />
            <div>{props.date}</div>
          </div>

          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};
export default JourneyInfos;
