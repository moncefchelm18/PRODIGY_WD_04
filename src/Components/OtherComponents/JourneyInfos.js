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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            soluta, sapiente eligendi eum, dolor possimus nam ab dicta optio ut,
            a cupiditate? Dicta soluta iusto fuga? Accusamus, nobis! Magni,
            impedit.
          </p>
        </div>
      </div>
    </>
  );
};
export default JourneyInfos;
