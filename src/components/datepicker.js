import React from 'react'
import { connect } from 'react-redux';
import {Button,} from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt } from "react-icons/fa";
import { withTranslation } from 'react-i18next';
import DatePicker, { registerLocale }  from "react-datepicker";
import Th from 'date-fns/locale/th';
import moment from 'moment';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";

const years = range(1950, getYear(new Date()) + 1, 1);
const months = [
  {en:"January",th:"มกราคม"},
  {en:"February",th:"กุมภาพันธ์"},
  {en:"March",th:"มีนาคม"},
  {en:"April",th:"เมษายน"},
  {en:"May",th:"พฤษภาคม"},
  {en:"June",th:"มิถุนายน"},
  {en:"July",th:"กรกฏาคม"},
  {en:"August",th:"สิงหาคม"},
  {en:"September",th:"กันยายน"},
  {en:"October",th:"ตุลาคม"},
  {en:"November",th:"พฤศจิกายน"},
  {en:"December",th:"ธันวาคม"}
];
const MySwal = withReactContent(Swal);

const buttonStyle = {
    height:"2em", padding:"0 .25em"
}

const selectStyle = {
    borderRadius:"5px", padding:"0 .5em"
}

class CustomInput extends React.Component {
    handleValue = (date) => {
      if (date) {
          const d = date.split("-");
          const tDate = new Date(d[2]+'-'+d[1]+'-'+d[0]);
          let dd = ((tDate.getDate() < 10)? '0' : '').concat(tDate.getDate());
          let MM = (((tDate.getMonth() + 1) < 10)? '0' : '').concat(tDate.getMonth() + 1);
          let yyyy = Number(tDate.getFullYear());
          return dd+'-'+MM+'-'+yyyy;
      }
    }
  
    render() {
      return (
        <input placeholder="วัน/เดือน/ปีเกิด" 
        disabled={this.props.disabled}
        className={this.props.className} name={this.props.name} onClick={this.props.onClick} value={this.handleValue(this.props.value)} onChange={()=>{}} readOnly/>
      );
    }
  }

class CustomerDatePicker extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    componentDidMount(){
      const { value } = this.props;
      if (value) {
        //const time = moment(value).format('DD-MM-YYYY')
        const time = new Date(value)
        if (time instanceof Date && !isNaN(time)) {
          this.setState({date: time})
        } else {
          console.log("props value is invalid time.");
        }
      }
    }

    async componentDidUpdate(prevProps) {
      if (this.props.value != prevProps.value) {
        const { value } = await this.props;
        const time = await new Date(value)
        if (time instanceof Date && !isNaN(time)) {
          await this.setState({date: time})
        } else {
          console.log("props value is invalid time.");
        }
      }
    }

    

    onDatepickerRef = (el) => {
        if (el && el.input) {
          el.input.readOnly = true;
        }
    }

    handleMonth = (date) => {
        const { t, i18n } = this.props;
        // if (i18n.language == 'th') {
        //     return months.filter((item,index) => {
        //         return index == moment(date).get("month");
        //     }).map(ele => ele.th)[0];
        // } else {
        //     return months.filter((item,index) => {
        //         return index == moment(date).get("month");
        //     }).map(ele => ele.en)[0];
        // }
        return months.filter((item,index) => {
            return index == moment(date).get("month");
        }).map(ele => ele.th)[0];
    }

    setDate = (date) => {
      let dd = (moment(date).get("date") < 10 ? '0' : '') + moment(date).get("date");
      let MM = ((moment(date).get("month") + 1) < 10 ? '0' : '') + (moment(date).get("month") + 1);
      let yyyy = moment(date).get("year");
      return dd+'-'+MM+'-'+yyyy;
    }

    dateChange = (date) => {

        let dd = (moment(date).get("date") < 10 ? '0' : '') + moment(date).get("date");
        let MM = ((moment(date).get("month") + 1) < 10 ? '0' : '') + (moment(date).get("month") + 1);
        let yyyy = moment(date).get("year");
        this.setState({
            date: date
        });
        // this.props.onChange(dd+'-'+MM+'-'+yyyy)
        this.props.onChange(yyyy+'-'+MM+'-'+dd)
    }

    render() {
        
        const { t, i18n, className, name, placeholder,disabled } = this.props;
        
        return (
            <DatePicker 
                  placeholder={placeholder} 
                  onChange={this.dateChange}
                  maxDate={new Date()}
                  selected={this.state.date} 
                  className={className}
                  disabled={disabled}
                  name={name}
                  dateFormat="dd-MM-yyyy"
                  locale={Th}
                  ref={el => this.onDatepickerRef(el)} 
                  customInput={ <CustomInput /> }
                  renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled
                  }) => (
                    <div
                      style={{
                        margin: 5,
                        display: "flex",
                        justifyContent: "space-between"
                      }}
                    >
                      <Button style={buttonStyle}
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                      >
                        <FaChevronLeft/>
                      </Button>
                      <span style={{fontSize:"1.5em"}}>{this.handleMonth(date)}</span>
                      <select style={selectStyle}
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                      >
                        {years.map(option => (
                          <option key={option} value={option}>
                            {option+543}
                          </option>
                        ))}
                      </select>
                      {/* {getYear(date)+543} */}
      
                      
                      <Button style={buttonStyle}
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                      >
                        <FaChevronRight/>
                      </Button>
                    </div>
                  )}
                />
        )
    }
  }

export default withTranslation(["home"])(CustomerDatePicker);