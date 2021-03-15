import { SEARCH } from "../../constants";
import { searchById, imagePath } from "../../util";
import Image from "next/image";

export default function SearchMovie(props) {
  const { result } = props;

  return (
    <div>
      <h1> {result.title} </h1>
      <Image src={imagePath(result.poster_path)} width={100} height={100} />
      <p>{result.overview}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const result = await searchById({
    type: SEARCH.MOVIES,
    id,
  });

  return {
    props: {
      result,
    },
  };
}
