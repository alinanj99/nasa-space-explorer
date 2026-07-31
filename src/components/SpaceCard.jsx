export default function SpaceCard({ spaceData }) {
  return (
    <main>
      {spaceData.media_type === "image" ? (
        <img src={spaceData.url} alt={spaceData.title} />
      ) : (
        <iframe
          src={spaceData.url}
          title={spaceData.title}
          allowFullScreen
        />
      )}

      <h2>{spaceData.title}</h2>

      <p className="date">{spaceData.date}</p>

      <p className="explanation">{spaceData.explanation}</p>
    </main>
  );
}