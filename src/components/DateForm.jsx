export default function DateForm({
  selectedDate,
  setSelectedDate,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>Choose a date:</label>

      <input
        type="date"
        value={selectedDate}
        onChange={(event) => setSelectedDate(event.target.value)}
      />

      <button>Explore</button>
    </form>
  );
}