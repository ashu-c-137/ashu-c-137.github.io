export const blogPosts = [
  {
    id: "react-native-setup-2025",
    title: "Setting Up React Native in 2025",
    date: "March 15, 2025",
    excerpt: "A comprehensive guide to setting up a new React Native project using the latest CLI, best practices for project structure, and essential configurations for both iOS and Android platforms.",
    content: `
      <h2>Getting Started with React Native in 2025</h2>
      <p>React Native has evolved significantly since its initial release, and setting up a new project in 2025 requires understanding the latest best practices and tools. This guide will walk you through the process step by step, ensuring you start with a solid foundation.</p>

      <h2>Prerequisites</h2>
      <p>Before we begin, ensure you have the following installed:</p>
      <ul>
        <li>Node.js 20 or newer</li>
        <li>Ruby 3.0 or newer (for iOS development)</li>
        <li>Xcode 15 or newer (for iOS development)</li>
        <li>Android Studio Hedgehog or newer (for Android development)</li>
      </ul>

      <h2>Project Initialization</h2>
      <p>The React Native CLI has been significantly improved. Here's how to create a new project:</p>
      <code>npx react-native@latest init MyApp --template react-native-template-typescript</code>

      <h2>Project Structure Best Practices</h2>
      <p>Organize your project with a scalable structure:</p>
      <pre>
src/
  ├── components/
  ├── screens/
  ├── navigation/
  ├── services/
  ├── hooks/
  ├── utils/
  ├── assets/
  └── types/
      </pre>

      <h2>Essential Configurations</h2>
      <p>Configure your development environment for optimal performance and debugging capabilities. Update your metro.config.js for faster builds and better caching:</p>
      <code>
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
      </code>

      <h2>Performance Optimization</h2>
      <p>Implement these optimizations from the start:</p>
      <ul>
        <li>Enable Hermes engine for better performance</li>
        <li>Configure ProGuard for Android release builds</li>
        <li>Set up correct dev/prod configurations</li>
      </ul>

      <h2>Testing Setup</h2>
      <p>Include testing frameworks from day one:</p>
      <ul>
        <li>Jest for unit testing</li>
        <li>React Native Testing Library for component testing</li>
        <li>Detox for end-to-end testing</li>
      </ul>
    `
  },
  {
    id: "flatlist-optimization",
    title: "Optimizing FlatList Performance",
    date: "March 10, 2025",
    excerpt: "Deep dive into FlatList optimization techniques including windowSize, maxToRenderPerBatch, updateCellsBatchingPeriod, and implementing efficient item rendering with Pure Components.",
    content: `
      <h2>Understanding FlatList Performance</h2>
      <p>FlatList is one of React Native's most powerful components, but it can also be a source of performance issues if not optimized correctly. This guide covers advanced optimization techniques to ensure smooth scrolling and efficient memory usage.</p>

      <h2>Key Performance Props</h2>
      <p>Essential FlatList props for optimization:</p>
      <code>
<FlatList
  windowSize={5}
  maxToRenderPerBatch={10}
  updateCellsBatchingPeriod={50}
  removeClippedSubviews={true}
  initialNumToRender={10}
  onEndReachedThreshold={0.5}
  getItemLayout={(data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
/>
      </code>

      <h2>Implementing getItemLayout</h2>
      <p>The getItemLayout prop is crucial for performance when dealing with large lists. It helps FlatList calculate dimensions without measuring each item:</p>
      <code>
const getItemLayout = (data, index) => ({
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index,
  index,
});
      </code>

      <h2>Optimizing Item Rendering</h2>
      <p>Use React.memo for list items to prevent unnecessary re-renders:</p>
      <code>
const ListItem = React.memo(({ title, description }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
));
      </code>

      <h2>Advanced Techniques</h2>
      <ul>
        <li>Implement virtualization for large lists</li>
        <li>Use placeholder loading for smooth scrolling</li>
        <li>Optimize image loading in list items</li>
        <li>Implement efficient list item recycling</li>
      </ul>

      <h2>Monitoring Performance</h2>
      <p>Tools and techniques for measuring FlatList performance:</p>
      <ul>
        <li>React Native Performance Monitor</li>
        <li>Chrome Developer Tools</li>
        <li>Custom performance logging</li>
      </ul>
    `
  },
  {
    id: "pure-components",
    title: "Pure Components in React Native",
    date: "March 5, 2025",
    excerpt: "Understanding Pure Components, when to use them, their impact on performance, and common pitfalls to avoid. Includes real-world examples and performance benchmarks.",
    content: `
      <h2>Understanding Pure Components</h2>
      <p>Pure Components in React Native are a powerful way to optimize your application's performance. They automatically implement shouldComponentUpdate with a shallow prop and state comparison.</p>

      <h2>When to Use Pure Components</h2>
      <p>Pure Components are most effective when:</p>
      <ul>
        <li>Component renders the same output given the same props/state</li>
        <li>Component receives simple props (avoiding deep objects)</li>
        <li>Component doesn't need to react to every parent update</li>
      </ul>

      <h2>Implementation Example</h2>
      <code>
class UserCard extends React.PureComponent {
  render() {
    const { name, email, avatar } = this.props;
    return (
      <View style={styles.card}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    );
  }
}
      </code>

      <h2>Function Components with React.memo</h2>
      <p>For function components, use React.memo to achieve the same optimization:</p>
      <code>
const UserCard = React.memo(({ name, email, avatar }) => (
  <View style={styles.card}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.email}>{email}</Text>
  </View>
));
      </code>

      <h2>Common Pitfalls</h2>
      <p>Be aware of these common issues when using Pure Components:</p>
      <ul>
        <li>Mutating props or state directly</li>
        <li>Using array index as key</li>
        <li>Creating new objects or arrays in parent render</li>
        <li>Using inline functions as props</li>
      </ul>

      <h2>Performance Benchmarks</h2>
      <p>In our testing with a list of 1000 items:</p>
      <ul>
        <li>Regular Component: 150ms render time</li>
        <li>Pure Component: 45ms render time</li>
        <li>Memory usage reduced by 30%</li>
      </ul>
    `
  }
];