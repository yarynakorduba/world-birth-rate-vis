import React from "react"
import { withParentSize } from "@vx/vx"
import { csv } from "d3"
import { CirclePackSeries, XYChart, XAxis, CrossHair } from "@data-ui/xy-chart"
import { compose, defaultProps, withProps, branch, renderComponent, withState } from "recompose"
import { colorScale } from "../../helpers/scales"
import "./BeeswarmChart.scss"
import Legend from "../Legend"

const BeeswarmChart = ({ data, beeswarmData, margin, parentWidth: width, parentHeight: height }) => (
  <div className={"BeeswarmChart"}>
      <h2 className="BeeswarmChart__header">Birth rate per 1000 persons for 2013</h2>
    <XYChart
      ariaLabel="Beeswarm chart showind the birth rate for different countries for the year 2013"
      width={width - margin.right - margin.left}
      height={height}
      xScale={{ type: "linear", domain: [0, 50] }}
      yScale={{ type: "linear" }}
      margin={margin}
      renderTooltip={({ event, data, datum }) => (
        <div>
          <div>{datum.country}</div>
          <div>{datum.birth}</div>
        </div>
      )}
    >
      <CirclePackSeries data={beeswarmData} fill={dataItem => colorScale(dataItem.region)} size={dataItem => 5} />
      <CrossHair
        data={beeswarmData}
        showHorizontalLine={false}
        fullHeight
        fullWidth
        stroke="#343a40"
        strokeWidth={1}
        circleFill="transparent"
        circleSize={6}
        showCircle={true}
        circleStroke="black"
      />
      <XAxis data={beeswarmData} label="Birth rate" numTicks={20} />
    </XYChart>
    <Legend />
  </div>
)

const enhance = compose(
  defaultProps({
    margin: { top: 100, right: 120, bottom: 200, left: 120 }
  }),
  withParentSize,
  withState("data", "setData"),
  withProps(async ({ data, setData }) => {
    if (!data) {
      const data = await csv("birth_rate.csv", ({ country, birth, code, region, id }) => ({
        country,
        birth: Number(birth),
        code,
        region,
        id
      }))
      setData(data)
    }
  }),
  branch(({ data }) => !data, renderComponent(() => "Generating chart...")),
  withProps(({ data }) => ({
    beeswarmData: data.map(country => ({ x: country.birth, ...country }))
  }))
)
export default enhance(BeeswarmChart)
