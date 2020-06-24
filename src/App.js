import React from 'react';
import PropTypes from "prop-types";
import './App.css';

import UsersOverview from "./components/UsersOverview";
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/shards-dashboards.1.1.0.min.css";
import SmallStats from "./components/SmallStats";
import {Row, Col} from "shards-react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select/Select";
import FormControl from "@material-ui/core/FormControl";

function App( {smallStats} ) {
  return (
      <div className="content">
        <Row style={{marginTop: '5%', marginLeft: '4%', marginBottom: '3%'}}>
          <FormControl style={{width: '15%'}} variant="outlined">
            <Select
                style={{width: '80%', marginRight: '2%'}}
                id="fast-selection"
                defaultValue="Country"
                label="Fast Selection"
            >
              <option disabled={true} value="Country">Country</option>
              <MenuItem value="">
              </MenuItem>

              <MenuItem> Global </MenuItem>
              <MenuItem> USA </MenuItem>
              <MenuItem> Germany </MenuItem>
              <MenuItem> Spain </MenuItem>
              <MenuItem> France </MenuItem>
              <MenuItem> Italy </MenuItem>
              <MenuItem> UK </MenuItem>
            </Select>
          </FormControl>
          <TextField
              style={{width: '80%'}}
              placeholder="Search by Brand, Product, SKU, ASIN"
              value=''
          >
          </TextField>
        </Row>
        <Row style={{margin: 20}}>
          {smallStats.map((stats, idx) => (
              <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
                <SmallStats
                    id={`small-stats-${idx}`}
                    variation="1"
                    chartData={stats.datasets}
                    chartLabels={stats.chartLabels}
                    label={stats.label}
                    value={stats.value}
                    percentage={stats.percentage}
                    increase={stats.increase}
                    decrease={stats.decrease}
                />
              </Col>
          ))}
        </Row>
        <div style={{margin: 40}}>
          <UsersOverview/>
        </div>
      </div>
  );
}

App.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

App.defaultProps = {
  smallStats: [
    {
      label: "Sales($)",
      value: "2,390",
      percentage: "4.7%",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Net Profit($)",
      value: "1,546",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Orders",
      value: "147",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "Units",
      value: "29",
      percentage: "2.71%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [1, 7, 1, 3, 1, 4, 8]
        }
      ]
    },
    {
      label: "Ad Spend($)",
      value: "17,281",
      percentage: "2.4%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(0,123,255,0.1)",
          borderColor: "rgb(0,123,255)",
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    },
    {
      label: "Refunds($)",
      value: "581",
      percentage: "4.5%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      datasets: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(123,89,184,0.1)",
          borderColor: "rgb(140,123,255)",
          data: [1, 7, 9, 2, 7, 5, 4]
        }
      ]
    }
  ]
};

export default App;
