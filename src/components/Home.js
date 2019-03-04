import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './page.css'
class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=02c8a97b76dd4099ab293f133a75540e"
      )
      .then(res => {
        console.log("<<<<<<", res.data.articles);
        this.setState({
          posts: res.data.articles
        });
      });
  }

  render() {
    const { posts } = this.state;
    // console.log('>>>>>>>>>>>>',this.props.data)
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="card border-info mb-3" key={post.id}>
          <div className="card-header">{post.author}</div>
            <div className="card-body">
            <img src={post.urlToImage}  />
            </div>
            
            <h4 className="card-title">{post.title}</h4>

            <div className="card-body">
              <p className="card-text">{post.description}.</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts found </div>
    );
    return (
      <div className="container">
        <h4 className="center">Aljazeera News</h4>
        {postList}
      </div>
    );
  }
}
export default Home;
