import * as React from "react";
import "./Tweet.css";

export default class Tweet extends React.Component<any, any> {

render() {

return (
<div className="tweets">

<div className="row">
  <div className="column">
  <blockquote className="twitter-tweet" data-lang="en">
  <p lang="en" dir="ltr">
    <a href="https://twitter.com/HabitatTexas">@HabitatTexas</a>
    accepting Ether donations to provide relief for Hurricane Harvey victims.
    Donate at <a href="https://t.co/rxGzNsH3d7">https://t.co/rxGzNsH3d7</a>
    <a href="https://twitter.com/hashtag/ETH4Harvey?src=hash">#ETH4Harvey</a>
  </p>&mdash; Habitat Texas (@HabitatTexas)
    <a href="https://twitter.com/HabitatTexas/status/901989318792794112">August 28, 2017</a>
  </blockquote>

  </div>
  <div className="column">
  <blockquote className="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">
    BIG thank you to <a href="https://twitter.com/TransmuteNews?ref_src=twsrc%5Etfw">@TransmuteNews</a> 
    and all of our Ether donors for giving 30k for Harvey recovery! 
    <a href="https://t.co/3tPeQs1H3B">https://t.co/3tPeQs1H3B</a> 
    <a href="https://twitter.com/hashtag/HabitatHelps?src=hash&amp;ref_src=twsrc%5Etfw">#HabitatHelps</a> 
    <a href="https://twitter.com/hashtag/RebuildingHope?src=hash&amp;ref_src=twsrc%5Etfw">#RebuildingHope</a>
    </p>&mdash; Habitat Texas (@HabitatTexas) 
    <a href="https://twitter.com/HabitatTexas/status/954099730052796417?ref_src=twsrc%5Etfw">January 18, 2018</a>
    </blockquote>
  </div>
</div>
  </div>
);
}
}
