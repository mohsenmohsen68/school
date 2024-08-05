import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import React from 'react';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const Rtl:React.FC<React.PropsWithChildren>=({children}):JSX.Element =>{
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}

export default Rtl;
