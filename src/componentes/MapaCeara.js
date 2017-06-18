import React, { Component } from 'react';
import cidades from './CidadesData.json';

class MapaCeara extends Component {

  render() {

    console.log("imprimindo log");
    console.log(cidades);

    let pathStyle = {
      fill: '#f6ead9',
      stroke: '#72706f'
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" width="600" height="730" viewBox="0 0 800 973" strokeLinecap="round" strokeLinejoin="round">
      <g>
        {
          cidades.map(function(cidade){
            return (
              <path key={cidade.id} id={cidade.id} d={cidade.path} style={pathStyle}>
                <title>{cidade.rotulo}</title>
              </path>
            );
          })
        }
        </g>
      </svg>
    )

  }


    
}


export default MapaCeara;
