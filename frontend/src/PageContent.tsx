import './App.css';
import { artists, eps, singles, albums } from './MusicData';

const PageContent = () => {

    const handleVoteClick = (artist: string, item?: string) => {
        console.log(`Voted for ${artist} ${item}`)
    }

  return (
    <div className='content-div'>
    <h1 className='selection-header'> Our Selection: </h1>
      <h2>Albums:</h2>
      <div className='list'>
        {albums.map((album, index) => (
          <div key={`${album.artist}-${album.name}-${index}`} className='list-item'>
            <div onClick={() =>handleVoteClick(album.artist, album.name)} 
            className='main-image' style={{ width: '150px', height: '150px', backgroundImage: `url('${album.cover}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}> <h1>Vote</h1> </div>
            <h3>{album.name}</h3>
            <p>Artist: {album.artist}</p>
            <p>Year: {album.year}</p>
          </div>
        ))}
      </div>

      <h2>EP's:</h2>
      <div className='list'>
        {eps.map((ep, index) => (
          <div key={`${ep.artist}-${ep.name}-${index}`} className='list-item'>
            <div onClick={() =>handleVoteClick(ep.artist, ep.name)} 
            className='main-image' style={{ width: '140px', height: '140px', backgroundImage: `url('${ep.cover}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}> <h1>Vote</h1> </div>
            <h3>{ep.name}</h3>
            <p>Artist: {ep.artist}</p>
            <p>Year: {ep.year}</p>
          </div>
        ))}
      </div>

      <h2>Singles:</h2>
      <div className='list'>
        {singles.map((single, index) => (
          <div key={`${single.artist}-${single.name}-${index}`} className='list-item'>
            <div onClick={() =>handleVoteClick(single.artist, single.name)}
            className='main-image' style={{ width: '130px', height: '130px', backgroundImage: `url('${single.cover}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}> <h1>Vote</h1> </div>
            <h3>{single.name}</h3>
            <p>Artist: {single.artist}</p>
            <p>Year: {single.year}</p>
          </div>
        ))}
      </div>

      <h2>Artists:</h2>
      <div className='list'>
        {artists.map((artist, index) => (
          <div key={`${artist.name}-${index}`} className='list-item'>
            <div onClick={() =>handleVoteClick(artist.name, ``)}
             className='main-image' style={{ width: '120px', height: '120px', backgroundImage: `url('${artist.picture}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius:'50%' }}><h1>Vote</h1> </div>
            <h3>{artist.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageContent;