// import React from 'react';
// import PropTypes from 'prop-types';

// import TauChart from './tauchart';

// function Liquidity({ chartData }) {
//     console.log(chartData.data)
//     // const { data } = chartData ;

//     const renderData = (data) => {
//         return data ? data.map(val => ({
//             "name": val.name,
//             "market_cap_s": `${val.quote.USD.market_cap/10000000}` , 
//             "market_cap": Math.floor(val.quote.USD.market_cap),
//             "volume_24h_s": `${val.quote.USD.volume_24h/100000000}`, 
//             "volume_24h" :val.quote.USD.volume_24h, 
//             "perc_change_24h": val.quote.USD.percent_change_24h ,
//             "perc_change_24h_actual" : val.quote.USD.percent_change_24h 
//          }) ) : [] 
//     }

//     console.log(renderData(chartData.data))    

//   const chartOptions = {
//     type: 'scatterplot',
//     x: 'market_cap_s',
//     y: 'volume_24h_s',
//     color: 'name',
//     size: 'perc_change_24h',
//     guide: {
//       x: {
//         label: { text: 'Market Cap (Unit in 10 million)', padding: 60 },
//       },
//       y: {
//         label: { text: 'Volume (24h) (unit in 100 million)' },
//       },
//     },
//     settings: {
//       fitModel: 'fit-width',
//     },
//   };

//   const props = {
//     data: renderData(chartData.data) ,
//     ...chartOptions,
//   };

//   return (
//     <TauChart {...props} />
//   );
// }

// Liquidity.propTypes = {
//   chartData: PropTypes.object,
// };

// export default Liquidity;
