function InfoCard({ title, text, number }) {
  return (
    <article className="info-card">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default InfoCard;
