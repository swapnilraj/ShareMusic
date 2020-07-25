import React, { useEffect, useState } from "react";
import { Text, Linking } from "react-native";


const urlHandler = event => {
  // setUrl(JSON.stringify(event));
  console.log("WHAT", event);
}

// const App = () => {
//   useEffect(() => {
//     Linking.addEventListener('url', urlHandler);

//     return () => Linking.removeListener('url', urlHandler);
//   }, []);


//   Linking.getInitialURL().then(url => {
//     console.log(url);
//     return <Text>{url}</Text>
//   });
//   // const { url: initialUrl, processing } = useInitialURL();



//   return (
//     <Text>Hi</Text>
//   );
// };

class App extends React.Component {

  componentDidMount() {
    Linking.getInitialURL().then( urlHandler );

    Linking.addEventListener('url', urlHandler);
  }

  componentWillUnmount() {
    Linking.removeListener('url', urlHandler);
  }

  render() {

    return (
      <Text>Hi</Text>
    );
  }

}

export default App;
