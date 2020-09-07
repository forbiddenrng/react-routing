import React from 'react';

import Article from '../components/Article'
const articles = [
  {
    id: 1,
    title: "czym jest teoria strun",
    author: "Jan Nowak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta beatae adipisci illo dolore deleniti culpa voluptas, quos quasi quibusdam odio consequuntur vero eveniet qui. Molestias quis tempora earum obcaecati.",
  },
  {
    id: 2,
    title: "czym jest paradoks fermiego",
    author: "Ania Kwiatkowska",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta beatae adipisci illo dolore deleniti culpa voluptas, quos quasi quibusdam odio consequuntur vero eveniet qui. Molestias quis tempora earum obcaecati.",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Jan Kowalski",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta beatae adipisci illo dolore deleniti culpa voluptas, quos quasi quibusdam odio consequuntur vero eveniet qui. Molestias quis tempora earum obcaecati.",
  }
]

const HomePage = () => {

  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))
  return (
    <div className="home">
      {artList}
    </div>
  );
}

export default HomePage;