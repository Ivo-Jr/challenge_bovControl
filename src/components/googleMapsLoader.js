import { useJsApiLoader } from '@react-google-maps/api';

export const GoogleMapsLoader = ({ children }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCQllhRUzJEG_2ym83va97Mle3NGUVGb0k"
  });

  if (loadError) return <div>Erro ao carregar o Google Maps</div>;

  return isLoaded ? children : <div>Carregando o Google Maps...</div>;
};