import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return(
    <div  className="layout">
    <Sparklines data={props.data}>
      <SparklinesBars color={props.color}/>
      <SparklinesReferenceLine type="mean" />
    </Sparklines>
    <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
