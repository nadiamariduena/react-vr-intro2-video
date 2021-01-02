# React 360 _VR VIDEOS_

## Learning how to add Videos to 360 scene

[<img src="./img/react-vr-basic-components.jpg"/>](https://www.youtube.com/watch?v=PnYhS4Ygs3s&list=LL&index=5)

<br>

### PREPARE THE MATERIALS 🍰

###### You can find 360 panorama videos here:

[360 videos (FREE)](https://artsandculture.google.com/project/360-videos)

[normal videos (FREE)](https://www.pexels.com/videos/)

<br>

# START ☁️

##### NEW IMAGE (change the default chess img)

- Click on the image to visit the artist shop (nice 3D models)

[<img src="./img/pano-img2.gif"/>](https://www.turbosquid.com/Search/Index.cfm?keyword=damaggio)

<br>

##### CREATE A COMPONENT FOLDER

- Inside the Component Folder, create a Scene Folder
- Inside the Scene Folder, create a Layout Folder
- Inside the Layout Folder, create a Elements Folder
  <br>

- 👁️ Inside the Elements folder, create a file and call it:
- Movie.js

##### Add this

```javascript
// Add this
import React from "react";
import { Video, View, asset } from "react-vr";
```

<br>

##### DELETE THIS:

```javascript
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
```

<br>
<br>

#### ADD THE following:

- If you have the video format (mp4) in your static assets folder:

```javascript
<View style={{ margin: 0.1, height: 2 }}>
  <Video style={{ height: 2 }} source={asset("nameOfTheVideo.mp4")} />
</View>
```

<!-- https://youtu.be/evcpxACKldQ -->

<br>

#### INSIDE the layout folder | create a file:

- call it "MovieProjector
