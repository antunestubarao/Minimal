import "./Card.css";

function Card() {
  return (
    <div>
      <div className="card">
        <img
          className="card-image"
          src="https://r2.erweima.ai/imgcompressed/compressed_bcef76a0e27067bb727cd9038583fd71.webp"
          alt="Avatar"
          width="150"
        />
        <h3 className="card-title">Fundadora</h3>
        <p className="card-text">Rosangela Menegaz</p>
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://img.freepik.com/premium-photo/cute-girl-3d-character-design-cartoon-girl-avatar_432516-5514.jpg?w=740"
          alt="Avatar"
          width="150"
        />
        <h3 className="card-title">Social Media</h3>
        <p className="card-text">Laís Menegaz</p>
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://img.freepik.com/vetores-premium/ilustracao-de-avatar-de-estudante-icone-de-perfil-de-usuario-avatar-de-jovem_118339-4402.jpg"
          alt="Avatar"
          width="150"
        />
        <h3 className="card-title">FuturoDev</h3>
        <p className="card-text">Rodrigo Antunes</p>
      </div>
    </div>
  );
}

export default Card;
