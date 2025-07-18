import { useEffect, useRef } from "react";
import { classNames } from "@/shared/lib";
import * as styles from "./TradingViewChart.module.scss";

interface TradingViewChartProps {
  className?: string;
  ticker: string;
  exchange: string;
}

export const TradingViewChart = (props: TradingViewChartProps) => {
  const {
    className,
    ticker,
    exchange,
  } = props;

  const container = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "allow_symbol_change": false,
          "calendar": false,
          "details": false,
          "hide_side_toolbar": false,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "hide_volume": false,
          "hotlist": false,
          "interval": "D",
          "locale": "en",
          "save_image": true,
          "style": "1",
          "symbol": "${exchange}:${ticker}",
          "theme": "light",
          "timezone": "Etc/UTC",
          "backgroundColor": "#ffffff",
          "gridColor": "rgba(46, 46, 46, 0.06)",
          "watchlist": [],
          "withdateranges": false,
          "compareSymbols": [],
          "studies": [],
          "autosize": true
        }`;
      container?.current?.appendChild(script);
    },
    []
  );

  return(
    <div className={classNames(styles.TradingViewChart, {}, [className])} ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className={styles.copyright}><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}
