import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const headers = ["タイトル", "著者", "言語", "出版年", "売上部数"]

const data = {
  contents: [{
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    lang: "English",
    publish_year: "1954-1955",
    sales: "150 million"}, {
    title: "Le Petit Prince (The Little Prince)",
    author: "Antoine de Saint-Exupéry",
    lang: "French",
    publish_year: "1943",
    sales: "140 million"}, {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    lang: "English",
    publish_year: "1997",
    sales: "107 million"}, {
    title:"And Then There Were None",
    author: "Agatha Christie",
    lang:"English",
    publish_year: "1939",
    sales: "100 million"}, {
    title: "Dream of the Red Chamber",
    author: "Cao Xueqin",
    lang: "Chinese",
    publish_year: "1754-1791",
    sales: "100 million"}, {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    lang: "English",
    publish_year: "1937",
    sales: "100 million"}, {
    title: "She: A History of Adventure",
    author: "H. Rider Haggard",
    lang: "English",
    publish_year: "1887",
    sales: "100 million"},
  ]
}

// テーブルHead部分
class TableHeader extends React.Component {
  render () {
    const {
      headers
    } = this.props
    const header = headers.map((title, idx) =>
      <th key={idx}>{title}</th>
    )
    return (
      <thead>
        <tr>
          {header}
        </tr>
      </thead>
    )
  }
}
// テーブルBody部分
class TableRow extends React.Component {
  render() {
    const {
      data
    } = this.props;
    const row = data.contents.map((data, i) =>
    <tr>
      <td key={data.title}>{data.title}</td>
      <td key={data.author}>{data.author}</td>
      <td key={data.lang}>{data.lang}</td>
      <td key={data.publish_year}>{data.publish_year}</td>
      <td key={data.sales}>{data.sales}</td>
    </tr>
    );
    return (
      <tbody>
        {row}
      </tbody>
    );
  }
}

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <table>
        <TableHeader headers={this.props.headers} />
        <TableRow data={this.props.data} />
      </table>
    );
  }
}

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.string
  ),
  data: PropTypes.object
}

ReactDOM.render(<Table data={data} headers={headers} />,
   document.getElementById("root"));
