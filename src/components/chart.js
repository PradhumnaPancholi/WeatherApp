import React from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';

export default (props) => {
  return(
    <div>
    <Sparklines data={props.data}>
      <SparklinesBars color={props.color}/>
    </Sparklines>
    </div>
  );
}
