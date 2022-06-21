import React from "react";
import "./content.css";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      value: "tesla",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/everything?q=${this.state.value}&apiKey=2d7711600cde489a8ef98e45f688bf3b`
    )
      .then((response) => response.json())
      .then((res) => {
        this.setState({ content: res.articles });
      });
  }
  componentDidUpdate() {
    console.log("sudah diupdate");
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.componentDidMount();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }
  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} className="search">
          <input
            name="search-input"
            type="text"
            placeholder="Search Topic..."
            onChange={this.handleChange}
            value={this.state.value}
            className="form-control"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-secondary button-addon2">Search</button>
        </form>
        <div>
          <div>
            <div className="container">
              <div className="container">
                <div className="row bg-dark mt-5 rounded-pill">
                  {this.state.content.map((user, index) => (
                    <div className="col-md-3 my-5 " key={index}>
                      <div className="card">
                        <img src={user.urlToImage} className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">{user.title}</h5>
                          <a href={user.url}>See the detail</a>
                          <h6 className="card-subtitle mb-2 text-muted">
                            {user.source.id}
                          </h6>
                          <h6 className="card-subtitle mb-2 text-muted">
                            {user.publishedAt}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
