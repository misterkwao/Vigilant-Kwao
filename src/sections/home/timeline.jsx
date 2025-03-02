import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Terminal, ArrowDown, Check } from "lucide-react";
import { timelineElements } from "../../data/workTimeline";

export const Timeline = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const increment = 1;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + increment, timelineElements.length)
    );
  };

  return (
    <div className="px-6 md:px-12 mt-10 flex flex-col justify-center items-center">
      <p className="flex justify-center items-center text-2xl text-center font-bold font-[doto] mb-2">
        <Terminal /> Timeline
      </p>
      <VerticalTimeline lineColor="#d1d5db">
        {timelineElements.slice(0, visibleCount).map((element) => (
          <VerticalTimelineElement
            key={element.key}
            contentStyle={{
              background: "rgba(33, 37, 41, 0.9)",
              color: "#fff",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              padding: "20px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #6366F1" }}
            date={element.date}
            iconStyle={{
              background: "#1E293B",
              color: "#fff",
              justifyContent: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            icon={<element.icon />}
          >
            <h3 className="text-xl font-semibold text-white">
              {element.title}
            </h3>
            <h4 className="text-md text-gray-300">{element.company}</h4>
            <h4 className="text-md text-gray-300">{element.location}</h4>
            <p className="text-sm text-gray-400 leading-relaxed mt-2">
              {element.description}
            </p>
          </VerticalTimelineElement>
        ))}
        {visibleCount < timelineElements.length && (
          <VerticalTimelineElement
            iconStyle={{
              background: "#1E293B",
              color: "#fff",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
            icon={
              visibleCount < timelineElements.length ? <ArrowDown /> : <Check />
            }
            iconOnClick={handleLoadMore}
          ></VerticalTimelineElement>
        )}
      </VerticalTimeline>
    </div>
  );
};
