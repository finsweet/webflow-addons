# Custom Slider Dots

Populate the native slider dots with any custom content.

```html
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/webflow-addons@2/dist/custom-slider-dots.js"></script>
```

## Element attributes

| Attribute        | Accepted values  | Allowed elements              | Description                                                                                                                                                                                    |
| ---------------- | ---------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fs-dot-content` | `keep`, `remove` | Any element inside a `Slide`. | If set, the element will be appended inside the correspondent slide's dot.<br/>The `keep` value will keep the original element also inside the slide.<br/>The `remove` element will remove it. |
