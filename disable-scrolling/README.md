# Disable Scrolling

Users can prvent the page from scrolling when:

- An element is clicked.
- An element is visible on the page.

```html
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/webflow-addons@2/dist/disable-scrolling.js"></script>
```

## Element attributes

Ony one attribute available: `fs-disable-scroll`. It accepts the following values:

| Value                           | Description                                                                                                                                                                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fs-disable-scroll = "display"` | If set to an element, the scrolling of the page will be disabled whenever element is visible (not set to `display: none`).<br/><br/>To make sure the users can still scroll inside this element, make sure to set it to `overflow: auto`. |
| `fs-disable-scroll = "click"`   | If set to an element, the scrolling of the page will be disabled on the first click of this element, and re-enabled on the second click.                                                                                                  |

Additionally, the element accepts the following attributes:

Optionally, the Navbar component from Webflow can take an special attribute that will set everything up automatically for the user.

| Value                       | Description                                                                                               |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| `fs-disable-scroll = "nav"` | If set to the Navbar component, the scrolling of the page will be disabled whenever the Nav Menu is open. |
