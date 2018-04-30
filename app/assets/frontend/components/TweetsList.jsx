import Tweet from './Tweet'

export default class TweetsList extends React.Component {
  render() {
    let tweets = this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />);
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 l8 offset-l2">
          <ul className="collection">
            {tweets}
          </ul>
        </div>
      </div>
    )
  }
}
