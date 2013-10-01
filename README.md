jquery.lilCharacterCount
========================

A lightweight jQuery character countdown utility for text fields, similar in behavior to Twitter's countdown text box. Uses Twitter's Bootstrap classes as defaults.

### Usage</h3>
Simple:
```javascript
$("#textbox").lilCharacterCount();
```
As used in demo:
```javascript
$("#textbox").lilCharacterCount({
  limit: 100,
  warning: 50
});
```
### Options

Option | Type | Description | Default
--- | --- | --- | ----
`limit` | Number | Sets the character limit for the text box. | 140
`warning` | Number | Toggles the warning class on the counter when this character count is reached. When set to 0, it is disabled | 100
`allowExceed` | Boolean | Determines whether or not typing is allowed past the limit. | true
`submitButton` | String | *Optional* ID of submit button that will be disabled if limit is exceeded. | *blank*
`counterClass` | String | Class for the counter. | character-count
`defaultClass` | String | Class applied to counter when the character warning or limit values haven't been exceeded. | bg-info
`warningClass` | String | Class applied to counter when the character warning values have been exceeded. | bg-warning
`dangerClass` | String | Class applied to counter when the character limit value has been exceeded. | bg-danger

### License
MIT License. Copyright 2013 Orlando de Frias. http://orlandodefrias.com