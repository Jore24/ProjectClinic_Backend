export const fecha = () => {
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);
  const dateHoy = hoy.toLocaleDateString();
  const fecha = dateHoy.split('/').join('-');
  return fecha;
  
};
