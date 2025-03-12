# TextInput

A component to allow users to input text.

## TextInputProps

| Props          | Type                                                         | Optional | Default Value | Description                   |
| -------------- | ------------------------------------------------------------ | -------- | ------------- | ----------------------------- |
| containerStyle | StyleProp<ViewStyle>                                         | Yes      | undefined     | The custom container style    |
| disabled       | boolean                                                      | Yes      | false         | Define disable status         |
| status         | [TextInputStatus](#textinputstatus--success--warning--error) | Yes      | undefined     | Define the `TextInput` status |
| label          | string                                                       | Yes      | undefined     | The `TextInput` label         |
| testID         | string                                                       | Yes      | undefined     | -                             |
| icon           | keyof typeof `Icon`                                          | Yes      | undefined     | The icon of `TextInput`       |

### TextInputStatus = 'success' | 'warning' | 'error';
