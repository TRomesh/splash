import React, { Component } from "react";

import "./styles.css";

const key = "d67b28fda9d16967d2e1624e4df3239799eeda0f3b9a4539fe7b8e353d8992a0";

class ImageGrid extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
      .then(res => res.json())
      .then(images => {
        this.setState({
          images
        });
      });
  }

  render() {
    const { images } = this.state;
    return (
      <div className="content">
        <section className="grid">
          {images.map(image => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default ImageGrid;
