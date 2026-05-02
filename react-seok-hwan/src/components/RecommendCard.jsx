import "../styles/components/recommend-card.css";

function RecommendCard({ title, category, description }) {
  return (
    <article className="recommend-card">
      <span className="recommend-card__category">{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default RecommendCard;
