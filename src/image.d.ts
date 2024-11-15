// Definindo a interface para uma imagem
interface Image {
    src: string;           // Caminho ou URL da imagem
    alt: string;           // Texto alternativo para a imagem
    width?: number;        // Largura da imagem (opcional)
    height?: number;       // Altura da imagem (opcional)
  }
  
  // Componente de Imagem em React
  declare module '*.jpg' {
    const content: Image;
    export default content;
  }
  
  declare module '*.png' {
    const content: Image;
    export default content;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
    export default content;
  }
  
  
  declare module '*.gif' {
    const content: Image;
    export default content;
  }
  declare module '*.webp' {
    const content: Image;
    export default content;
  }