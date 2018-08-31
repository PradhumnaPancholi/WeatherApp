import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesBars, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return(
    <div>
    <Sparklines data={props.data}>
      <SparklinesBars color={props.color}/>
      <SparklinesReferenceLine type="mean" />
    </Sparklines>
    //for displaying average data//
    <div>{average(props.data)}</div>
    </div>
  );
}
