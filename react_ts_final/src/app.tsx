import * as React from 'react';
import * as ReactDom from 'react-dom';

import { HelloComponent } from './hello';

ReactDom.render(
    <HelloComponent userName="Candy" />,
    document.getElementById('root')
)
