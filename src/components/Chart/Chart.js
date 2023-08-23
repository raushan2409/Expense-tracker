import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {

const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
const totalMaximum = Math.max(...dataPointValues)

  return (
    <div className="chart">
      {/* <ChartBar /> */}
      {/* 12 chartbar for 12 month */}
      {/* chartbar dynamically and mapping . how we output list of content dynamically , we map every single datapoints into a chartbar components so we can create as many datapoints of component as we have chartbar and than we pass some data in chartbar */}
      {/* label as a unique identifier for the special key props here */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
