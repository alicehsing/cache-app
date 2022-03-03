import React from 'react';

const Demo = ({ nestedProp }) => (
  <>{nestedProp.first?.second}</>
);

{/* <Demo nestedProp={{ first: { second: 'hello world' } }} /> */}

export default Demo;

