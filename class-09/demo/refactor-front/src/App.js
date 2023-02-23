import React from 'react';
import Beast from './Beast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // images: ["http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg", "https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg", "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi"],
      // votes:[0, 0, 0],
      images: [
        {
          name: 'UniWhal',
          src: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
          votes: 0
        },
        {
          name: 'Baby Rhino',
          src: "https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg",
          votes: 0
        },
        {
          name: 'Baby markhor',
          src: "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi",
          votes: 0,
        }
      ]
      // imageOne: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      // imageTwo: "https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg",
      // imageThree: "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi",
      // imageOneVotes: 0,
      // imageTwoVotes: 0,
      // imageThreeVotes: 0,
    }
  }
  render() {
    return (
      <>
        <h1>Vote on Your Favorite Animal!</h1>
        <p>We have three adorable animals here. Vote on your favorite one and watch their likes go up!</p>
        {/* <div onClick={() => this.setState({ imageOneVotes: this.state.imageOneVotes + 1 })}>
          <h2>UniWhal</h2>
          <span>likes: {this.state.imageOneVotes}</span>
          <img src={this.state.imageOne} />
        </div>
        <div onClick={() => this.setState({ imageTwoVotes: this.state.imageTwoVotes + 1 })}>
          <h2>Baby Rhino</h2>
          <span>likes: {this.state.imageTwoVotes}</span>
          <img src={this.state.imageTwo} />
        </div>
        <div onClick={() => this.setState({ imageThreeVotes: this.state.imageThreeVotes + 1 })}>
          <h2>Baby markhor</h2>
          <span>likes: {this.state.imageThreeVotes}</span>
          <img src={this.state.imageThree} />
        </div> */}
        {/* <Beast
          handleClick={() => this.setState({ imageOneVotes: this.state.imageOneVotes + 1 })}
          name={"Uniwhal"}
          votes={this.state.imageOneVotes}
          image={this.state.imageOne}
        />
        <Beast
          handleClick={() => this.setState({ imageTwoVotes: this.state.imageTwoVotes + 1 })}
          name={"Baby Rhino"}
          votes={this.state.imageTwoVotes}
          image={this.state.imageTwo}
        />
        <Beast
          handleClick={() => this.setState({ imageThreeVotes: this.state.imageThreeVotes + 1 })}
          name={"Baby markhor"}
          votes={this.state.imageThreeVotes}
          image={this.state.imageThree}
        /> */}
        {this.state.images.map((image, idx) => (
          <Beast
            handleClick={() => {
              let results = [...this.state.images];
              results[idx].votes++;
              this.setState({ images: results })}
            }
            name={image.name}
            votes={image.votes}
            image={image.src}
          />
        ))}
      </>
    )
  }
}

export default App;
