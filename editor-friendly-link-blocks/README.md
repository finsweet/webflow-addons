# Copy to clipboard

Makes any element behave like a _`Link Block`_ (clickable, keyboard navigation accessible, focusable) but without using the _`Link Block`_ component. Helpful for editing URLs in Webflow's Editor.

<!-- prettier-ignore-start -->
```html
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/webflow-addons@2/dist/editor-friendly-link-blocks.js"></script>
```
<!-- prettier-ignore-end -->

It requires the following setup:

- [Parent Wrapper]
  - [Any content]
  - [Link block]

Where the _`Link Block`_ can be hidden.

When the Parent Wrapper is clicked, it will automatically click the hidden _`Link Block`_ child.

## Global &lt;script> attributes

| Attribute     | Required | Accepted values                                                                  | Description                                                              |
| ------------- | -------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `fs-selector` | Yes      | A valid query selector (like IDs `#element-id` or CSS Classes `.element-class`). | Accepts a query selector that will instantiate all the matched elements. |
