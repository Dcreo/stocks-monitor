import { classNames } from "@/shared/lib";
import * as styles from "./SimpleChart.module.scss";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineProps } from 'recharts';
import { IHistory } from "@/entities/Histrory";
import { CurveType } from "recharts/types/shape/Curve";
import { useEffect } from "react";

interface SimpleChartProps {
  className?: string;
  data: IHistory[];
  lines: LineProps[];
}

export const SimpleChart = (props: SimpleChartProps) => {
  const {
    className,
    data,
    lines
  } = props;

  useEffect(() => {
    console.warn(data)
  }, [data])

  // TODO domain range

  return(
    <div className={classNames(styles.SimpleChart, {}, [className])}>
      <ResponsiveContainer width="100%" aspect={1.618} maxHeight={500}>
        <LineChart
          responsive
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dateLabel" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          {!!lines.length && (
            <>
              {Object.values(lines).map((line: LineProps) => {
                return <Line 
                  type={line.type as CurveType}
                  name={line.name}
                  dataKey={line.dataKey}
                  label={line.label}
                  stroke={line.stroke} />
              })}
            </>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
