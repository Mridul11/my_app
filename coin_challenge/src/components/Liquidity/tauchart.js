// import React from 'react';
// import Taucharts from 'taucharts';
// import tooltip from 'taucharts/dist/plugins/tooltip';
// import PropTypes from 'prop-types';

// class TauChart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.placeholder = React.createRef();
//   }

//   state = {
//     data: [],
//     chart: null,
//   };

//   createChart() {
//     this._chart = new Taucharts.Chart(Object.assign({}, this.props, {
//       plugins: [
//         Taucharts.api.plugins.get('tooltip')({
//           fields: ['name', 'market_cap', 'volume_24h', 'perc_change_24h_actual'],
//         }),
//       ],
//     }));
//     this._chart.renderTo(this.placeholder.current);
//   }

//   componentWillUnmount() {
//     this._chart && this._chart.destroy();
//   }

//   componentDidMount() {
//     if (this.state.data) {
//       this.createChart();
//     }
//   }

//   static getDerivedStateFromProps(props, state) {
//     if (props.data && props.data.length && props.data !== state.data && 
//         (state.data ? props.data.length !== state.data.length : !state.data) ) {
//       return {
//         ...state,
//         data: props.data.data,
//       };
//     }
//     // console.log(props, state)
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState && this.state.data && (prevState.data ? prevState.data.length !== this.state.data.length : !prevState.data)) {
//       this._chart && this._chart.destroy();
//       this.createChart();
//     }
//   }

//   render() {
//     console.log(this.props.data)
//     return (<div ref={this.placeholder} />);
//   }
// }

// TauChart.propTypes = {
//   data: PropTypes.array,
// };

// export default TauChart;

