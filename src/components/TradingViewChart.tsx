'use client'

import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const container = useRef<any>();

    useEffect(() => {
        // Check if the script has already been added to prevent duplication
        if (!container.current.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"]')) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "0",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": false,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
            container.current.appendChild(script);
            // Prevent redirection
            const preventRedirection = (event: any) => {
                event.preventDefault();
            };

            // Add event listener to prevent redirection
            container.current.addEventListener('click', preventRedirection);

            // Cleanup on unmount
            return () => {
                container.current.removeEventListener('click', preventRedirection);
            };
        }
    }, []);

    return (
        <div className='flex justify-center items-center max-container py-8 w-[350px] sm:[700px] md:w-[800px] lg:w-[800px] h-[500px]' ref={container}>
            {/* TradingView widget will be inserted here */}
        </div>
    );
}

export default memo(TradingViewWidget);
