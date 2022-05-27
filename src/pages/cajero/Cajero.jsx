import React from 'react'

import TopVar from '../../components/topvar/TopVar'
import Slide from '../../components/carrusel/Mesas'
import Productos from '../../components/table/Productos'
import Boleta from '../../components/modal/boleta/info/BoletaCajero'

import topCustomers from '../../assets/json/table/productos.json'
import boleta_info from '../../assets/json/boleta/boletaInfo.json'

const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;

const renderCustomerBody = (item, index) => (
    <tr key={index}>
      <td>
        <img 
          src={require(`../../assets/img/productos/comida.png`)}
          alt="foto_comida"
        />
      </td>
      <td>{item.nombre}</td>
      <td>{item.fecha}</td>
      <td>{item.tipo}</td>
      <td>{item.precio}</td>
      <td>{item.acciones}</td>
    </tr>
);

const Cajero = () => {
  return (
    <div className='layout-cajero__content'>
        <TopVar/>
        <div className="row">
          <div className="data col-8">
            <div className="carrusel col-12">
              <h2>Mesas</h2>
              <Slide/>
            </div>
            <div className="table col-12">
              <div className="table-header">
                <h2>Productos</h2>
              </div>
              <div className="table-body">
              <Productos
                headData={topCustomers.head}
                renderHead={(item, index) => renderCustomerHead(item, index)}
                bodyData={topCustomers.body}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
              </div>
              <div className="table-footer">
                Ver todos los productos
              </div>
            </div>
          </div>
          <div className="data col-4">
            <div className="boleta col-12">
              <Boleta
                head={boleta_info.head}
                body={boleta_info.body}
                foot={boleta_info.foot}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cajero