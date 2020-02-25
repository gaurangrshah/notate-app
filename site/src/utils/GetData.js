import React, { useState } from 'react'
import { Fetcher } from './Fetcher'


// TODO: bring in context, to help setup array of endpoints.

export const GetData = () => {

  const [endpoint, setEndpoint] = useState('')
  // used to update and manage the final selected endpoint that gets passed back from EndpointSelector via Fetcher.

  const endpoints = [
    'http://localhost:3000/reactLinks',
    "https://my-json-server.typicode.com/gaurangrshah/api-sandbox/reactLinks/",
    'http://localhost:3000/users',
    "https://my-json-server.typicode.com/gaurangrshah/api-sandbox/users"
  ]
  // endpoints available to select from, that get passed down to EndpointSelector via Fetcher

  // console.log('EndpointSelected?:', endpoint);

  const handleFetch = (e) => {
    // console.log('endpointpassedback:', endpoint)


    if (!endpoint) {
      // logic to handle resubmits on the form, when an endpoint is already submitted.
      return setEndpoint(endpoint)
    } else {
      // if endpoint already exists, will unmount component, by removing endpoint.
      setEndpoint('')
    }
  }



  return (
    /* renders <EndpointSelector/> and it's button based UI */
    <Fetcher clickHandler={handleFetch} endpoints={endpoints} setEndpoint={setEndpoint} endpoint={endpoint} />
  )
}


/**
*
*
* [internalState]
* @param {*}  endpoint
* used to toggle setData from Fetcher, when provided with a
*
* @callback {*}   setEndpoint
* updates the endpoing value when a user selects an endpoint from the EndpointSelector component
*
* @returns {*} Fetcher which handles the logic for what to fetch and when to fetch which.
*/
