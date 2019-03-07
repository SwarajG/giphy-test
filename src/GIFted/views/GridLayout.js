import React, { Component } from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from 'react-virtualized';
import ImageMeasurer from 'react-virtualized-image-measurer';
import GifCard from './GifCard';

const columnWidth = 200;
const defaultHeight = 250;
const defaultWidth = columnWidth;

const cache = new CellMeasurerCache({
  defaultHeight,
  defaultWidth,
  fixedWidth: true
});

const cellPositionerConfig = {
  cellMeasurerCache: cache,
  columnCount: 5,
  columnWidth,
  spacer: 10
};

const cellPositioner = createMasonryCellPositioner(cellPositionerConfig);

export default class GridLayout extends Component {
  constructor(props) {
    super(props);
    this.noCacheList = props.gifs.map(item => ({
      ...item,
      images: {
        ...item.images,
        fixed_width: {
          ...item.images.fixed_width,
          mp4: item.images.fixed_width.mp4 + "?noCache=" + Math.random()
        }
      }
    }));
  }

  cellRenderer = ({ index, key, parent, style }) => {
    const gif = this.props.gifs[index];
    const { height: imageHeight, width } = gif.images.fixed_width;
    const height = columnWidth * (imageHeight / width) || defaultHeight;
    return (
      <CellMeasurer
        cache={cache}
        key={key}
        index={index}
        parent={parent}
      >
        <div style={style}>
          <GifCard gif={gif} height={height} index={index} />
        </div>
      </CellMeasurer>
    )
  }

  render() {
    const { gifs } = this.props;
    return (
      <ImageMeasurer
        items={gifs}
        image={item => item.images.fixed_width.mp4}
        defaultHeight={defaultHeight}
        defaultWidth={defaultWidth}
      >
        {({ itemsWithSizes }) => {
          return (
            <Masonry
              cellCount={itemsWithSizes.length}
              cellMeasurerCache={cache}
              cellPositioner={cellPositioner}
              cellRenderer={this.cellRenderer}
              height={600}
              width={1040}
            />
          )
        }}
      </ImageMeasurer>
    );
  }
}