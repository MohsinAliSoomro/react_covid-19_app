import React from 'react';

import GlobalStats from './globalStats'
import Countries from './countries'
import Graphs from './graphs'
export default function CenteredGrid({screenconfig}) {
    if(screenconfig===0){
        return (<GlobalStats />)
    }else if(screenconfig===1){
        return (<Countries />)
    }else if (screenconfig===2){
        return (<Graphs />)
    }
    else {
        return(<GlobalStats />)
    }
}
