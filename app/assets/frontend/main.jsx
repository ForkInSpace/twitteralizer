import Navbar from './components/Navbar';
import TweetBox from './components/TweetBox';
import TweetsList from './components/Tweetslist';
import TweetStore from './stores/TweetStore';

import TweetActions from './actions/TweetActions';
TweetActions.getAllTweets();

let getAppState = () => {
  return {tweetsList: TweetStore.getAll()};
}

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
    // $.ajax("/tweets")
    // .success(data => this.setState(this.formattedTweets(data)))
    // .error(error => console.log(error));
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange(){
    this.setState(getAppState());
  }
  render() {
    return (
      <div className="container-flex">
        <Navbar />
        <TweetBox />
        <TweetsList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

let documentReady = () => {
  const reactNode = document.getElementById('react');
  if(reactNode){
    ReactDOM.render(<Main />, reactNode);
  }
};

$(documentReady)
