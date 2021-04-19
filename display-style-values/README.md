# Display Style Values

Users can display any CSS property of an element on the page.

```html
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/webflow-addons@2/dist/display-style-values.js"></script>
```

## Setting an element to display a style value

With the following attribute, an element will display a CSS property value:

| Attribute          | Accepted values                                                                           | Description                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `fs-display-style` | Any valid CSS property name.<br/><br/>Examples: `font-size`<br/>`color`<br/>`font-family` | If an element has this attribute, it will replace its text content with the value of the matched CSS property. |

## Using a specific target to display the values

Additionally, an element can choose to display the [style value](#setting-an-element-to-display-a-style-value) from another target:

| Attribute         | Accepted values                                                                 | Description                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fs-display-from` | Any valid query selector.<br/><br/>Examples: `#element-id`<br/>`.element-class` | target to get the display value from. If not provided, the same element with the fs-display-style will act as the target. Example: `fs-display-from = "#target-id"` |

## Displaying the style values on an element's pseudo-element

Instead of replacing the element's text content to display the style value, you can display it on the `::before` or `::after` pseudo-elements.

| Attribute           | Accepted values                                                              | Description                                                          |
| ------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `fs-display-pseudo` | `before`<br/>`:before`<br/>`::before`<br/>`after`<br/>`:after`<br/>`::after` | If set, the value will be displayed on the requested pseudo-element. |

## Displaying the property name

Users can also choose to display the property name along with the value with the following attribute:

| Attribute             | Accepted values                  | Description                                                                                     |
| --------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `fs-display-property` | `true`<br/>`css`<br/>`css-block` | If set, the value will be displayed along with the property name with the correspondent format. |

Where the outputted formats will be:

`fs-display-property = "true"`:

```
property-name: property-value
```

`fs-display-property = "css"`:

```css
property-name: property-value;
```

`fs-display-property = "css-block"`:

<!-- prettier-ignore-start -->
```css
 { property-name: property-value; }
```
<!-- prettier-ignore-end -->

## Displaying a value for a specific viewport width

If this attribute is used, the outputted value will be the correspondent when the element is displayed at the specified viewport.

| Attribute             | Accepted values                                                                             | Description                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `fs-display-viewport` | Any viewport width, with or without `px`.<br/><br/>Examples:`1920px`<br/>`1657`<br/>`450px` | If set, the style will be displayed with the correspondent value on the specified viewport. Example: "The font size value when the viewport width is 1280px wide." |

## Groupped targets

You can group elements to share the same global attributes.

| Attribute          | Value     | Required | Description                                                                                  |
| ------------------ | --------- | -------- | -------------------------------------------------------------------------------------------- |
| `fs-display-group` | `wrapper` | Yes      | Mandatory, this attribute is set to the parent element that wraps all the affected children. |

When set, all the children that have the `fs-display-style` attribute will inherit any additional attributes that the parent element has.

Example: You set a `fs-display-property = "css"` to the parent wrapper. Then, all children that are showing a style value with the `fs-display-style` attribute will also output the [property name](#displaying-the-property-name).

Additionally, you can specify a target element in the group:

| Attribute          | Value  | Required | Description                                                                      |
| ------------------ | ------ | -------- | -------------------------------------------------------------------------------- |
| `fs-display-group` | `from` | No       | If set, all the `fs-display-style` children will use this element as the target. |
