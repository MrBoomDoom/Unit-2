import './App.css';
import Header from './components/Header'
import MovieCard from './components/Header'
import MovieScreen from './components/Header'
import Watchlist from './components/Header'

function App() {

  const getData = () => {
    axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
        .then((res) => {
            console.log(res.data.results);
            setMovieList(res.data.results);
        });
};

useEffect(() => {
    getData();
}, [page]);

const addMovie = (movie) => setList([...list, movie]);

  return (
      <div className="App">
          <Header/>
              <main>
                <MovieScreen
                  addMovie={addMovie}
                  movieList={movieList}
                  page={page}
                  setPage={setPage}
                  list={list}
                />
                <watchlist list={list}/>
              </main>
      </div>
  );
}

export default App;
