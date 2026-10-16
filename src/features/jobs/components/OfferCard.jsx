export function OfferCard({ item, title }) {
  return (
    <>
      <p>{item.job}</p>
      <p>{item.salary}</p>
      <p>{item.format}</p>
      <a href={item.link} target="_blank">
        {item.link}
      </a>
    </>
  );
}
