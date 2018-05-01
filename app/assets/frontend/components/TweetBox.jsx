import TweetActions from '../actions/TweetActions';

export default class TweetBox extends React.Component {
  sendTweet(event){
    event.preventDefault();
    TweetActions.sendTweet(this.tweetTextArea.value);
    this.tweetTextArea.value = '';
  }
  render() {
    return (
      <div className="row">
        <div className="col s12 m8 offset-m2 l8 offset-l2">
          <form onSubmit={this.sendTweet.bind(this)}>
            <div className="input-field">
              <textarea ref={input => (this.tweetTextArea = input)} id="textarea1" className="materialize-textarea" data-length="120"></textarea>
              <label htmlFor="textarea1">What's happening?</label>
              <button type="submit" className="waves-effect waves-light btn right">Tweet</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
