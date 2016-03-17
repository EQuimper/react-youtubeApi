import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;
	return (
			<div>
				<li onClick={() => onVideoSelect(video)} className="list-group-item">
					<div className="video-list media">
						<div className="media-left">
							<img src={imageUrl} className="media-object"/>
						</div>
						<div className="media-body">
							<div className="media-heading">
								{title}
							</div>
						</div>
					</div>
				</li>
			</div>
	);
};

export default VideoListItem;