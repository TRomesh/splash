import React, { Component } from "react";
import { connect } from "react-redux";
import { loadImages } from "../../actions/actions";
import Button from "./Button";
import "./styles.css";

class ImageGrid extends Component {
  componentDidMount() {
    this.props.LoadImages();
  }

  LoadGridImages = () => {
    const { images } = this.props;
    if (images.images) {
      return images.images.map(image => (
        <div
          key={image.id}
          className={`item item-${Math.ceil(image.height / image.width)}`}
        >
          <img src={image.urls.small} alt={image.user.username} />
        </div>
      ));
    }
  };

  render() {
    const { error, isLoading, LoadImages } = this.props;
    return (
      <div className="content">
        <section className="grid">{this.LoadGridImages()}</section>
        {error && <div className="error">{JSON.stringify(error)}</div>}
        <Button onClick={() => !isLoading && LoadImages()} loading={isLoading}>
          Load More..
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error
});

const mapDispatchToProps = dispatch => {
  return {
    LoadImages: () => dispatch(loadImages())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGrid);
