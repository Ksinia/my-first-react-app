// src/components/TodoList.js
import React from "react";
import ArticleCard from "./ArticleCard";

export default class TodoList extends React.Component {
  // the initial state
  state = {
    loading: true
  };

  // ...
  componentDidMount() {
    // (1) fetch some data (hopefully, something resembling a list of articles)
    // (2) put it in component local state (as per the shape discussed above)
    // (3) ...and if the loading fails, set an error state like discussed above
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then(response => response.json())
      .then(articles => {
        this.setState({ loading: false, articles: articles });
      })
      .catch(() =>
        this.setState({
          loading: false,
          error: true
        })
      );
  }

  render() {
    // remember there are three different states the
    //  component can be in: loading the todos,
    //  successfully loaded, or errored

    if (this.state.loading) {
      return <div>Loading data...</div>;
    } else if (this.state.error) {
      return <div>Cannot load data</div>;
    } else {
      return (
        <div>
          {this.state.articles.map(article => {
            return (
              <ArticleCard
                title={article.title}
                description={article.body}
                key={article.id}
              />
            );
          })}
        </div>
      );
    }
  }
}
