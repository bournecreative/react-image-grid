# React Image Grid

React project that allows user to search imagery via the unsplash API. Imagery is retreived and laid out in a tile format.

## Purpose

Understand how children components can pass data up to the parent component. This pattern passes a callback method down to the child as a prop. When the child component state changes, it will invoke that callback on the parent component with the new state. This system is what allows the SearchBar Component to pass state change up to the parent App Component to make the API call with the input search term.

### Grid display
![image of React image grid with retreived images](assets/layout.png)