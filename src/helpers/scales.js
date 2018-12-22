import { scaleOrdinal } from "d3"

export const colorScale = scaleOrdinal()
  .domain(["Africa", "America", "Asia", "Oceania", "Europe"])
  .range(["#f5e11b", "#000095", "#95278a", "#059594", "#95040f"])
