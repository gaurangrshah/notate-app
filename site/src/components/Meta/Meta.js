import React from 'react';
import Helmet from 'react-helmet';

const Meta = () => (
  <Helmet
    meta={[
      {
        name: 'charset',
        content: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    ]}
  >
    <script src="https://kit.fontawesome.com/900da20747.js" crossorigin="anonymous" />
  </Helmet>
);

export default Meta;
