import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../components/Card';
import { request } from '../functions/Request';
import { addCards } from '../models/Action';

const Team = ( props ) => {
  const { team } = props;
  const [page, setPage] = useState(0); 
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{ addData() },[ page ]);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout))
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(page + 1);
    wait(2000).then(() => setRefreshing(false))
  },[])

  const dispatchData = ( team, data ) => dispatch(addCards( team, data ));

  const addData = async() => {
    let result = await request(team,page);
    if (result){
      dispatchData(team, result)
    }
  }

  return (  
    <FlatList 
      data={props.data}
      keyExtractor={(item) => item['id'] ?? Math.random().toString()}
      renderItem={({item}) => <Card data={item}/>}
      refreshControl={<RefreshControl colors={['red', 'crimson']} refreshing={refreshing} 
        onRefresh={onRefresh}/>}
    />    
  )
}

Team.propTypes = {
  team: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

export default Team;