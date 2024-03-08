'use client'

import React, { useEffect, useRef, memo } from 'react';

type Props = {
  ChartSymbol : string;
}

function TradingViewWidget({ChartSymbol} : Props) {

    const container = useRef<any>();

    useEffect(() => {
      // Check if the script has already been added to prevent duplication
      if (!container.current.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"]')) {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
  
        // Construct the script content as a string, including the ChartSymbol variable
        const scriptContent = `
        {
          "symbols": [
            [
              "${ChartSymbol}|1M"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
  
        // Set the script's innerHTML to the constructed string
        script.innerHTML = scriptContent;
  
        container.current.appendChild(script);
      }
   }, [ChartSymbol]); 

    return (
        <div className='flex justify-center items-center max-container py-2 w-[350px] md:w-[800px] lg:w-[800px] h-[500px]' ref={container}>
        </div>
    );
}

export default memo(TradingViewWidget);
