import './DeputadoCard.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const DeputadoCard = ({ id, nome, siglaPartido, urlFoto }) => {
  return (
    <div className="deputado-card card">
      <div className="card-image">
        <figure className="image">
          <img className="deputado-img" src={urlFoto} alt="Foto do deputado" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content deputado-info">
            <p className="title">{nome}</p>
            <p className="tags has-addons">
              <span className="tag">Partido:</span>
              <span className="tag is-primary">{siglaPartido}</span>
            </p>
          </div>
        </div>
        <div className="content">
          <Link
            className="detalhes-link card-footer-item"
            to={`/deputado/${id}`}
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeputadoCard;
