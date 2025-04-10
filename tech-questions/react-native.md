**📱 1. What is React Native?**

**Answer:**

React Native is a framework for building native mobile apps using React. It compiles JavaScript to native components for iOS and Android.
---

**⚛️ 2. How is React Native different from React?**

**Answer:**

React targets the web DOM, while React Native targets mobile native views. Instead of <div>, <span>, etc., it uses components like <View> and <Text>.
---

**📦 3. What are core components in React Native?**

**Answer:**

Some common core components are:
• View
• Text
• Image
• TextInput
• ScrollView
• FlatList
• TouchableOpacity
---

**🎨 4. How does styling work in React Native?**

**Answer:**

React Native uses JavaScript objects for styling via the StyleSheet API, similar to inline CSS but with camelCased properties.
---

**🔁 5. How does navigation work in React Native?**

**Answer:**

Use the react-navigation library for stack, tab, and drawer navigation using navigators like createStackNavigator and createBottomTabNavigator.
---

**📲 6. How do you access device features in React Native?**

**Answer:**

Use libraries like react-native-camera, react-native-geolocation, or APIs from Expo (if using Expo).
---

**📦 7. What is Expo and how does it differ from plain React Native?**

**Answer:**

Expo is a set of tools for building RN apps faster. It abstracts native modules, making setup easier, but limits customization unless ejected.
---

**🔌 8. How do you handle API calls in React Native?**

**Answer:**

Same as React: use fetch or axios inside useEffect. Handle loading, error, and response states.
---

**🧪 9. How do you test a React Native app?**

**Answer:**

Use Jest for unit tests, React Native Testing Library for components, and Detox or Appium for end-to-end testing.
---

**🧠 10. What is the difference between controlled and uncontrolled components in React Native?**

**Answer:**

Controlled components have their value controlled by React state, while uncontrolled ones rely on refs or internal state (e.g., TextInput).
---

**📷 11. How do you work with images in React Native?**

**Answer:**

Use the <Image> component. Source can be static (require) or dynamic (URI). Use resizeMode for layout control.
---

**📋 12. What is FlatList and when should you use it?**

**Answer:**

FlatList efficiently renders large scrollable lists. It supports lazy loading and recycling of views for better performance.
---

**🧱 13. How does gesture handling work in React Native?**

**Answer:**

Use react-native-gesture-handler for complex gestures, or Touchable components for simple taps.
---

**⚙️ 14. How do you manage global state in React Native?**

**Answer:**

Use Context + useReducer, Redux Toolkit, Recoil, Zustand, or Jotai depending on complexity.
---

**🔒 15. How do you handle authentication in React Native?**

**Answer:**

Use secure storage (like react-native-keychain or expo-secure-store), and libraries like Firebase Auth, Auth0, or custom JWT logic.
---

**🔁 16. How do you implement navigation guards or conditional navigation?**

**Answer:**

Use listeners like 'beforeRemove' or conditionally navigate inside useEffect based on auth state or logic.
---

**🧬 17. How does hot reloading work in React Native?**

**Answer:**

Hot reloading updates changed code without losing state. Fast Refresh is the modern version of hot reload in RN.
---

**📦 18. What is the difference between View and SafeAreaView?**

**Answer:**

SafeAreaView ensures content doesn't overlap notches or status bars on iOS. Use it as the root view when needed.
---

**💾 19. How do you store data locally in React Native?**

**Answer:**

Use AsyncStorage (deprecated), @react-native-async-storage/async-storage, or MMKV for encrypted, fast local storage.
---

**🌐 20. How do you handle network errors and offline state?**

**Answer:**

Use NetInfo to monitor connectivity and conditionally show offline messages or queue requests.
---

**📱 21. How do you make the UI responsive across different screen sizes?**

**Answer:**

Use Flexbox layout, Dimensions API, PixelRatio, or utility libraries like react-native-responsive-dimensions.
---

**📥 22. How do you implement push notifications?**

**Answer:**

Use services like Firebase Cloud Messaging (FCM) with react-native-push-notification or Expo Notifications.
---

**📤 23. How do you upload files or images in React Native?**

**Answer:**

Use react-native-image-picker or Expo ImagePicker, then upload via fetch/axios with FormData.
---

**📦 24. What are native modules and how do you use them?**

**Answer:**

Native modules are platform-specific code (Java/Obj-C) exposed to JS. Use them via NativeModules or create custom ones.
---

**📦 25. What are the benefits of using TypeScript in React Native?**

**Answer:**

TypeScript improves type safety, editor support, and refactoring. It prevents common bugs and improves maintainability.
---

**🧪 26. How do you mock native modules in tests?**

**Answer:**

Use Jest mocks and __mocks__ directory. Mock APIs from native modules (e.g., react-native-device-info) manually or with jest.mock.
---

**🔧 27. What is Metro bundler?**

**Answer:**

Metro is the default JS bundler for React Native. It handles module resolution, transpiling, and live reloading.
---

**🧠 28. What are common performance optimizations in React Native?**

**Answer:**

Use FlatList correctly, avoid inline functions, useMemo, memo, optimize image sizes, and batch state updates.
---

**🧬 29. What is bridging in React Native?**

**Answer:**

Bridging connects JavaScript and native code. It allows JS to call native modules and vice versa.
---

**📦 30. How do you publish a React Native app to App Store and Google Play?**

**Answer:**

Build a release version (Xcode or Gradle), create store listings, sign the app, and upload via Transporter or Play Console.
---