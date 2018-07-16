import React from 'react';
import ReactDOM from 'react-dom'
import { Component } from 'react'
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { worker } from 'cluster';
import { clearLine } from 'readline';

const headers = [
  "タイトル", "著者", "言語", "出版年", "売上部数"
]

const data = [{
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
];

const obj = [{
  name: "onion",
  price: ".99",
  id: 1
}, {
  name: "pepper",
  price: "1.25",
  id: 2
}, {
  name: "broccoli",
  price: "3.00",
  id: 3
}];

// class Excel extends Comment {
//   render () {
//     return (
//       <div>
//         <Table />
//       </div>
//     )
//   }
// }

// const Table = () => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           {this.props.headers.map(function(title, idx) {
//             <th key={idx}>{title}</th>
//           })}
//         </tr>
//       </thead>
//       <tbody>
//         {/* {this.props.data.map(function(row) {
//           <tr>
//             <td key={data.title}>{data.title}</td>
//             <td key={data.author}>{data.author}</td>
//             <td key={data.lang}>{data.lang}</td>
//             <td key={data.publish_year}>{data.publish_year}</td>
//             <td key={data.sales}>{data.sales}</td>
//           </tr>
//         })} */}
//       </tbody>
//     </table>
//   )
// }
// "タイトル", "著者", "言語", "出版年", "売上部数"


class TableRow extends Component {
  render() {
    const {
      data
    } = this.props;
    const row = data.map((data) =>
    <tr>
      <td key={data.title}>{data.title}</td>
      <td key={data.author}>{data.author}</td>
      <td key={data.lang}>{data.lang}</td>
      <td key={data.publish_year}>{data.publish_year}</td>
      <td key={data.sales}>{data.sales}</td>
    </tr>
    );
    return (
      <span>{row}</span>
    );
  }
}

// ReactDOM.render(
//   React.createElement(Excel, {
//     heders: headers,
//     data: data
//   })
// )



render(
  <table>
    <TableRow data={data}/>
  </table>,
   
   document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
