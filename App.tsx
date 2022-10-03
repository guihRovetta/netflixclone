import React from 'react';

import {RootProvider} from '@internal/providers';
import {mockServer} from '@internal/server/mirage-js';

mockServer();

const App = () => <RootProvider />;

export default App;
