import React from 'react';
import Dropdown from 'react-bootstrap/esm/Dropdown';
import DropdownButton from 'react-bootstrap/esm/DropdownButton';

function canadaMex() {
  return (
    <div className="canada-mex states">
      <br />
      <DropdownButton id='dropdown-basic-button' title='Canada'>
      
      <br />
        <Dropdown.Menu>
          <Dropdown.Item href="https://511.alberta.ca">Alberta</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://www.drivebc.ca">British Columbia</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://www.manitoba511.ca/en">Manitoba</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://www.gnb.ca/roads">New Brunswick</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://www.511nl.ca/en">Newfoundland and Labrador</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://www.dot.gov.nt.ca/highways/highway-conditions">Northwest Territories</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://511.novascotia.ca">Nova Scotia</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://511on.ca">Ontario</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://511.gov.pe.ca/en">Prince Edward Island</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://www.quebec511.info/en">Quebec</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://www.saskatchewan.ca/residents/transportation/highways/highway-hotline">Saskatchewan</Dropdown.Item>
          <br />
          <Dropdown.Item href="https://511yukon.ca">Yukon</Dropdown.Item>
        </Dropdown.Menu>
      </DropdownButton>
        <br />
        <br />
      <DropdownButton id='dropdown-basic-button' title='Mexico'>
        <br />
        <Dropdown.Menu>
        <Dropdown.Item href="https://www.gob.mx">Mexico (All States)</Dropdown.Item>
        <br />
        </Dropdown.Menu>
      </DropdownButton>
    </div>
  )
}

export default canadaMex