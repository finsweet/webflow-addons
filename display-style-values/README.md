# Display Style Values

Users can display any CSS property of an element on the page. There are multiple available options:

## Setting an element to display a style value

With the following attribute, an element will display a CSS property value:

| Attribute            | Accepted values                                                                           | Description                                                                                                    |
| -------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `data-display-style` | Any valid CSS property name.<br/><br/>Examples: `font-size`<br/>`color`<br/>`font-family` | If an element has this attribute, it will replace its text content with the value of the matched CSS property. |

## Using a specific target to display the values

Additionally, an element can choose to display the [style value](#setting-an-element-to-display-a-style-value) from another target:

| Attribute           | Accepted values                                                                 | Description                                                                                                                                                             |
| ------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-display-from` | Any valid query selector.<br/><br/>Examples: `#element-id`<br/>`.element-class` | target to get the display value from. If not provided, the same element with the data-display-style will act as the target. Example: `data-display-from = "#target-id"` |

## Displaying the style values on an element's pseudo-element

Instead of replacing the element's text content to display the style value, you can display it on the `::before` or `::after` pseudo-elements.

| Attribute             | Accepted values                                                              | Description                                                          |
| --------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data-display-pseudo` | `before`<br/>`:before`<br/>`::before`<br/>`after`<br/>`:after`<br/>`::after` | If set, the value will be displayed on the requested pseudo-element. |

## Displaying the property name

Users can also choose to display the property name along with the value with the following attribute:

| Attribute               | Accepted values                  | Description                                                                                     |
| ----------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data-display-property` | `true`<br/>`css`<br/>`css-block` | If set, the value will be displayed along with the property name with the correspondent format. |

Where the outputted formats will be:

`data-display-property = "true"`:

```
property-name: property-value
```

`data-display-property = "css"`:

```css
property-name: property-value;
```

`data-display-property = "css-block"`:

<!-- prettier-ignore-start -->
```css
 { property-name: property-value; }
```
<!-- prettier-ignore-end -->
