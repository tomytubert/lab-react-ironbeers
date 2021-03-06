import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BeerCard from '../../components/BeerCard/BeerCard';

function SingleBeer({ beersList }) {
  const initialState = {
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
    getData: false,
  };

  const [state, setState] = React.useState(initialState);
  const { beerId } = useParams();

  useEffect(() => {
    const beersDetails = beersList.data.find((beer) => beer._id === beerId);
    if (beersDetails) {
      setState({
        ...beersDetails,
        getData: true,
      });
    }
  }, []);

  return (
    <div>
      {!state.getData ? <h1>...Loading</h1> : <BeerCard beer={state} />}
    </div>
  );
}

export default SingleBeer;
