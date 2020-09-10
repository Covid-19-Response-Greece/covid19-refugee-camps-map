import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import '../assets/stylesheets/components/_camppicker.scss';

const Camps = ({ camps, handleCampChange }) => {
  return (
    <FormControl className="camppicker">
      <NativeSelect defaultValue="" onChange={(e) => handleCampChange(e.target.value)}>
        <option value="">Επιλέξτε Δομή Φιλοξενίας Προσφύγων</option>
        {camps.map((camp, i) => <option key={i} value={camp}>{camp}</option>)}
      </NativeSelect>
    </FormControl>
  );
};

export default Camps;
