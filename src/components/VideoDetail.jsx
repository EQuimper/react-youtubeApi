import React from 'react';

const VideoDetail = ({video}) => {
	if(!video){
		return(
				<div>Loading...</div>
		)
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	const title = video.snippet.title;
	const desc = video.snippet.description;
	return(
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe src={url} className="embed-responsive-item"></iframe>
				</div>
				<div className="details">
					<div><h2>{title}</h2></div>
					<hr/>
					<div><p>{desc}</p></div>
				</div>
			</div>
	)
};

export default VideoDetail;