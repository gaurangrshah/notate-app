import React from 'react';

import { useData } from '../hooks/useData'

export const SetData = ({ endpoint }) => {
  console.log('runSetData:', endpoint)
  const { data } = useData(endpoint);
  return (data) ? (
    JSON.stringify(data)
  ) : (
      <p>
        fetching...
      </p>
    )
}


/**
*
*
* [ExternalProp]
* @param {*}  endpoint  endpoint is used to get data via useData,
*
* useData, gets passed the endpoint when then gets used to fetch the data.
* fetch returns a response, we grab response.data, and pass that as data into the LinksComponent
*
*
* @returns {*} LinksConponent links={data}
*/
