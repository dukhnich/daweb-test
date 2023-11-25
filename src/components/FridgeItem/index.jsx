const FridgeItem = ({name, type, expiration}) => (
  <div className="fridge-item">
    <div className="fridge-item__name">{name}</div>
    <div className="fridge-item__type">{type}</div>
    <div className="fridge-item__expiration">{expiration}</div>
  </div>
);
export default FridgeItem;
