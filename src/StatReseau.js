function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((sum, l) => sum + l.arrets, 0);
  const ligneMax = lignes.reduce((max, l) => l.arrets > max.arrets ? l : max, lignes[0]);

  return (
    <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
      <div style={carte}>
        <div style={chiffre}>{totalLignes}</div>
        <div style={label}>Lignes</div>
      </div>
      <div style={carte}>
        <div style={chiffre}>{totalArrets}</div>
        <div style={label}>Arrêts total</div>
      </div>
      <div style={carte}>
        <div style={chiffre}>Ligne {ligneMax.numero}</div>
        <div style={label}>Plus d'arrêts ({ligneMax.arrets})</div>
      </div>
    </div>
  );
}

const carte = {
  flex: 1, backgroundColor: '#fff', borderRadius: '8px',
  padding: '16px', textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};
const chiffre = { fontSize: '1.5rem', fontWeight: 'bold', color: '#0a6e31' };
const label = { fontSize: '0.8rem', color: '#7f8c8d', marginTop: '4px' };

export default StatReseau;