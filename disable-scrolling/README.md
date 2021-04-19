# Disable Scrolling

Users can prvent the page from scrolling when:

- An element is clicked.
- An element is visible on the page.

## Element attributes

Ony one attribute available: `data-disable-scroll`. It accepts the following values:

| Value                             | Description                                                                                                                                                                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data-disable-scroll = "display"` | If set to an element, the scrolling of the page will be disabled whenever element is visible (not set to `display: none`).<br/><br/>To make sure the users can still scroll inside this element, make sure to set it to `overflow: auto`. |
| `data-disable-scroll = "click"`   | If set to an element, the scrolling of the page will be disabled on the first click of this element, and re-enabled on the second click.                                                                                                  |
