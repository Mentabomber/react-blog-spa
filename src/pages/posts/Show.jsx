import { useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams, useSearchParams } from "react-router-dom";

export default function Show() {
  const {slug} = useParams();

  // Ottengo uno state con i query string presenti
  const [searchParams, setSearchParams] = useSearchParams();
  const [post, setPost] = useState({});
  const navigation = useNavigate();

  console.log(searchParams);

  async function fetchData() {
    setPost(await (await (fetch('http://localhost:3307/posts/' + slug))).json());
  }

  useEffect(() => {
    fetchData();

    // se non esiste il parametro "nome", reindirizzo l'utente alla homepage
    // if (!searchParams.get("nome")) {
    //   navigation("/");
    // }
  }, []);

  return (
    <div>
      <button onClick={() => navigation(-1)}>Indietro</button>
      <h1>Dettagli post #{slug} - {post?.title}</h1>
    </div>
  );
}