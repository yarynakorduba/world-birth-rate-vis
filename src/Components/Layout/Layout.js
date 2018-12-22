import React from "react"
import { withParentSize } from "@vx/vx"
import { csv } from "d3"
import { CirclePackSeries, XYChart, XAxis, CrossHair } from "@data-ui/xy-chart"

import { compose, defaultProps, withProps, branch, renderComponent, withState } from "recompose"
import "./Layout.scss"

const Layout = ({ data, beeswarmData, margin, parentWidth: width, parentHeight: height }) => (
  <XYChart
    ariaLabel="Bar chart showing ..."
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
    <CirclePackSeries data={beeswarmData} />
    <CrossHair
      data={beeswarmData}
      showHorizontalLine={false}
      fullHeight
      fullWidth
      stroke="#343a40"
      strokeWidth={1}
      circleFill="black"
      circleSize={5}
      showCircle={true}
      circleStroke="#343a40"
    />
    <XAxis data={beeswarmData} label="Birth rate for 2013" numTicks={20} />
  </XYChart>
)

const enhance = compose(
  defaultProps({
    margin: { top: 200, right: 150, bottom: 200, left: 150 }
  }),
  withParentSize,
  withState("data", "setData"),
  withProps(async ({ data, setData }) => {
    if (!data) {
      console.log("!data", data)
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
  branch(({ data }) => !data, renderComponent(() => "Loading...")),
  withProps(({ data }) => ({
    beeswarmData: data.map(country => ({ x: country.birth, ...country }))
  }))
)
export default enhance(Layout)
