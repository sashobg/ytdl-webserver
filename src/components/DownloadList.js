import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../stylesheets/DownloadList.scss'

class DownloadList extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <ul className='downloadList'>
        {this.props.videos.map((video, index) =>
          <li key={index} className='downloadList__item'>
            <span className='video__name'>{video.name}</span>
            {video.downloading
              ? (
                <div className='spinner'>
                  <div className='bounce1' />
                  <div className='bounce2' />
                  <div className='bounce3' />
                </div>
              ) : (
                <span className='video__link'>
                  <a
                    onClick={this.props.onVideoDownloadClick}
                    data-orig={video.url}
                    href={`request/${video.name}.${video.format}`}
                    download={`${video.name}.${video.format}`}
                  >Download</a>
                </span>
              )
            }
          </li>
        )}
        {this.props.videos.length === 0
          ? '' : <li className='downloadList__clear' onClick={this.props.onClearClick}>Clear all</li>
        }
      </ul>
    )
  }
}

DownloadList.propTypes = {
  videos: PropTypes.array,
  onClearClick: PropTypes.func,
  onVideoDownloadClick: PropTypes.func
}

export default DownloadList
