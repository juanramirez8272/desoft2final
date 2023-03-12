import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function TwitterFeed() {
  return (
    <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Uni_Remington"
        options={{ height: 400 }}
      />
    </div>
  );
}

export default TwitterFeed;