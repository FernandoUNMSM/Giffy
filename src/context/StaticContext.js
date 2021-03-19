import React from 'react'

const Context = React.createContext({
  name: 'nombre-sin-provider',
  suscribeteAlCanal: 'true'
}
)//Estos datos se cargaran si el consumidor intenta acceder sin tener el .Provider

export default Context