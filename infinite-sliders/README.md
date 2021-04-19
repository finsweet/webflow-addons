# Copy to clipboard

Makes a slider seamlessly loop infinitelly without abroupt jumps between the last and first slides.

```html
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/webflow-addons@2/dist/infinite-sliders.js"></script>
```

## Global &lt;script> attributes

| Attribute     | Required | Accepted values                                                                  | Description                                                                                                                                        |
| ------------- | -------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fs-selector` | No       | A valid query selector (like IDs `#element-id` or CSS Classes `.element-class`). | Accepts a query selector that will instantiate all the matched elements. If not set, the script will look for all `Slider` components on the page. |
