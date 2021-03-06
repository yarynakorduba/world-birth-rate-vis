import { Marker } from "@vx/vx"
import React from "react"

const Markers = ({ xScale, minItem, maxItem, yMax, currentInfo }) => (
  <>
    <Marker
      from={{ x: xScale(currentInfo === "show death rate" ? minItem.birth : minItem.death), y: 0 }}
      to={{ x: xScale(currentInfo === "show death rate" ? minItem.birth : minItem.death), y: yMax }}
      stroke={"black"}
      strokeWidth={1}
      label={`${minItem.country} ${currentInfo === "show death rate" ? minItem.birth : minItem.death}`}
      labelStroke={"none"}
      strokeDasharray="2 2 2"
      labelDx={6}
      labelDy={15}
    />
    <Marker
      from={{ x: xScale(currentInfo === "show death rate" ? maxItem.birth : maxItem.death), y: 0 }}
      to={{ x: xScale(currentInfo === "show death rate" ? maxItem.birth : maxItem.death), y: yMax }}
      stroke={"black"}
      strokeWidth={1}
      strokeDasharray="2 2 2"
      label={`${maxItem.country} ${currentInfo === "show death rate" ? maxItem.birth : maxItem.death}`}
      labelStroke={"none"}
      labelDx={6}
      labelDy={15}
    />
  </>
)

export default Markers
