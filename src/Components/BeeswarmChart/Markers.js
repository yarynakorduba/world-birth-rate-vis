import { Marker } from "@vx/vx"
import React from "react"

const Markers = ({ xScale, minBirthItem, maxBirthItem }) => (
  <>
    <Marker
      from={{ x: xScale(minBirthItem.birth), y: 0 }}
      to={{ x: xScale(minBirthItem.birth), y: 150 }}
      stroke={"black"}
      strokeWidth={1}
      label={`${minBirthItem.country} ${minBirthItem.birth}`}
      labelStroke={"none"}
      labelDx={6}
      labelDy={15}
    />
    <Marker
      from={{ x: xScale(maxBirthItem.birth), y: 0 }}
      to={{ x: xScale(maxBirthItem.birth), y: 150 }}
      stroke={"black"}
      strokeWidth={1}
      label={`${maxBirthItem.country} ${maxBirthItem.birth}`}
      labelStroke={"none"}
      labelDx={6}
      labelDy={15}
    />
  </>
)

export default Markers
