import React from 'react';

// Método 1: Importação direta (recomendado para imagens pequenas)
import cloudImage from '/images/backgrounds/cloud1.jpg';

// Método 2: Importação dinâmica
const getImageUrl = (path: string) => `/images/backgrounds/${path}`;

const ImageExample: React.FC = () => {
  return (
    <div>
      {/* Método 1: Usando import direto */}
      <img 
        src={cloudImage} 
        alt="Nuvem" 
        className="w-48 h-32 object-cover"
      />
      
      {/* Método 2: Usando URL direta (para imagens na pasta public) */}
      <img 
        src="/images/backgrounds/cloud1.jpg" 
        alt="Nuvem" 
        className="w-48 h-32 object-cover"
      />
      
      {/* Método 3: Usando função helper */}
      <img 
        src={getImageUrl('cloud1.jpg')} 
        alt="Nuvem" 
        className="w-48 h-32 object-cover"
      />
    </div>
  );
};

export default ImageExample;