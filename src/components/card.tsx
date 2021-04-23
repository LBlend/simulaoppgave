interface CardData {
  type: string;
  id: string;
  description: string;
  displayId: string;
}

function Card(data: CardData) {
  return (
    <div className="card">
      <div className={`card-title ${data.type}`}>
        <p>{data.displayId}</p>
      </div>
      <p>{data.description}</p>
    </div>
  );
}

export default Card;
