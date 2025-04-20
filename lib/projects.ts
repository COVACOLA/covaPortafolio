export type Project = {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
  };
  
  const projects: Project[] = [
    {
      id: 'devops-pipeline',
      title: 'CI/CD cloud con Docker & GitHub Actions',
      description:
        'Pipeline completo que construye, prueba y despliega una aplicación contenedorizada en AWS ECS con Trivy para escaneo de vulnerabilidades.',
      image: '/images/devops.jpg',
      url: 'https://github.com/tuusuario/devops-pipeline'
    },
    {
      id: 'ml-api',
      title: 'API de ML para predicción de demanda',
      description:
        'Modelo de Machine Learning desplegado con FastAPI y Docker, sirviendo predicciones de demanda de producto en tiempo real.',
      image: '/images/ml.jpg',
      url: 'https://github.com/tuusuario/ml-api'
    },
    // añade más proyectos aquí
  ];
  
  export default projects;
  