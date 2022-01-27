import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { colourOptions } from "./data.js";
import { default as ReactSelect } from "react-select";
// import "../styles/CustomDropdown.scss";
import { components } from "react-select";

const colourOptions = [
  { value: "Oud", label: "Oud" },
  { value: "Leather", label: "Leather" },
  { value: "Rose", label: "Rose" },
  { value: "Lychee", label: "Lychee" },
  { value: "Pink Pepper", label: "Pink Pepper" },
  { value: "Olive Blossom", label: "Olive Blossom" },
  { value: "Juniper", label: "Juniper" },
  { value: "Amber", label: "Amber" },
  { value: "Mint", label: "Mint" },
  { value: "Ambrox", label: "Ambrox" },
  { value: "Pomegranate", label: "Pomegranate" },
  { value: "Licorice", label: "Licorice" },
  { value: "Jasmine", label: "Jasmine" },
  { value: "Incense", label: "Incense" },
];

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null
    };
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected
    });
  };

  render() {
    return (
      <span
        class="d-inline-block"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          options={colourOptions}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option
          }}
          onChange={this.handleChange}
          allowSelectAll={true}
          value={this.state.optionSelected}
        />
      </span>
    );
  }
}
