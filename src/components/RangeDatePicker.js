import React from "react";
import classNames from "classnames";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import {
  InputGroup,
  DatePicker,
} from "shards-react";

import "../assets/range-date-picker.css";

class RangeDatePicker extends React.Component {
  constructor(props) {
    super(props);

    let newDate = new Date();

    this.state = {
      startDate: undefined,
      endDate: undefined,
      date: newDate,
      thisYear: newDate.getFullYear(),
      thisMonth: newDate.getMonth(),
      today: newDate.getDate(),
    };

    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleStartDateChange(value) {

    this.setState({
      ...this.state,
      ...{ startDate: new Date(value) }
    });
  }

  handleEndDateChange(value) {

    this.setState({
      ...this.state,
      ...{ endDate: new Date(value) }
    });
  }

  render() {
    const { className } = this.props;
    const classes = classNames(className, "d-flex", "my-auto", "date-range");

    return (
        <InputGroup className={classes}>
          <DatePicker
              size="sm"
              selected={this.state.startDate}
              onChange={this.handleStartDateChange}
              placeholderText="Start Date"
              dropdownMode="select"
              className="text-center"
              id="startDate"
          />
          <DatePicker
              size="sm"
              selected={this.state.endDate}
              onChange={this.handleEndDateChange}
              placeholderText="End Date"
              dropdownMode="select"
              className="text-center"
              id="endDate"
          />
          <FormControl style={{width: 150, height: 32}} variant="outlined" className={classes.formControl}>
            <InputLabel style={{ fontSize: 11, left: 10, margin: -10, fontColor: '#F4F4F4'}} id="fast-selection">Fast Selection</InputLabel>
            <Select
                id="fast-selection"
                label="Fast Selection"
            >
              <MenuItem value="">
              </MenuItem>

              <MenuItem onClick={() => {
                this.setState({
                  startDate: this.state.date,
                  endDate: this.state.date})}} value={1}
              >
                Today
              </MenuItem>

              <MenuItem onClick={() =>{
                this.setState({
                  startDate: new Date(this.state.thisYear, this.state.thisMonth, this.state.today - 1),
                  endDate: new Date(this.state.thisYear, this.state.thisMonth, this.state.today - 1)})}} value={2}
              >
                Yesterday
              </MenuItem>

              <MenuItem onClick={() => {
                this.setState({
                  startDate: new Date(this.state.thisYear, this.state.thisMonth, this.state.today - 7),
                  endDate: new Date(this.state.thisYear, this.state.thisMonth, this.state.today)})}} value={3}
              >
                Last 7 Days
              </MenuItem>

              <MenuItem onClick={() => {
                this.setState({
                  startDate: new Date(this.state.thisYear, this.state.thisMonth, this.state.today - 30),
                  endDate: new Date(this.state.thisYear, this.state.thisMonth, this.state.today - 1)})}} value={4}
              >
                Last 30 Days
              </MenuItem>

              <MenuItem onClick={() => {
                this.setState({
                  startDate: new Date(this.state.thisYear, this.state.thisMonth, 1),
                  endDate: new Date(this.state.thisYear, this.state.thisMonth, this.state.today)})}} value={5}
              >
                This Month
              </MenuItem>

              <MenuItem onClick={() => {
                this.setState({
                  startDate: new Date(this.state.thisYear, this.state.thisMonth - 1, 1),
                  endDate: new Date(this.state.thisYear, this.state.thisMonth, 0)})}} value={6}
              >
                Last Month
              </MenuItem>

              <MenuItem onClick={() => {
                this.setState({
                  startDate: new Date(this.state.thisYear, 1 - 1, 1),
                  endDate: new Date(this.state.thisYear, this.state.thisMonth, this.state.today)})}} value={7}
              >
                This year
              </MenuItem>

              <MenuItem onClick={() => {
                this.setState({
                  startDate: new Date(2017, 4 - 1, 4),
                  endDate: new Date(this.state.thisYear, this.state.thisMonth, this.state.today - 1)})}} value={8}
              >
                Lifetime
              </MenuItem>

            </Select>
          </FormControl>
        </InputGroup>
    );
  }
}

export default RangeDatePicker;
