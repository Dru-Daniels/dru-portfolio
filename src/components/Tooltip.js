import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const ArrowTooltips = ({title, content}) => {
  return (
    <Tooltip title={title} >
      {content}
    </Tooltip>
  );
}

export default ArrowTooltips