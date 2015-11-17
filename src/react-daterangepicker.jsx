const DateRangePicker = require('date-range-picker');

const ReactDateRangePicker = React.createClass({

  drp: null,

  displayName: 'ReactDateRangePicker',

  componentDidMount() {
    var {lang, numberOfCalendars, type, time, date, range, onSelect} = this.props;
    var config = {
      lang: lang,
      numberOfCalendars: numberOfCalendars,
      type: type,
      time: time,
      date: date,
      range: range,
      onSelect: onSelect
    }
    var el = React.findDOMNode(this.refs.drp);
    this.drp = new DateRangePicker(el, config);
  },

  componentWillReciveProps(props) {
    console.log(props);
  },

  render() {
    return <div className='drp' ref='drp'></div>;
  }
});

module.exports = ReactDateRangePicker;
