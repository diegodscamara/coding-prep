**⚛️ 1. What are the differences between class and functional components?**

**Answer:**

Class components use ES6 classes and support lifecycle methods (e.g., componentDidMount). Functional components are simpler, use hooks (useState, useEffect), and are now preferred for cleaner, more testable code.
---

**🧠 2. What are React Hooks, and why are they useful?**

**Answer:**

Hooks like useState, useEffect, and useContext let you use state and side effects in functional components without classes. They promote reusable, cleaner logic via custom hooks.
---

**📦 3. How does state differ from props in React?**

**Answer:**

Props are passed *to* components (read-only), while state is managed *within* a component and can be updated using useState or this.setState.
---

**♻️ 4. What is the virtual DOM and how does React use it?**

**Answer:**

The virtual DOM is a lightweight copy of the real DOM. React compares it with the previous version (diffing) and updates only the necessary parts (reconciliation) to boost performance.
---

**🔁 5. Explain the useEffect hook.**

**Answer:**

useEffect runs side effects like API calls, timers, or subscriptions. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
---

**🌐 6. How would you manage global state in a React app?**

**Answer:**

Options include useContext + useReducer, Redux, Zustand, or Jotai. For larger apps, Redux Toolkit or Zustand offer better scalability and debugging support.
---

**🧱 7. What are controlled vs uncontrolled components?**

**Answer:**

Controlled components get their value from React state (useState). Uncontrolled components store data in the DOM and access it via refs (useRef).
---

**🚀 8. How do you optimize performance in large React apps?**

**Answer:**

• Use React.memo, useMemo, and useCallback
• Lazy load components (React.lazy, Suspense)
• Code splitting with dynamic imports
• Avoid unnecessary re-renders
• Virtualize long lists (e.g., react-window)
---

**🧩 9. What is context in React and when should you use it?**

**Answer:**

React.createContext() allows you to pass data deeply without prop drilling. Ideal for theme, auth, or localization data. For complex state, combine with useReducer or external libs.
---

**⚙️ 10. What is JSX and how does it work?**

**Answer:**

JSX is a syntax extension that looks like HTML but compiles to React.createElement() calls. It allows you to write UI in a declarative, component-based way.
---

**🧪 11. How do you test React components?**

**Answer:**

Use tools like **Jest** + **React Testing Library**. Focus on behavior (user clicks, expected output) rather than implementation (internal states).
---

**🔍 12. What is prop drilling and how can you avoid it?**

**Answer:**

Prop drilling happens when you pass props through many levels unnecessarily. Avoid it using Context API or state management libraries (Redux, Zustand).
---

**📡 13. How do you handle API requests in React?**

**Answer:**

Use fetch or axios inside useEffect. Manage loading, success, and error states. Use AbortController to cancel requests if needed. Optionally use SWR or React Query for caching.
---

**📂 14. What are keys in React and why are they important?**

**Answer:**

Keys help React identify which items in a list changed, added, or removed. Always use stable, unique keys (preferably IDs) to prevent rendering bugs.
---

**🔄 15. What happens during React’s reconciliation process?**

**Answer:**

React compares the new virtual DOM with the previous one (diffing). It updates only what’s necessary in the real DOM (minimal changes), improving performance.
---

**🔀 16. What is the difference between useMemo and useCallback?**

**Answer:**

useMemo memoizes the result of a function, while useCallback memoizes the function itself. Both help prevent unnecessary re-renders.
---

**📁 17. How does code splitting work in React?**

**Answer:**

Code splitting lets you load parts of your app on demand using React.lazy and Suspense. It improves performance by reducing initial bundle size.
---

**🛠️ 18. What is React Router and how does it work?**

**Answer:**

React Router manages client-side navigation using components like <Route>, <Link>, and <BrowserRouter>. It maps URLs to components.
---

**🧼 19. What are some ways to prevent memory leaks in React?**

**Answer:**

Clean up effects in useEffect, abort async requests, and remove event listeners or subscriptions during component unmount.
---

**👻 20. What is a Higher-Order Component (HOC)?**

**Answer:**

An HOC is a function that takes a component and returns a new component. It's used for code reuse like authentication or logging.
---

**🔄 21. How do you handle form validation in React?**

**Answer:**

Use controlled components and libraries like Formik, React Hook Form, or custom logic to validate inputs and show error messages.
---

**📆 22. What is the difference between useLayoutEffect and useEffect?**

**Answer:**

useLayoutEffect runs synchronously after DOM updates. It's useful for layout reads/writes before the browser paints.
---

**🌍 23. How can you internationalize a React app?**

**Answer:**

Use libraries like react-intl or i18next. Wrap your app with a provider and use translation hooks or components for dynamic text.
---

**🧮 24. How does the useReducer hook work?**

**Answer:**

useReducer is like Redux in a component. It takes a reducer and initial state, then dispatches actions to update state in a predictable way.
---

**📚 25. What is tree shaking and how does it relate to React?**

**Answer:**

Tree shaking removes unused code from your final bundle. React apps using ES modules and modern bundlers benefit from this optimization.
---

**🔐 26. How do you implement authentication in a React app?**

**Answer:**

Store tokens securely (e.g., httpOnly cookies or memory), protect routes, and check auth status with context, state, or libraries like Firebase/Auth0.
---

**📉 27. What are some common causes of performance bottlenecks in React?**

**Answer:**

Too many re-renders, large lists, expensive calculations in render, unnecessary state, and lack of memoization.
---

**🧱 28. What is React.StrictMode used for?**

**Answer:**

StrictMode highlights potential issues by intentionally invoking certain lifecycle methods twice in dev mode. It helps enforce best practices.
---

**🎣 29. What is a custom hook and why would you create one?**

**Answer:**

A custom hook is a reusable function that uses built-in hooks to encapsulate logic (e.g., useAuth, useForm). It keeps components clean and modular.
---

**💾 30. How do you persist state in React apps?**

**Answer:**

Use localStorage, sessionStorage, or IndexedDB directly or with libraries like redux-persist. Save state on updates and rehydrate on load.
---