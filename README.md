react-daterangepicker [![Build Status](https://travis-ci.org/youngerheart/react-daterangepicker.svg)](https://travis-ci.org/youngerheart/react-daterangepicker)
=========
simple react-daterangepicker base on [daterangepicker](https://github.com/ElemeFE/daterangepicker)

## DEMO
[Click here](http://youngerheart.github.io/react-daterangepicker/)

## What achieved 
1. calendar component base on moment.js
2. date simple picker
3. date range picker
4. date terminal picker

**compatibility for IE**

* Because of using browserify, if you don't need hour and minute picker, it supports IE9.
* If you need hour and minute picker, because of using range input, it supports IE10.

## Usage

This component relies on moment and moment-range, so you should include them first

      $ npm install react-daterangepicker

Include js and css in `/dist` by tag , you can also require js by `require('react-daterangepicker')`

      setSingleTime: function() {
        this.setState({
          date: moment()
        });
      },
      
      clearSingleTime: function() {
        this.setState({
          date: null
        });
      },

      render() {
        return <ReactDateRangePicker
          lang={'zh-cn'} // using language
          numberOfCalendars={1} // displaying month number
          type={'sinple'} // single, range, terminal
          time={true} // want display & ctrl hours and minutes or not
          date={moment()} // default date for type single
          range={moment.range('')} // default range for type range or terminal
          minDate={moment('2015-10-01')} // limit minDate
          maxDate={moment(2015-10-09)} // limit maxDate
          onSelect={function(date) { // callback after select, return date or range with moment and moment-range object
            // ...
          }}/>,
      }




## Develop

      $ git clone && make dev
