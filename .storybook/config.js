import { configure } from '@storybook/react';
import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
addParameters({ info: { inline: true } });
configure(require.context('../example', true, /\.story\.tsx$/), module);
