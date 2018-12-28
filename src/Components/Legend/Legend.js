import React from "react"
import { LegendOrdinal } from "@vx/vx"
import { colorScale } from "../../helpers/scales"

import "./Legend.scss"

const Legend = () => (
  <div className={"Legend"}>
    <LegendOrdinal scale={colorScale} />
    <i>bubble size corresponds to the GDP rate per capita</i>
  </div>
)
export default Legend
