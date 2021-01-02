import React from "react";
import { Video, View, asset } from "react-vr";

class Movie extends React.Component {
  render() {
    return (
      <View style={{ margin: 0.1, height: 2 }}>
        <Video
          style={{ height: 2 }}
          source={asset("https://youtu.be/evcpxACKldQ")}
        />
      </View>
    );
  }
}

module.exports = Movie;
