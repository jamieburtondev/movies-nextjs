import Movie from "./movie";
import Person from "./person";

export default function Results({ content, movie, person }) {
  return (
    <main>
      {content.map((element, index) => (
        <div key={`element-${index}`}>
          { movie && <Movie movie={element} /> }
          { person && <Person person={element} /> }
        </div>
      ))}
    </main>
  );
}
