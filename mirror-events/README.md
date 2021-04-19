# Copy to clipboard

Replicate `click` and `input` events from one element to another.

```html
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/webflow-addons@2/dist/mirror-events.js"></script>
```

## Element attributes

| Attribute         | Accepted values                                                                  | Allowed elements                                                  | Description                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `fs-mirror-click` | A valid query selector (like IDs `#element-id` or CSS Classes `.element-class`). | Any element                                                       | If set, the target element will also be clicked whenever the user clicks this element. It will also mirror `Enter` keyboard strokes. |
| `fs-mirror-input` | A valid query selector (like IDs `#element-id` or CSS Classes `.element-class`). | Form elements: `Input`, `Checkbox`, `Radio`, `Select`, `Textarea` | If set, the target element will mirror any value that the user inputs to it.                                                         |
