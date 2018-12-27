import React from "react"
import { withParentSize } from "@vx/vx"
import { csv, scaleLinear, scan } from "d3"
import { CirclePackSeries, XYChart, XAxis, CrossHair } from "@data-ui/xy-chart"
import { compose, defaultProps, withProps, branch, renderComponent, withState, withStateHandlers } from "recompose"
import { colorScale } from "../../helpers/scales"
import "./BeeswarmChart.scss"
import Legend from "../Legend"
import Markers from "./Markers"
import HorizontalReferenceLine from "@data-ui/xy-chart/esm/annotation/HorizontalReferenceLine"

const BeeswarmChart = ({
  data,
  beeswarmData,
  margin,
  parentWidth: width,
  parentHeight: height,
  xScale,
  xSizeScale,
  maxItem,
  minItem,
  toggleHandler,
  buttonText
}) => (
  <div className={"BeeswarmChart"}>
    <h2 className="BeeswarmChart__header">
      Birth rate per 1000 persons for 2013{" "}
      <button className={"BeeswarmChart__button"} onClick={toggleHandler}>
        {buttonText}
      </button>
    </h2>
    <XYChart
      ariaLabel="Beeswarm chart showing the birth rate for different countries for the year 2013"
      width={width}
      height={height}
      margin={margin}
      xScale={{
        type: "linear",
        range: [0, width - margin.left - margin.right],
        domain: [0, Math.ceil(buttonText === "show death rate" ? maxItem.birth : maxItem.death)]
      }}
      yScale={{
        type: "linear",
        domain: [0, Math.ceil(buttonText === "show death rate" ? maxItem.birth : maxItem.death)]
      }}
      renderTooltip={({ event, data, datum }) => (
        <div>
          <div>{datum.country}</div>
          <div>{buttonText === "show birth rate" ? datum.death : datum.birth}</div>
        </div>
      )}
    >
      <Markers
        currentInfo={buttonText}
        xScale={xScale}
        minItem={minItem}
        maxItem={maxItem}
        yMax={height - margin.bottom - margin.top}
      />
      <CirclePackSeries
        data={beeswarmData}
        fill={dataItem => colorScale(dataItem.region)}
        size={dataItem => xSizeScale(dataItem.x)}
      />
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
    margin: { top: 120, right: 120, bottom: 150, left: 120 }
  }),
  withParentSize,
  withState("data", "setData"),
  withProps(async ({ data, setData }) => {
    if (!data) {
      const data = await csv("birth_rate.csv", ({ country, birth, death, code, region, id }) => ({
        country,
        birth: Number(birth),
        death: Number(death),
        code,
        region,
        id
      }))
      setData(data)
    }
  }),
  branch(({ data }) => !data, renderComponent(() => "Generating chart...")),
  withStateHandlers(
    ({ data, margin, parentWidth }) => ({
      margin,
      parentWidth,
      beeswarmData: data.map(country => ({ ...country, x: country.birth })),
      data,
      maxItem: data[scan(data, (a, b) => b.birth - a.birth)],
      minItem: data[scan(data, (a, b) => a.birth - b.birth)],
      buttonText: "show death rate",
      xScale: scaleLinear()
        .domain([0, Math.ceil(data[scan(data, (a, b) => b.birth - a.birth)].birth)])
        .range([0, parentWidth - 2 * margin.left]),
      xSizeScale: scaleLinear()
        .domain([0, Math.ceil(data[scan(data, (a, b) => b.birth - a.birth)].birth)])
        .range([2, 15])
    }),
    {
      toggleHandler: ({ data, beeswarmData, buttonText, parentWidth, margin }) => () => {
        return {
          beeswarmData: data.map(country => ({
            ...country,
            x: buttonText === "show death rate" ? country.death : country.birth
          })),
          buttonText: buttonText === "show death rate" ? "show birth rate" : "show death rate",
          maxItem:
            data[scan(data, (a, b) => (buttonText === "show death rate" ? b.death - a.death : b.birth - a.birth))],
          minItem:
            data[scan(data, (a, b) => (buttonText === "show death rate" ? a.death - b.death : a.birth - b.birth))],
          xScale: scaleLinear()
            .domain([
              0,
              Math.ceil(
                buttonText === "show death rate"
                  ? data[scan(data, (a, b) => b.death - a.death)].death
                  : data[scan(data, (a, b) => b.birth - a.birth)].birth
              )
            ])
            .range([0, parentWidth - margin.right - margin.left]),
          xSizeScale: scaleLinear()
            .domain([
              0,
              Math.ceil(
                buttonText === "show death rate"
                  ? data[scan(data, (a, b) => b.death - a.death)].death
                  : data[scan(data, (a, b) => b.birth - a.birth)].birth
              )
            ])
            .range([2, 14])
        }
      }
    }
  )
)
export default enhance(BeeswarmChart)
