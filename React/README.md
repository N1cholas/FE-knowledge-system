## Notes of React source code

Summarize the `react` flow according to post [build-your-own-react](https://pomb.us/build-your-own-react/) to help me dig deeper in `react`.

### JSX transfer to DOM flow
![JSX_transfer_to_dom](flow/JSX_transfer_to_DOM.png)

### createElement(type, props, ...children)
![JSX_transfer_to_dom](flow/createElement.png)

### render(fiber, elements)
![JSX_transfer_to_dom](flow/render.png)

### commit(fiber)
![JSX_transfer_to_dom](flow/commit.png)
