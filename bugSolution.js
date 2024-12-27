import * as React from 'react';
import { Image, View, Text } from 'expo-web-browser';

function MyComponent() {
  const [error, setError] = React.useState(null);

  const handleError = (error) => {
    setError(error);
  };

  return (
    <View>
      <Image
        source={{ uri: 'https://this-image-does-not-exist.com/image.jpg' }}
        style={{ width: 200, height: 200 }}
        onError={handleError}
      />
      {error && (
        <Text>Error loading image: {error.message}</Text>
      )}
    </View>
  );
}

export default MyComponent;
