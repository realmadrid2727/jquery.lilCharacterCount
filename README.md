jquery.lilCharacterCount
========================

A lightweight jQuery character countdown utility for text fields, similar in behavior to Twitter's countdown text box. Uses Twitter's Bootstrap classes as defaults.

### Usage</h3>
Simple:
```javascript
$("#textbox").lilCharacterCount();
```
With options:
```javascript
$("#textbox").lilCharacterCount({
  limit: 140,
  warning: 100,
  allowExceed: true,
  counterClass: "character-count",
  defaultClass: "bg-info",
  warningClass: "bg-warning",
  dangerClass: "bg-danger",
  submitButton: ""
});
```
### Options

Option | Type | Description | Default
--- | --- | --- | ----
`limit` | Number | Sets the character limit for the text box. | 140
`warning` | Number | Toggles the warning class on the counter when this character count is reached. When set to 0, it is disabled | 100
`allowExceed` | Boolean | Determines whether or not typing is allowed past the limit. | true
`submitButton` | String | ID of submit button that, if supplied, will be disabled if limit is exceeded. | *blank*
`counterClass` | String | Class for the counter. | character-count
`defaultClass` | String | Class applied to counter when the character warning or limit values haven't been exceeded. | bg-info
`warningClass` | String | Class applied to counter when the character warning values have been exceeded. | bg-warning
`dangerClass` | String | Class applied to counter when the character limit value has been exceeded. | bg-danger

### License
MIT License. Copyright 2013 Orlando de Frias. http://orlandodefrias.com