import React from 'react';
import {
  storiesOf,
  action
} from '@storybook/react';

import TextInputBox from './TextInputBox';
import TextInputBoxThemes, { darkTheme } from './TextInputBoxThemes';

import { colors } from "../styles/colors";


storiesOf('Form', module)
  .addWithChapters(
    'TextInputBox',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import {TextInput} from 'insidesales-components';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: text input empty',
              sectionFn: () => (
                <TextInputBox
                  label="Label"
                  name="a"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: disabled text input empty',
              sectionFn: () => (
                <TextInputBox
                  label="Label"
                  name="b"
                  disabled
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: text input with error',
              sectionFn: () => (
                <TextInputBox
                  label="Label"
                  name="c"
                  error="hello world"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: text input empty no label',
              sectionFn: () => (
                <TextInputBox
                  label=""
                  inputType="number"
                  name="d"
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: disabled text input, no label',
              sectionFn: () => (
                <TextInputBox
                  label=""
                  value="hello world"
                  name="e"
                  onChange={action('value')}
                  disabled
                />
              )
            },
            {
              title: 'Example: dark theme',
              sectionFn: () => (
                <TextInputBox
                  label="This is a test"
                  value="I am dark"
                  onChange={action('value')}
                  theme={darkTheme}
                />
              )
            },
            {
              title: 'Example: Stateless',
              sectionFn: () => (
                <TextInputBox
                  label="This is a test"
                  value="I am stateless"
                  onChange={action('value')}
                  stateless
                />
              )
            },
            {
              title: 'Example: Stateless no value',
              sectionFn: () => (
                <TextInputBox
                  label="This is a test"
                  value=""
                  onChange={action('value')}
                  stateless
                />
              )
            },
            {
              title: 'Example: boolean value, true',
              sectionFn: () => (
                <TextInputBox
                  label="This is a test"
                  value={true}
                  onChange={action('value')}
                />
              )
            },
            {
              title: 'Example: boolean value, false',
              sectionFn: () => (
                <TextInputBox
                  label="This is a test"
                  value={false}
                  onChange={action('value')}
                  stateless
                />
              )
            },
            {
              title: 'Example: helper',
              sectionFn: () => (
                <TextInputBox
                  label="This is a test"
                  value={false}
                  onChange={action('value')}
                  stateless
                  helper="Help me Obi-Wan Kenobi"
                />
              )
            },
            {
              title: 'Example: dark theme with error',
              sectionFn: () => (
                <div style={{
                  background: colors.black40,
                  padding: '15px',
                }}>
                  <TextInputBox
                    label="This is a test"
                    theme={TextInputBoxThemes.darkTheme}
                    value="error"
                    onChange={action('value')}
                    error
                  />
                </div>
              )
            },
            {
              title: 'Example: text input with options',
              sectionFn: () => (
                <div style={{ width: '140px' }}>
                  <TextInputBox
                    label="Country"
                    onChange={action('value')}
                    selectOptionsWidth={400}
                    options={[
                      {
                        label: '+1 (US)',
                        value: '+1'
                      },
                      {
                        label: '+44 (UK)',
                        value: '+44'
                      },
                      {
                        label: '+35 (AB)',
                        value: '+35'
                      },
                      {
                        label: '+45 (CD)',
                        value: '+45'
                      }
                    ]}
                  />
                </div>
              )
            },
            {
              title: 'Example: text input with placeholder',
              sectionFn: () => (
                <TextInputBox
                  label="Placeholder"
                  onChange={action('value')}
                  placeholder="what a beautiful placeholder"
                />
              )
            },
          ]
        }
      ]
    }
  );
