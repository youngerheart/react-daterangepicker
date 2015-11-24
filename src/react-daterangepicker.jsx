const DateRangePicker = require('date-range-picker');

const ReactDateRangePicker = React.createClass({

  drp: null,

  displayName: 'ReactDateRangePicker',

  componentDidMount() {
    var {lang, numberOfCalendars, type, time, date, range, onSelect, maxDate, minDate, shortcuts} = this.props;
    var config = {
      lang,
      numberOfCalendars,
      type,
      time,
      date,
      range,
      maxDate,
      minDate,
      shortcuts,
      onSelect: onSelect
    }
    var el = React.findDOMNode(this.refs.drp);
    this.drp = new DateRangePicker(el, config);
  },

  componentWillReceiveProps(props) {
    var type = props.type;
    if(type === 'single') {
      if(props.date) this.drp.set('date', props.date);
      else this.drp.clear();
    }
    else if (type === 'range' || type === 'terminal') {
      if(props.range) this.drp.set('range', props.range);
      else this.drp.clear();
    }
  },

  render() {
    return <div className='drp' ref='drp'></div>;
  }
});

module.exports = ReactDateRangePicker;
