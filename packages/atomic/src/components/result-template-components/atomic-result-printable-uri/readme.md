# atomic-result-uri

<!-- Auto Generated Below -->

## Properties

| Property           | Attribute             | Description                                                                                                                                           | Type     | Default |
| ------------------ | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| `maxNumberOfParts` | `max-number-of-parts` | The maximum number of Uri parts to display, has to be over the minimum of `3` in order to be effective. Putting `Infinity` will disable the ellipsis. | `number` | `5`     |

## Shadow Parts

| Part                                    | Description                                       |
| --------------------------------------- | ------------------------------------------------- |
| `"result-printable-uri-link"`           | A result printable uri clickable link             |
| `"result-printable-uri-list"`           | The result printable uri list                     |
| `"result-printable-uri-list-element"`   | A result printable uri list element               |
| `"result-printable-uri-list-ellipsis"`  | The clickable ellipsis of a result uri            |
| `"result-printable-uri-list-expanded"`  | The expanded result printable uri list            |
| `"result-printable-uri-list-separator"` | The visual separator between each part of the uri |

## Dependencies

### Depends on

- [atomic-result-text](../atomic-result-text)
- [atomic-component-error](../../atomic-component-error)

### Graph

```mermaid
graph TD;
  atomic-result-printable-uri --> atomic-result-text
  atomic-result-printable-uri --> atomic-component-error
  atomic-result-text --> atomic-component-error
  atomic-result-text --> atomic-text
  atomic-text --> atomic-component-error
  style atomic-result-printable-uri fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
