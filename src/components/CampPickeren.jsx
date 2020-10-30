import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import '../assets/stylesheets/components/_camppicker.scss';

const Camps = ({ camps, handleCampChange }) => {
  return (
    <FormControl className="camppicker">
      <NativeSelect defaultValue="" onChange={(e) => handleCampChange(e.target.value)}>
        <option value="">Choose Refugee Camp</option>
        {camps.map((camp, i) => <option key={i} value={camp}>{camp}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Camps;